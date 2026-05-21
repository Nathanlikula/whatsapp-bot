/**
 * FUN & GAMES Commands
 * .meme, .joke, .8ball, .ship, .roast, .truth, .dare, .lovetest, .compliment, .choose, .fancy, .character, .quote, .fact, .roll, .coinflip, .number, .reverse
 */

export const metadata = {
  command: 'fun',
  description: 'Jeux et divertissement',
  category: 'FUN & GAMES',
  subcommands: ['meme', 'joke', '8ball', 'ship', 'roast', 'truth', 'dare', 'lovetest', 'compliment', 'choose', 'fancy', 'character', 'quote', 'fact', 'roll', 'coinflip', 'number', 'reverse']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'meme':
        await sock.sendMessage(sender, { text: '🔄 .meme - Un mème aléatoire' });
        break;

      case 'joke':
        await sock.sendMessage(sender, { text: '🔄 .joke - Une blague aléatoire' });
        break;

      case '8ball':
        await sock.sendMessage(sender, { text: '🔄 .8ball [question]' });
        break;

      case 'ship':
        await sock.sendMessage(sender, { text: '🔄 .ship [@user1] [@user2]' });
        break;

      case 'roast':
        await sock.sendMessage(sender, { text: '🔄 .roast [@user] - Moquerie aléatoire' });
        break;

      case 'truth':
        await sock.sendMessage(sender, { text: '🔄 .truth - Question vérité' });
        break;

      case 'dare':
        await sock.sendMessage(sender, { text: '🔄 .dare - Défi aléatoire' });
        break;

      case 'lovetest':
        await sock.sendMessage(sender, { text: '🔄 .lovetest [@user] - Test de compatibilité' });
        break;

      case 'compliment':
        await sock.sendMessage(sender, { text: '🔄 .compliment - Compliment aléatoire' });
        break;

      case 'choose':
        await sock.sendMessage(sender, { text: '🔄 .choose [option1|option2|option3...]' });
        break;

      case 'fancy':
        await sock.sendMessage(sender, { text: '🔄 .fancy [texte]' });
        break;

      case 'character':
        await sock.sendMessage(sender, { text: '🔄 .character [nom]' });
        break;

      case 'quote':
        await sock.sendMessage(sender, { text: '🔄 .quote - Citation aléatoire' });
        break;

      case 'fact':
        await sock.sendMessage(sender, { text: '🔄 .fact - Fait aléatoire' });
        break;

      case 'roll':
        await sock.sendMessage(sender, { text: '🔄 .roll [nombre] - Lancer un dé' });
        break;

      case 'coinflip':
        await sock.sendMessage(sender, { text: '🔄 .coinflip - Pile ou face' });
        break;

      case 'number':
        await sock.sendMessage(sender, { text: '🔄 .number [1-100] - Deviner un nombre' });
        break;

      case 'reverse':
        await sock.sendMessage(sender, { text: '🔄 .reverse [texte]' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur fun:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
