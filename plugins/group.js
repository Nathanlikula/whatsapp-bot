/**
 * GROUP Commands
 * .tagall, .tagadmins, .hidetag, .kick, .add, .promote, .demote, .promoteall, .demoteall, .invite, .open, .close, .grouplink, .revoke, .gstatus, .disappearing, .pinm, .approveall, .poll, .bible
 */

export const metadata = {
  command: 'group',
  description: 'Commandes de gestion de groupe',
  category: 'GROUP',
  subcommands: ['tagall', 'tagadmins', 'hidetag', 'kick', 'add', 'promote', 'demote', 'promoteall', 'demoteall', 'invite', 'open', 'close', 'grouplink', 'revoke', 'gstatus', 'disappearing', 'pinm', 'approveall', 'poll', 'bible']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const isGroup = msg.isGroup || sender?.endsWith('@g.us');
  const subcommand = args[0]?.toLowerCase();

  if (!isGroup) {
    await sock.sendMessage(sender, { text: '⚠️ Cette commande ne fonctionne que dans les groupes.' });
    return;
  }

  try {
    switch (subcommand) {
      case 'tagall':
        await sock.sendMessage(sender, { text: '🔄 .tagall [message] - Mention tous les membres' });
        break;

      case 'tagadmins':
        await sock.sendMessage(sender, { text: '🔄 .tagadmins [message]' });
        break;

      case 'hidetag':
        await sock.sendMessage(sender, { text: '🔄 .hidetag [message]' });
        break;

      case 'kick':
        await sock.sendMessage(sender, { text: '🔄 .kick @user - Expulse un membre' });
        break;

      case 'add':
        await sock.sendMessage(sender, { text: '🔄 .add [number] - Ajoute un membre' });
        break;

      case 'promote':
        await sock.sendMessage(sender, { text: '🔄 .promote @user - Promouvoir en admin' });
        break;

      case 'demote':
        await sock.sendMessage(sender, { text: '🔄 .demote @user - Rétrograder d\'admin' });
        break;

      case 'promoteall':
        await sock.sendMessage(sender, { text: '🔄 .promoteall - Promouvoir tous en admin' });
        break;

      case 'demoteall':
        await sock.sendMessage(sender, { text: '🔄 .demoteall - Rétrograder tous' });
        break;

      case 'invite':
        await sock.sendMessage(sender, { text: '🔄 .invite - Obtenir le lien d\'invitation' });
        break;

      case 'open':
        await sock.sendMessage(sender, { text: '🔄 .open - Autoriser tous à envoyer' });
        break;

      case 'close':
        await sock.sendMessage(sender, { text: '🔄 .close - Seuls les admins peuvent envoyer' });
        break;

      case 'grouplink':
        await sock.sendMessage(sender, { text: '🔄 .grouplink - Obtenir le lien du groupe' });
        break;

      case 'revoke':
        await sock.sendMessage(sender, { text: '🔄 .revoke - Révoquer le lien d\'invitation' });
        break;

      case 'gstatus':
        await sock.sendMessage(sender, { text: '🔄 .gstatus - Afficher la description du groupe' });
        break;

      case 'disappearing':
        await sock.sendMessage(sender, { text: '🔄 .disappearing [24h/7d/90d]' });
        break;

      case 'pinm':
        await sock.sendMessage(sender, { text: '🔄 .pinm - Épingler un message' });
        break;

      case 'approveall':
        await sock.sendMessage(sender, { text: '🔄 .approveall - Approuver toutes les demandes' });
        break;

      case 'poll':
        await sock.sendMessage(sender, { text: '🔄 .poll [question|option1|option2...]' });
        break;

      case 'bible':
        await sock.sendMessage(sender, { text: '🔄 .bible [verset]' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur group:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
