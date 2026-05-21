/**
 * AI & SEARCH Commands
 * .ai, .image, .lyrics, .wiki, .define, .wallpaper, .weather
 */

export const metadata = {
  command: 'ai',
  description: 'Commandes IA et recherche',
  category: 'AI & SEARCH',
  subcommands: ['ai', 'image', 'lyrics', 'wiki', 'define', 'wallpaper', 'weather']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'ai':
        await sock.sendMessage(sender, { text: '🔄 .ai [question] - Poser une question à l\'IA' });
        break;

      case 'image':
        await sock.sendMessage(sender, { text: '🔄 .image [description] - Générer une image' });
        break;

      case 'lyrics':
        await sock.sendMessage(sender, { text: '🔄 .lyrics [chanson] - Obtenir les paroles' });
        break;

      case 'wiki':
        await sock.sendMessage(sender, { text: '🔄 .wiki [sujet] - Rechercher sur Wikipedia' });
        break;

      case 'define':
        await sock.sendMessage(sender, { text: '🔄 .define [mot] - Définition du mot' });
        break;

      case 'wallpaper':
        await sock.sendMessage(sender, { text: '🔄 .wallpaper [requête] - Obtenir un fond d\'écran' });
        break;

      case 'weather':
        await sock.sendMessage(sender, { text: '🔄 .weather [ville] - Météo' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur ai:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
