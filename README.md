# ReStock Bot — Setup Guide

A clean Discord bot for the ReStock EU product catalog. No slash commands to memorise — everything is driven by clickable menus, dropdowns and buttons.

---

## What it does

- `/catalog` → opens the main category menu
- Users pick a **category** from a dropdown (Trading Cards, Sneakers, etc.)
- Then pick a **subcategory** (Pokémon, Supreme, Funko, etc.)
- Products appear as rich embeds with **EU store links** as clickable text
- A **region filter** dropdown lets users narrow to their country (🇩🇪 🇫🇷 🇳🇱 🇪🇸 🇩🇰 🇧🇪 🇮🇹)
- A **🔔 Alert Me** button confirms a restock watch (extend with a database for real DMs)

---

## Setup

### 1. Create a Discord Application

1. Go to https://discord.com/developers/applications
2. Click **New Application** → name it `ReStock`
3. Go to **Bot** → click **Add Bot**
4. Under **Privileged Gateway Intents** enable **Server Members Intent** if you want DM alerts later
5. Copy your **Bot Token** — keep it secret

### 2. Invite the bot to your server

In the Developer Portal → **OAuth2 → URL Generator**:
- Scopes: `bot`, `applications.commands`
- Bot Permissions: `Send Messages`, `Embed Links`, `Read Message History`, `Use Slash Commands`

Open the generated URL and add the bot to your server.

### 3. Install & configure

```bash
# Clone / copy the bot files
cd restock-bot
npm install

# Set up environment
cp .env.example .env
```

Edit `.env`:
```
DISCORD_TOKEN=your_bot_token
CLIENT_ID=your_application_id   # from Developer Portal → General Information
GUILD_ID=your_server_id         # right-click your server → Copy Server ID
```

### 4. Register slash commands

```bash
npm run deploy
```

Only needs to be run once (or when you add new commands).

### 5. Start the bot

```bash
npm start
```

---

## Adding or editing products

Open `data/catalog.js` — it's plain JavaScript objects. No database needed.

To add a product to an existing subcategory:

```js
{
  name: 'Your Product Name',
  tags: ['In Stock', 'EU'],       // shown as pill badges
  sites: [
    { label: 'Amazon.de', url: 'https://www.amazon.de/...' },
    { label: 'Bol.com',   url: 'https://www.bol.com/...' },
  ],
},
```

To add a new subcategory, add an object to the `subcategories` array of the relevant category. To add a whole new category, add to the top-level `categories` array.

---

## Hosting

The bot needs to be running 24/7. Recommended free/cheap options:

| Platform | Notes |
|---|---|
| **Railway.app** | Free tier, easy deploy, connect GitHub repo |
| **Fly.io** | Free allowance, good EU region support |
| **Render.com** | Free tier (spins down after inactivity — use a keep-alive ping) |
| **VPS (Hetzner / Contabo)** | Best for EU latency, from ~€4/mo |

For Railway / Render, just push to GitHub and connect the repo. Set the env vars in the platform dashboard.

---

## Extending

- **Real restock alerts** — add a lightweight database (SQLite via `better-sqlite3`, or Supabase) to store user alert subscriptions, then ping users via DM when a product is restocked.
- **Admin panel** — add role-gated buttons to add/remove products without editing code.
- **Price tracking** — integrate with retailer APIs or a scraper to show live prices.
