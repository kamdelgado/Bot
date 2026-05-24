const {
  buildMainMenu,
  buildSubcategoryMenu,
  buildProductList,
  buildAlertConfirm,
} = require('../builders/embedBuilder');

module.exports = async function interactionHandler(interaction) {
  // ─── Slash command: /catalog ──────────────────────────────────────────────
  if (interaction.isChatInputCommand() && interaction.commandName === 'catalog') {
    await interaction.reply(buildMainMenu());
    return;
  }

  // ─── Select menus ─────────────────────────────────────────────────────────
  if (interaction.isStringSelectMenu()) {
    const [action, ...rest] = interaction.customId.split(':');

    // Category selected
    if (action === 'select_category') {
      const categoryId = interaction.values[0];
      const payload = buildSubcategoryMenu(categoryId);
      if (!payload) { await interaction.reply({ content: 'Category not found.', ephemeral: true }); return; }
      await interaction.update(payload);
      return;
    }

    // Subcategory selected
    if (action === 'select_sub') {
      const subcategoryId = interaction.values[0];
      const payload = buildProductList(subcategoryId, 'all');
      if (!payload) { await interaction.reply({ content: 'Subcategory not found.', ephemeral: true }); return; }
      await interaction.update(payload);
      return;
    }

    // Region filter changed
    if (action === 'select_region') {
      const subcategoryId = rest[0];
      const region = interaction.values[0];
      const payload = buildProductList(subcategoryId, region);
      if (!payload) { await interaction.reply({ content: 'Error loading products.', ephemeral: true }); return; }
      await interaction.update(payload);
      return;
    }
  }

  // ─── Buttons ───────────────────────────────────────────────────────────────
  if (interaction.isButton()) {
    const [action, ...rest] = interaction.customId.split(':');

    // Home button
    if (action === 'btn_home') {
      await interaction.update(buildMainMenu());
      return;
    }

    // Back to category
    if (action === 'btn_cat') {
      const categoryId = rest[0];
      const payload = buildSubcategoryMenu(categoryId);
      if (!payload) { await interaction.reply({ content: 'Category not found.', ephemeral: true }); return; }
      await interaction.update(payload);
      return;
    }

    // Alert me
    if (action === 'btn_alert') {
      const subcategoryId = rest[0];
      const payload = buildAlertConfirm(subcategoryId, interaction.user.username);
      await interaction.reply(payload);
      return;
    }

    // Dismiss ephemeral
    if (action === 'btn_dismiss') {
      await interaction.update({ content: '✅ Alert set! You\'ll be pinged on restock.', embeds: [], components: [] });
      return;
    }
  }
};
