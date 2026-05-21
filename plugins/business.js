/**
 * BUSINESS & PRODUCTIVITY Commands
 * .invoice, .catalog, .order, .payment, .client, .support, .todo, .note, .remind, .calendar, .meeting, .deadline
 */

export const metadata = {
  command: 'business',
  description: 'Outils métier et productivité',
  category: 'BUSINESS & PROD',
  subcommands: ['invoice', 'catalog', 'order', 'payment', 'client', 'support', 'todo', 'note', 'remind', 'calendar', 'meeting', 'deadline']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'invoice':
        await sock.sendMessage(sender, { text: '🔄 .invoice [client] [montant] - Générer une facture' });
        break;

      case 'catalog':
        await sock.sendMessage(sender, { text: '🔄 .catalog - Créer un catalogue de produits' });
        break;

      case 'order':
        await sock.sendMessage(sender, { text: '🔄 .order [details] - Enregistrer une commande' });
        break;

      case 'payment':
        await sock.sendMessage(sender, { text: '🔄 .payment [montant] - Voir les paiements' });
        break;

      case 'client':
        await sock.sendMessage(sender, { text: '🔄 .client [nom] - Enregistrer un client' });
        break;

      case 'support':
        await sock.sendMessage(sender, { text: '🔄 .support [problème]' });
        break;

      case 'todo':
        await sock.sendMessage(sender, { text: '🔄 .todo [tâche] - Ajouter à la liste' });
        break;

      case 'note':
        await sock.sendMessage(sender, { text: '🔄 .note [contenu] - Prendre une note' });
        break;

      case 'remind':
        await sock.sendMessage(sender, { text: '🔄 .remind [heure] [message]' });
        break;

      case 'calendar':
        await sock.sendMessage(sender, { text: '🔄 .calendar [date] [événement]' });
        break;

      case 'meeting':
        await sock.sendMessage(sender, { text: '🔄 .meeting [participant] [heure]' });
        break;

      case 'deadline':
        await sock.sendMessage(sender, { text: '🔄 .deadline [date] [projet]' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur business:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
