import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Store all commands
const commands = new Map();

/**
 * Load all plugins from /plugins directory
 */
export async function loadCommands() {
  const pluginsDir = path.join(__dirname, 'plugins');

  if (!fs.existsSync(pluginsDir)) {
    fs.mkdirSync(pluginsDir, { recursive: true });
    console.log('✓ Dossier /plugins créé');
    return;
  }

  const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'));

  console.log(`\n📦 Chargement de ${files.length} plugin(s)...\n`);

  for (const file of files) {
    try {
      const filePath = path.join(pluginsDir, file);
      const module = await import(`file://${filePath}`);

      if (module.handler && module.metadata) {
        const { metadata } = module;
        const commandName = metadata.command || file.replace('.js', '');

        commands.set(commandName, {
          handler: module.handler,
          metadata: metadata,
          file: file
        });

        console.log(`✓ ${commandName.toUpperCase()}: ${metadata.description}`);
      } else {
        console.warn(`⚠️ ${file} n'a pas handler/metadata`);
      }
    } catch (error) {
      console.error(`✗ Erreur lors du chargement de ${file}:`, error.message);
    }
  }

  console.log(`\n✓ ${commands.size} commande(s) chargée(s)\n`);
}

/**
 * Execute a command
 */
export async function executeCommand(commandName, msg, args, sock) {
  const command = commands.get(commandName);

  if (!command) {
    return false;
  }

  try {
    await command.handler(msg, args, sock);
    return true;
  } catch (error) {
    console.error(`Erreur lors de l'exécution de ${commandName}:`, error);
    return false;
  }
}

/**
 * Get all commands
 */
export function getAllCommands() {
  return commands;
}

/**
 * Get commands by category
 */
export function getCommandsByCategory(category) {
  const filtered = new Map();
  for (const [name, cmd] of commands) {
    if (cmd.metadata.category === category) {
      filtered.set(name, cmd);
    }
  }
  return filtered;
}

/**
 * Get all categories
 */
export function getCategories() {
  const categories = new Set();
  for (const [, cmd] of commands) {
    if (cmd.metadata.category) {
      categories.add(cmd.metadata.category);
    }
  }
  return Array.from(categories);
}
