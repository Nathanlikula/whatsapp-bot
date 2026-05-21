/**
 * DEV & CYBER Commands
 * .json, .base64, .hash, .regex, .whois, .dns, .ipinfo, .portcheck, .portscan, .phishcheck, .headercheck, .hashlookup, .binary, .morse, .password
 */

export const metadata = {
  command: 'dev',
  description: 'Commandes de développement et cybersécurité',
  category: 'DEV & CYBER',
  subcommands: ['json', 'base64', 'hash', 'regex', 'whois', 'dns', 'ipinfo', 'portcheck', 'portscan', 'phishcheck', 'headercheck', 'hashlookup', 'binary', 'morse', 'password']
};

export const handler = async (msg, args, sock) => {
  const sender = msg.key.remoteJid;
  const subcommand = args[0]?.toLowerCase();

  try {
    switch (subcommand) {
      case 'json':
        await sock.sendMessage(sender, { text: '🔄 .json [code] - Formate et valide du JSON' });
        break;

      case 'base64':
        await sock.sendMessage(sender, { text: '🔄 .base64 encode/decode [text]' });
        break;

      case 'hash':
        await sock.sendMessage(sender, { text: '🔄 .hash [text] - Génère MD5, SHA1, SHA256' });
        break;

      case 'regex':
        await sock.sendMessage(sender, { text: '🔄 .regex [pattern] [text]' });
        break;

      case 'whois':
        await sock.sendMessage(sender, { text: '🔄 .whois [domain]' });
        break;

      case 'dns':
        await sock.sendMessage(sender, { text: '🔄 .dns [domain]' });
        break;

      case 'ipinfo':
        await sock.sendMessage(sender, { text: '🔄 .ipinfo [ip]' });
        break;

      case 'portcheck':
        await sock.sendMessage(sender, { text: '🔄 .portcheck [host] [port]' });
        break;

      case 'portscan':
        await sock.sendMessage(sender, { text: '🔄 .portscan [host]' });
        break;

      case 'phishcheck':
        await sock.sendMessage(sender, { text: '🔄 .phishcheck [url]' });
        break;

      case 'headercheck':
        await sock.sendMessage(sender, { text: '🔄 .headercheck [url]' });
        break;

      case 'hashlookup':
        await sock.sendMessage(sender, { text: '🔄 .hashlookup [hash]' });
        break;

      case 'binary':
        await sock.sendMessage(sender, { text: '🔄 .binary [text/number]' });
        break;

      case 'morse':
        await sock.sendMessage(sender, { text: '🔄 .morse encode/decode [text]' });
        break;

      case 'password':
        await sock.sendMessage(sender, { text: '🔄 .password [length]' });
        break;

      default:
        await sock.sendMessage(sender, { text: '❌ Sous-commande non reconnue.' });
    }
  } catch (error) {
    console.error('Erreur dev:', error);
    await sock.sendMessage(sender, { text: '❌ Erreur lors de l\'exécution de la commande.' });
  }
};
