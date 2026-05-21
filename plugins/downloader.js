/**
 * DOWNLOADER Commands
 * .play, .video, .facebook, .ig, .tt, .ttsearch, .pinterest, .yts, .tourl
 */

export const metadata = {
  command: 'downloader',
  description: 'Téléchargement de contenu',
  category: 'DOWNLOADER',
  subcommands: ['play', 'video', 'facebook', 'ig', 'tt', 'ttsearch', 'pinterest', 'yts', 'tourl']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'play':
        await sock.sendMessage(sender, { text: '🔄 .play [titre] - Télécharger une chanson' });
        break;

      case 'video':
        await sock.sendMessage(sender, { text: '🔄 .video [lien] - Télécharger une vidéo' });
        break;

      case 'facebook':
        await sock.sendMessage(sender, { text: '🔄 .facebook [lien] - Télécharger depuis Facebook' });
        break;

      case 'ig':
        await sock.sendMessage(sender, { text: '🔄 .ig [lien] - Télécharger depuis Instagram' });
        break;

      case 'tt':
        await sock.sendMessage(sender, { text: '🔄 .tt [lien] - Télécharger depuis TikTok' });
        break;

      case 'ttsearch':
        await sock.sendMessage(sender, { text: '🔄 .ttsearch [requête]' });
        break;

      case 'pinterest':
        await sock.sendMessage(sender, { text: '🔄 .pinterest [lien]' });
        break;

      case 'yts':
        await sock.sendMessage(sender, { text: '🔄 .yts [requête] - Rechercher sur YouTube' });
        break;

      case 'tourl':
        await sock.sendMessage(sender, { text: '🔄 .tourl [fichier]' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur downloader:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
