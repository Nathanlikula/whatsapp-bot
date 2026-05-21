/**
 * Main Menu Plugin
 * Displays all available commands in a styled format
 */

const MENU_TEXT = `
╔════════════════════════════════════════════════════════════════════╗
║                    🤖 WHATSAPP BOT - MENU COMPLET 🤖              ║
║                    ✨ Version 1.0 - All Features ✨                ║
╚════════════════════════════════════════════════════════════════════╝

┌─ 👤 IDENTITY ─────────────────────────────────────────────────────┐
│ • .fullpp      • .getpp      • .setname     • .setdesc            │
│ • .wabot       • .powner     • .developer                          │
└────────────────────────────────────────────────────────────────────┘

┌─ 👥 GROUP ───────────────────────────────────────────────────────┐
│ • .tagall      • .tagadmins    • .hidetag    • .kick              │
│ • .add         • .promote      • .demote     • .promoteall        │
│ • .demoteall   • .invite       • .open       • .close             │
│ • .grouplink   • .revoke       • .gstatus    • .disappearing      │
│ • .pinm        • .approveall   • .poll       • .bible             │
└────────────────────────────────────────────────────────────────────┘

┌─ 🔐 SECURITY & MOD ────────────────────────────────────────────────┐
│ • .antilink    • .antispam     • .antifake   • .warn              │
│ • .warnings    • .ban          • .unban      • .antilog           │
│ • .slowmode    • .approve      • .setrules   • .rules             │
│ • .announce    • .schedule                                        │
└────────────────────────────────────────────────────────────────────┘

┌─ 💻 DEV & CYBER ──────────────────────────────────────────────────┐
│ • .json        • .base64       • .hash       • .regex             │
│ • .whois       • .dns          • .ipinfo     • .portcheck         │
│ • .portscan    • .phishcheck   • .headercheck • .hashlookup       │
│ • .binary      • .morse        • .password                        │
└────────────────────────────────────────────────────────────────────┘

┌─ 🛠️  TOOLS & CONV ────────────────────────────────────────────────┐
│ • .vv          • .url          • .sticker    • .inbox             │
│ • .jid         • .tempmail     • .pair       • .save              │
│ • .take        • .tts          • .stt        • .shorten           │
│ • .calc        • .tzone        • .color      • .age               │
└────────────────────────────────────────────────────────────────────┘

┌─ ⬇️  DOWNLOADER ───────────────────────────────────────────────────┐
│ • .play        • .video        • .facebook   • .ig                │
│ • .tt          • .ttsearch     • .pinterest  • .yts               │
│ • .tourl                                                          │
└────────────────────────────────────────────────────────────────────┘

┌─ 🤖 AI & SEARCH ──────────────────────────────────────────────────┐
│ • .ai          • .image        • .lyrics     • .wiki              │
│ • .define      • .wallpaper    • .weather                        │
└────────────────────────────────────────────────────────────────────┘

┌─ 🎮 FUN & GAMES ──────────────────────────────────────────────────┐
│ • .meme        • .joke         • .8ball      • .ship              │
│ • .roast       • .truth        • .dare       • .lovetest          │
│ • .compliment  • .choose       • .fancy      • .character         │
│ • .quote       • .fact         • .roll       • .coinflip          │
│ • .number      • .reverse                                        │
└────────────────────────────────────────────────────────────────────┘

┌─ 💼 BUSINESS & PROD ──────────────────────────────────────────────┐
│ • .invoice     • .catalog      • .order      • .payment           │
│ • .client      • .support      • .todo       • .note              │
│ • .remind      • .calendar     • .meeting    • .deadline          │
└────────────────────────────────────────────────────────────────────┘

┌─ 📚 LEARNING ─────────────────────────────────────────────────────┐
│ • .quiz        • .flashcard    • .translate  • .dictionary        │
│ • .summarize   • .explain                                        │
└────────────────────────────────────────────────────────────────────┘

┌─ ⚙️  ADMIN & LIFE ─────────────────────────────────────────────────┐
│ • .dashboard   • .logs         • .backup     • .restore           │
│ • .usage       • .apikeys      • .live-score • .match-remind      │
│ • .jersey-gen  • .uptime       • .speed                           │
└────────────────────────────────────────────────────────────────────┘

╔════════════════════════════════════════════════════════════════════╗
║  📝 Tapez .help <commande> pour obtenir l'aide sur une commande    ║
║  💡 Prefix: .  (exemple: .menu, .ai hello, .play despacito)       ║
║  🔗 Support: Contactez @developer                                 ║
╚════════════════════════════════════════════════════════════════════╝
`;

export const metadata = {
  command: 'menu',
  description: 'Affiche le menu complet avec toutes les commandes',
  category: 'MAIN',
  usage: '.menu',
  aliases: ['help', 'commands', 'cmd']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;

  try {
    await sock.sendMessage(sender, {
      text: MENU_TEXT
    });

    console.log('✓ Menu envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi du menu:', error);
    await sock.sendMessage(sender, {
      text: '❌ Erreur lors de l\'affichage du menu.'
    });
  }
};
