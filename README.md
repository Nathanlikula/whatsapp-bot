# WhatsApp Bot - Baileys 🤖

Un bot WhatsApp modulaire et sécurisé construit avec **@whiskeysockets/baileys**.

## 🚀 Caractéristiques

- ✅ **Architecture Modulaire** - Système de plugins dynamique
- ✅ **Authentication Sécurisée** - Pairing Code avec session persistante
- ✅ **100+ Commandes** - Catégorisées et organisées
- ✅ **Command Handler** - Chargement automatique des plugins
- ✅ **Design Stylisé** - Menu avec bordures et formatage

## 📋 Catégories de Commandes

- **IDENTITY** - Informations personnelles
- **GROUP** - Gestion de groupes
- **SECURITY & MOD** - Modération et sécurité
- **DEV & CYBER** - Outils de développement
- **TOOLS & CONV** - Outils de conversion
- **DOWNLOADER** - Téléchargement de contenu
- **AI & SEARCH** - IA et recherche
- **FUN & GAMES** - Jeux et divertissement
- **BUSINESS & PROD** - Productivité
- **LEARNING** - Apprentissage
- **ADMIN & LIFE** - Admin et utilitaires

## 📦 Installation

### Prérequis
- Node.js v18+
- npm ou yarn

### Étapes

1. **Cloner et installer**
```bash
git clone https://github.com/Nathanlikula/whatsapp-bot.git
cd whatsapp-bot
npm install
```

2. **Configurer l'environnement**
```bash
cp .env.example .env
# Éditez .env avec vos paramètres
```

3. **Lancer le bot**
```bash
npm start
```

4. **Appairage WhatsApp**
   - Le bot affichera un code à 8 chiffres
   - Allez dans WhatsApp > Paramètres > Appareils liés > Appareils
   - Scannez le QR code OU entrez le code d'appairage

## 📂 Structure du Projet

```
whatsapp-bot/
├── index.js                 # Point d'entrée principal
├── command-handler.js       # Système de chargement des plugins
├── plugins/
│   ├── main.js             # Menu principal
│   ├── dev.js              # Commandes DEV
│   ├── group.js            # Commandes GROUP
│   └── ...autres plugins
├── session/                 # Données de session (sécurisé)
├── package.json
├── .env.example
└── README.md
```

## 🔐 Sécurité

- `/session` est ignoré dans `.gitignore`
- Utilisez `.env` pour les clés sensibles
- Ne commitez jamais vos tokens ou clés API

## 🛠️ Développement

### Créer une nouvelle commande

1. Créez un fichier dans `/plugins/command-name.js`
2. Exportez une fonction avec la logique
3. Le Command Handler le charge automatiquement

Exemple :
```javascript
export const handler = async (msg, args, sock) => {
  // Logique de la commande
};
```

## 📞 Support

Pour des questions ou des bugs, ouvrez une issue sur GitHub.

## 📄 License

MIT
