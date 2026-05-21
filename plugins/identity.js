/**
 * IDENTITY Commands
 * .fullpp, .getpp, .setname, .setdesc, .wabot, .powner, .developer
 */

export const metadata = {
  command: 'identity',
  description: 'Commandes d\'identité et profil',
  category: 'IDENTITY',
  subcommands: ['fullpp', 'getpp', 'setname', 'setdesc', 'wabot', 'powner', 'developer']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'fullpp':
        await sock.sendMessage(sender, { text: '🔄 .fullpp - Voir votre photo de profil complète' });
        break;

      case 'getpp':
        await sock.sendMessage(sender, { text: '🔄 .getpp [@user] - Obtenir la PP d\'un utilisateur' });
        break;

      case 'setname':
        await sock.sendMessage(sender, { text: '🔄 .setname [nouveau nom] - Changer votre nom' });
        break;

      case 'setdesc':
        await sock.sendMessage(sender, { text: '🔄 .setdesc [nouvelle bio] - Changer votre bio' });
        break;

      case 'wabot':
        await sock.sendMessage(sender, { text: '🔄 .wabot - Infos du bot' });
        break;

      case 'powner':
        await sock.sendMessage(sender, { text: '🔄 .powner - Contacter le propriétaire' });
        break;

      case 'developer':
        await sock.sendMessage(sender, { text: '🔄 .developer - Infos du développeur' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur identity:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
