const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once('ready', () => {
  console.log(`✅ ReStock Bot online as ${client.user.tag}`);
});

// Load interaction handlers
const interactionHandler = require('./handlers/interactionHandler');

client.on('interactionCreate', async (interaction) => {
  await interactionHandler(interaction);
});

client.login(process.env.DISCORD_TOKEN);
