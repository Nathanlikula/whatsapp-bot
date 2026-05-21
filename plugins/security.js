/**
 * SECURITY & MOD Commands\n * .antilink, .antispam, .antifake, .warn, .warnings, .ban, .unban, .antilog, .slowmode, .approve, .setrules, .rules, .announce, .schedule
 */

export const metadata = {
  command: 'security',
  description: 'Commandes de sécurité et modération',
  category: 'SECURITY & MOD',
  subcommands: ['antilink', 'antispam', 'antifake', 'warn', 'warnings', 'ban', 'unban', 'antilog', 'slowmode', 'approve', 'setrules', 'rules', 'announce', 'schedule']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const isGroup = msg.isGroup || sender?.endsWith('@g.us');
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'antilink':
        await sock.sendMessage(sender, { text: '🔄 .antilink on/off - Active/désactive la détection de liens' });
        break;

      case 'antispam':
        await sock.sendMessage(sender, { text: '🔄 .antispam on/off' });
        break;

      case 'antifake':
        await sock.sendMessage(sender, { text: '🔄 .antifake on/off - Détecte les faux numéros' });
        break;

      case 'warn':
        await sock.sendMessage(sender, { text: '🔄 .warn @user [raison] - Avertir un utilisateur' });
        break;

      case 'warnings':
        await sock.sendMessage(sender, { text: '🔄 .warnings [@user] - Voir les avertissements' });
        break;

      case 'ban':
        await sock.sendMessage(sender, { text: '🔄 .ban @user - Bannir un utilisateur' });
        break;

      case 'unban':
        await sock.sendMessage(sender, { text: '🔄 .unban @user - Débannir un utilisateur' });
        break;

      case 'antilog':
        await sock.sendMessage(sender, { text: '🔄 .antilog on/off' });
        break;

      case 'slowmode':
        await sock.sendMessage(sender, { text: '🔄 .slowmode [seconds] - Limite la fréquence des messages' });
        break;

      case 'approve':
        await sock.sendMessage(sender, { text: '🔄 .approve - Approuver une demande d\'adhésion' });
        break;

      case 'setrules':
        await sock.sendMessage(sender, { text: '🔄 .setrules [règles] - Définir les règles du groupe' });
        break;

      case 'rules':
        await sock.sendMessage(sender, { text: '🔄 .rules - Afficher les règles du groupe' });
        break;

      case 'announce':
        await sock.sendMessage(sender, { text: '🔄 .announce [message] - Faire une annonce' });
        break;

      case 'schedule':
        await sock.sendMessage(sender, { text: '🔄 .schedule [time] [message]' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur security:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
