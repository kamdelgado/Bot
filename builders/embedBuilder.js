const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
} = require('discord.js');

const catalog = require('../data/catalog');

// Tag colour map → Discord embed accent colours
const TAG_COLORS = {
  'Hot': 0xED4245,
  'Limited': 0xED4245,
  'Low Stock': 0xED4245,
  'High Demand': 0xED4245,
  'Restock': 0x57F287,
  'In Stock': 0x57F287,
  'New Drop': 0x5865F2,
  'New': 0x5865F2,
  'Pre-Order': 0xFAA61A,
  'Launching Soon': 0x5865F2,
  'Price Drop': 0x57F287,
  default: 0x5865F2,
};

function pickEmbedColor(tags = []) {
  for (const tag of tags) {
    if (TAG_COLORS[tag]) return TAG_COLORS[tag];
  }
  return TAG_COLORS.default;
}

// ─── Main catalog menu ────────────────────────────────────────────────────────
function buildMainMenu() {
  const embed = new EmbedBuilder()
    .setColor(0x5865F2)
    .setTitle('📦  ReStock — EU Product Catalog')
    .setDescription('Select a category below to browse subcatalogs, products and EU purchase links.')
    .setFooter({ text: '🌍 Covering all EU regions  ·  Updated daily' });

  const rows = [];

  // One select menu with all categories
  const select = new StringSelectMenuBuilder()
    .setCustomId('select_category')
    .setPlaceholder('Choose a category...')
    .addOptions(
      catalog.categories.map((cat) => ({
        label: `${cat.emoji}  ${cat.label}`,
        value: cat.id,
        description: `Browse ${cat.subcategories.length} subcategories`,
      }))
    );

  rows.push(new ActionRowBuilder().addComponents(select));

  return { embeds: [embed], components: rows };
}

// ─── Subcategory menu ─────────────────────────────────────────────────────────
function buildSubcategoryMenu(categoryId) {
  const cat = catalog.categories.find((c) => c.id === categoryId);
  if (!cat) return null;

  const embed = new EmbedBuilder()
    .setColor(0x5865F2)
    .setTitle(`${cat.emoji}  ${cat.label}`)
    .setDescription('Pick a subcategory to view products and EU store links.');

  const rows = [];

  // Subcategory select
  const select = new StringSelectMenuBuilder()
    .setCustomId(`select_sub:${categoryId}`)
    .setPlaceholder('Choose a subcategory...')
    .addOptions(
      cat.subcategories.map((sub) => ({
        label: sub.label,
        value: sub.id,
        description: `${sub.products.length} product${sub.products.length !== 1 ? 's' : ''}`,
      }))
    );

  rows.push(new ActionRowBuilder().addComponents(select));

  // Back button
  const backBtn = new ButtonBuilder()
    .setCustomId('btn_home')
    .setLabel('← Back to Categories')
    .setStyle(ButtonStyle.Secondary);

  rows.push(new ActionRowBuilder().addComponents(backBtn));

  return { embeds: [embed], components: rows };
}

// ─── Product list ─────────────────────────────────────────────────────────────
function buildProductList(subcategoryId, regionFilter = 'all') {
  let cat, sub;
  for (const c of catalog.categories) {
    const found = c.subcategories.find((s) => s.id === subcategoryId);
    if (found) { cat = c; sub = found; break; }
  }
  if (!sub) return null;

  const regionMap = {
    de: ['.de', 'german', 'alternate', 'mindfactory', 'coolmod'],
    fr: ['.fr', 'fnac'],
    nl: ['.nl', 'bol'],
    es: ['.es', 'coolmod', 'game.es'],
    dk: ['.dk', 'coolshop'],
    be: ['.be', 'coolblue.be'],
    it: ['.it'],
  };

  const embeds = [];
  const allSiteButtons = [];

  for (const product of sub.products) {
    let sites = product.sites;

    if (regionFilter !== 'all' && regionMap[regionFilter]) {
      const terms = regionMap[regionFilter];
      sites = sites.filter((s) =>
        terms.some((t) => s.url.toLowerCase().includes(t) || s.label.toLowerCase().includes(t))
      );
    }

    const color = pickEmbedColor(product.tags);

    const embed = new EmbedBuilder()
      .setColor(color)
      .setTitle(product.name)
      .addFields({
        name: 'Tags',
        value: product.tags.map((t) => `\`${t}\``).join('  '),
        inline: false,
      });

    if (sites.length === 0) {
      embed.addFields({ name: 'EU Stores', value: '_No stores match this region filter_', inline: false });
    } else {
      embed.addFields({
        name: '🌍 EU Stores',
        value: sites.map((s) => `[${s.label}](${s.url})`).join('  ·  '),
        inline: false,
      });
    }

    embeds.push(embed);
  }

  const rows = [];

  // Region filter select
  const regionSelect = new StringSelectMenuBuilder()
    .setCustomId(`select_region:${subcategoryId}`)
    .setPlaceholder('🌍 Filter by EU region...')
    .addOptions([
      { label: '🌍 All EU Regions', value: 'all', default: regionFilter === 'all' },
      { label: '🇩🇪 Germany', value: 'de', default: regionFilter === 'de' },
      { label: '🇫🇷 France', value: 'fr', default: regionFilter === 'fr' },
      { label: '🇳🇱 Netherlands', value: 'nl', default: regionFilter === 'nl' },
      { label: '🇪🇸 Spain', value: 'es', default: regionFilter === 'es' },
      { label: '🇩🇰 Denmark / Nordics', value: 'dk', default: regionFilter === 'dk' },
      { label: '🇧🇪 Belgium', value: 'be', default: regionFilter === 'be' },
      { label: '🇮🇹 Italy', value: 'it', default: regionFilter === 'it' },
    ]);

  rows.push(new ActionRowBuilder().addComponents(regionSelect));

  // Navigation buttons
  const backToSubBtn = new ButtonBuilder()
    .setCustomId(`btn_cat:${cat.id}`)
    .setLabel(`← ${cat.label}`)
    .setStyle(ButtonStyle.Secondary);

  const homeBtn = new ButtonBuilder()
    .setCustomId('btn_home')
    .setLabel('🏠 Home')
    .setStyle(ButtonStyle.Secondary);

  const alertBtn = new ButtonBuilder()
    .setCustomId(`btn_alert:${subcategoryId}`)
    .setLabel('🔔 Alert Me')
    .setStyle(ButtonStyle.Success);

  rows.push(new ActionRowBuilder().addComponents(backToSubBtn, homeBtn, alertBtn));

  return { embeds, components: rows };
}

// ─── Alert confirmation ───────────────────────────────────────────────────────
function buildAlertConfirm(subcategoryId, username) {
  let sub;
  for (const c of catalog.categories) {
    const found = c.subcategories.find((s) => s.id === subcategoryId);
    if (found) { sub = found; break; }
  }

  const embed = new EmbedBuilder()
    .setColor(0x57F287)
    .setTitle('🔔  Alert Set')
    .setDescription(`**${username}**, you'll be notified when products in **${sub?.label || subcategoryId}** restock at EU retailers.`);

  const dismiss = new ButtonBuilder()
    .setCustomId('btn_dismiss')
    .setLabel('✕ Dismiss')
    .setStyle(ButtonStyle.Secondary);

  return { embeds: [embed], components: [new ActionRowBuilder().addComponents(dismiss)], ephemeral: true };
}

module.exports = {
  buildMainMenu,
  buildSubcategoryMenu,
  buildProductList,
  buildAlertConfirm,
};
