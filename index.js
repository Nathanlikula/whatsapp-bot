import {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  isJidBroadcast,
  isJidStatusBroadcast
} from '@whiskeysockets/baileys';
import pino from 'pino';
import dotenv from 'dotenv';
import { loadCommands, executeCommand, getAllCommands } from './command-handler.js';
import fs from 'fs';
import path from 'path';

dotenv.config();

const logger = pino({ level: 'error' });
const PREFIX = process.env.BOT_PREFIX || '.';
const OWNER_NUMBER = process.env.OWNER_NUMBER || '0';

/**
 * Initialize WhatsApp Bot
 */
async function startBot() {
  console.log(`
╔══════════════════════════════════════════╗
║       🤖 WhatsApp Bot - Baileys 🤖       ║
║                                          ║
║    Modular & Secure Bot Platform         ║
╚══════════════════════════════════════════╝
  `);

  // Ensure session directory exists
  if (!fs.existsSync('./session')) {
    fs.mkdirSync('./session', { recursive: true });
  }

  const { state, saveCreds } = await useMultiFileAuthState('./session');

  const sock = makeWASocket({
    auth: state,
    logger: logger,
    printQRInTerminal: true,
    browser: ['Ubuntu', 'Chrome', '121.0'],
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true
  });

  // Load all plugins
  await loadCommands();

  // Handle authentication updates
  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect, isNewLogin } = update;

    if (connection === 'connecting') {
      console.log('\n🔄 Connexion en cours...');
    }

    if (connection === 'open') {
      console.log(`\n✅ Bot connecté avec succès!`);
      console.log(`📱 Numéro: ${sock.user?.id.split(':')[0]}`);
      console.log(`✨ Prêt à recevoir des messages!\n`);

      // Set bot status
      await sock.sendPresenceUpdate('available');
    }

    if (
      connection === 'close' &&
      lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut
    ) {
      console.log('❌ Connexion perdue. Reconnexion...');
      startBot();
    } else if (
      lastDisconnect?.error?.output?.statusCode === DisconnectReason.loggedOut
    ) {
      console.log('🔴 Bot déconnecté. Supprimez /session et relancez.');
    }
  });

  // Save credentials when updated
  sock.ev.on('creds.update', saveCreds);

  // Handle incoming messages
  sock.ev.on('messages.upsert', async (m) => {
    try {
      const msg = m.messages[0];

      // Ignore outgoing & status messages
      if (msg.key.fromMe || isJidBroadcast(msg.key.remoteJid)) return;

      const messageType = Object.keys(msg.message || {})[0];
      let text = '';

      if (messageType === 'conversation') {
        text = msg.message.conversation;
      } else if (messageType === 'extendedTextMessage') {
        text = msg.message.extendedTextMessage?.text || '';
      }

      const sender = msg.key.remoteJid;
      const isGroup = msg.isGroup || sender?.endsWith('@g.us');

      // Check if message starts with prefix
      if (!text.startsWith(PREFIX)) return;

      // Parse command and arguments
      const args = text.slice(PREFIX.length).trim().split(/\s+/);
      const command = args.shift().toLowerCase();

      console.log(`\n📨 Commande reçue: ${PREFIX}${command}`);
      console.log(`👤 De: ${sender}`);
      console.log(`📍 Type: ${isGroup ? 'GROUP' : 'PRIVATE'}`);

      // Execute command
      const executed = await executeCommand(command, msg, args, sock);

      if (!executed) {
        // Command not found - show helpful message
        const commands = getAllCommands();
        if (commands.size > 0) {
          await sock.sendMessage(sender, {
            text: `❌ Commande \`${PREFIX}${command}\` non trouvée.\n\nTapez \`${PREFIX}menu\` pour voir toutes les commandes.`
          });
        }
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  });
}

// Start the bot
startBot().catch(err => {
  console.error('Erreur au démarrage:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n👋 Arrêt du bot...');
  process.exit(0);
});
