/**
 * TOOLS & CONVERSION Commands
 * .vv, .url, .sticker, .inbox, .jid, .tempmail, .pair, .save, .take, .tts, .stt, .shorten, .calc, .tzone, .color, .age
 */

export const metadata = {
  command: 'tools',
  description: 'Outils et convertisseurs',
  category: 'TOOLS & CONV',
  subcommands: ['vv', 'url', 'sticker', 'inbox', 'jid', 'tempmail', 'pair', 'save', 'take', 'tts', 'stt', 'shorten', 'calc', 'tzone', 'color', 'age']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'vv':
        await sock.sendMessage(sender, { text: '🔄 .vv - Voir les messages \"À afficher une fois\"' });
        break;

      case 'url':
        await sock.sendMessage(sender, { text: '🔄 .url [link] - Obtenir des infos sur une URL' });
        break;

      case 'sticker':
        await sock.sendMessage(sender, { text: '🔄 .sticker - Convertir une image en sticker' });
        break;

      case 'inbox':
        await sock.sendMessage(sender, { text: '🔄 .inbox - Voir les messages non lus' });
        break;

      case 'jid':
        await sock.sendMessage(sender, { text: '🔄 .jid - Obtenir votre JID' });
        break;

      case 'tempmail':
        await sock.sendMessage(sender, { text: '🔄 .tempmail - Générer une adresse email temporaire' });
        break;

      case 'pair':
        await sock.sendMessage(sender, { text: '🔄 .pair - Obtenir le code d\'appairage' });
        break;

      case 'save':
        await sock.sendMessage(sender, { text: '🔄 .save - Sauvegarder un message' });
        break;

      case 'take':
        await sock.sendMessage(sender, { text: '🔄 .take [author] [packname]' });
        break;

      case 'tts':
        await sock.sendMessage(sender, { text: '🔄 .tts [langue] [texte] - Convertir en audio' });
        break;

      case 'stt':
        await sock.sendMessage(sender, { text: '🔄 .stt - Convertir l\'audio en texte' });
        break;

      case 'shorten':
        await sock.sendMessage(sender, { text: '🔄 .shorten [url]' });
        break;

      case 'calc':
        await sock.sendMessage(sender, { text: '🔄 .calc [expression] - Calculatrice' });
        break;

      case 'tzone':
        await sock.sendMessage(sender, { text: '🔄 .tzone [pays] - Obtenir l\'heure locale' });
        break;

      case 'color':
        await sock.sendMessage(sender, { text: '🔄 .color [hex/rgb] - Infos sur une couleur' });
        break;

      case 'age':
        await sock.sendMessage(sender, { text: '🔄 .age [date-naissance] - Calculer l\'âge' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur tools:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
