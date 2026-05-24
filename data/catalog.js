// ReStock EU Catalog Data
// Add/edit products here — no code changes needed elsewhere

module.exports = {
  categories: [
    {
      id: 'trading_cards',
      label: 'Trading Cards',
      emoji: '🃏',
      subcategories: [
        {
          id: 'topps',
          label: 'Topps',
          products: [
            {
              name: 'Topps UEFA Champions League 2024/25 Sticker Album',
              tags: ['New Drop', 'EU'],
              sites: [
                { label: 'Topps.com', url: 'https://www.topps.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'MediaMarkt.de', url: 'https://www.mediamarkt.de' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
              ],
            },
            {
              name: 'Topps Chrome Formula 1 Racing Hobby Box',
              tags: ['Hobby Box', 'Limited'],
              sites: [
                { label: 'Topps.com', url: 'https://www.topps.com' },
                { label: 'CardMarket.com', url: 'https://www.cardmarket.com' },
                { label: 'Coolshop.de', url: 'https://www.coolshop.de' },
              ],
            },
          ],
        },
        {
          id: 'pokemon',
          label: 'Pokémon',
          products: [
            {
              name: 'Pokémon TCG: Surging Sparks Booster Box',
              tags: ['Hot', 'In Stock'],
              sites: [
                { label: 'Pokemon.com', url: 'https://www.pokemon.com' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Fnac.es', url: 'https://www.fnac.es' },
              ],
            },
            {
              name: 'Pokémon TCG: Prismatic Evolutions ETB',
              tags: ['Limited', 'Restock'],
              sites: [
                { label: 'Pokemon.com', url: 'https://www.pokemon.com' },
                { label: 'MediaMarkt.de', url: 'https://www.mediamarkt.de' },
                { label: 'Amazon.fr', url: 'https://www.amazon.fr' },
              ],
            },
          ],
        },
        {
          id: 'one_piece',
          label: 'One Piece',
          products: [
            {
              name: 'One Piece TCG: Wings of the Captain Booster Box',
              tags: ['New', 'EU'],
              sites: [
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'CardMarket.com', url: 'https://www.cardmarket.com' },
                { label: 'Fnac.fr', url: 'https://www.fnac.fr' },
                { label: 'Coolshop.dk', url: 'https://www.coolshop.dk' },
              ],
            },
          ],
        },
        {
          id: 'other_tcg',
          label: 'Other TCG',
          products: [
            {
              name: 'Lorcana: Shimmering Skies Booster Box',
              tags: ['In Stock'],
              sites: [
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
                { label: 'Fnac.fr', url: 'https://www.fnac.fr' },
              ],
            },
            {
              name: 'Dragon Ball Super: Perfect Combination Booster',
              tags: ['New Drop'],
              sites: [
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'CardMarket.com', url: 'https://www.cardmarket.com' },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'sneakers_fashion',
      label: 'Sneakers & Fashion',
      emoji: '👟',
      subcategories: [
        {
          id: 'sneakers',
          label: 'Sneakers',
          products: [
            {
              name: 'Nike Air Max 95 \'Neon\' EU Restock',
              tags: ['Restock', 'EU'],
              sites: [
                { label: 'Nike.com', url: 'https://www.nike.com/eu' },
                { label: 'Foot Locker EU', url: 'https://www.footlocker.eu' },
                { label: 'Zalando.de', url: 'https://www.zalando.de' },
                { label: 'SNKRS App', url: 'https://www.nike.com/launch' },
              ],
            },
            {
              name: 'Adidas Samba OG White/Black',
              tags: ['In Stock'],
              sites: [
                { label: 'Adidas.com', url: 'https://www.adidas.com' },
                { label: 'Zalando.de', url: 'https://www.zalando.de' },
                { label: 'JD Sports EU', url: 'https://www.jdsports.eu' },
              ],
            },
          ],
        },
        {
          id: 'supreme',
          label: 'Supreme',
          products: [
            {
              name: 'Supreme FW24 Box Logo Hoodie',
              tags: ['Drop Week', 'Limited'],
              sites: [
                { label: 'Supreme.com', url: 'https://www.supremenewyork.com' },
                { label: 'StockX.com', url: 'https://www.stockx.com' },
                { label: 'Klekt.com', url: 'https://www.klekt.com' },
              ],
            },
          ],
        },
        {
          id: 'limited_apparel',
          label: 'Limited Apparel',
          products: [
            {
              name: 'Palace Skateboards Season Drop',
              tags: ['Weekly Drop'],
              sites: [
                { label: 'Palaceskateboards.com', url: 'https://www.palaceskateboards.com' },
                { label: 'Selfridges.com', url: 'https://www.selfridges.com' },
                { label: 'StockX.com', url: 'https://www.stockx.com' },
              ],
            },
          ],
        },
        {
          id: 'watches_glasses',
          label: 'Watches / Glasses',
          products: [
            {
              name: 'Casio G-Shock x A-Cold-Wall Collab',
              tags: ['Limited', 'EU'],
              sites: [
                { label: 'Casio.eu', url: 'https://www.casio.eu' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Chronext.com', url: 'https://www.chronext.com' },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'collectibles',
      label: 'Collectibles',
      emoji: '🎎',
      subcategories: [
        {
          id: 'funko',
          label: 'Funko',
          products: [
            {
              name: 'Funko Pop: Naruto Shippuden Gamabunta #1013',
              tags: ['Convention Excl.'],
              sites: [
                { label: 'Funko.com', url: 'https://www.funko.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
                { label: 'Zavvi.com', url: 'https://www.zavvi.com' },
              ],
            },
            {
              name: 'Funko Pop: Star Wars Grogu Sitting #369',
              tags: ['In Stock'],
              sites: [
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Smyths Toys EU', url: 'https://www.smythstoys.com' },
                { label: 'Zavvi.com', url: 'https://www.zavvi.com' },
              ],
            },
          ],
        },
        {
          id: 'labubu',
          label: 'Labubu',
          products: [
            {
              name: 'Pop Mart Labubu The Monsters Tasty Macarons Blind Box',
              tags: ['Hot', 'Low Stock'],
              sites: [
                { label: 'PopMart.com', url: 'https://www.popmart.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Miniso EU', url: 'https://www.miniso.com' },
              ],
            },
          ],
        },
        {
          id: 'vinyl',
          label: 'Vinyl Figures',
          products: [
            {
              name: 'Medicom BE@RBRICK Banksy Flower Thrower 400%',
              tags: ['Limited'],
              sites: [
                { label: 'Sivasdescalzo.com', url: 'https://www.sivasdescalzo.com' },
                { label: 'Bearbrickshop.eu', url: 'https://www.bearbrickshop.eu' },
                { label: 'StockX.com', url: 'https://www.stockx.com' },
              ],
            },
          ],
        },
        {
          id: 'hot_wheels',
          label: 'Hot Wheels',
          products: [
            {
              name: 'Hot Wheels RLC \'67 Camaro Collector Edition',
              tags: ['RLC Exclusive', 'EU Ship'],
              sites: [
                { label: 'HotWheels.com', url: 'https://www.hotwheels.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
              ],
            },
          ],
        },
        {
          id: 'anime_figures',
          label: 'Anime Figures',
          products: [
            {
              name: 'Good Smile Nendoroid Gojo Satoru #2258',
              tags: ['Pre-Order'],
              sites: [
                { label: 'GoodSmileShop.com', url: 'https://www.goodsmileshop.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Solaris Japan (EU)', url: 'https://www.solarisjapan.com' },
              ],
            },
            {
              name: 'Bandai SH Figuarts Son Goku Ultra Instinct',
              tags: ['In Stock'],
              sites: [
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Hobby One EU', url: 'https://www.hobby-one.com' },
                { label: 'Zavvi.com', url: 'https://www.zavvi.com' },
              ],
            },
          ],
        },
        {
          id: 'fragrances',
          label: 'Fragrances',
          products: [
            {
              name: 'Parfums de Marly Layton EDP 125ml',
              tags: ['In Stock', 'EU'],
              sites: [
                { label: 'Flaconi.de', url: 'https://www.flaconi.de' },
                { label: 'Nocibe.fr', url: 'https://www.nocibe.fr' },
                { label: 'Lookfantastic.eu', url: 'https://www.lookfantastic.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'electronics_gaming',
      label: 'Electronics & Gaming',
      emoji: '🎮',
      subcategories: [
        {
          id: 'consoles',
          label: 'Consoles',
          products: [
            {
              name: 'Nintendo Switch 2 — EU Launch',
              tags: ['Launching Soon', 'EU'],
              sites: [
                { label: 'Nintendo.com', url: 'https://www.nintendo.com/eu' },
                { label: 'MediaMarkt.de', url: 'https://www.mediamarkt.de' },
                { label: 'Fnac.fr', url: 'https://www.fnac.fr' },
                { label: 'Coolshop.dk', url: 'https://www.coolshop.dk' },
              ],
            },
            {
              name: 'PlayStation 5 Slim Disc Edition',
              tags: ['In Stock'],
              sites: [
                { label: 'PlayStation.com', url: 'https://www.playstation.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
                { label: 'MediaMarkt.es', url: 'https://www.mediamarkt.es' },
              ],
            },
          ],
        },
        {
          id: 'controllers',
          label: 'Controllers',
          products: [
            {
              name: 'Xbox Elite Series 2 Controller',
              tags: ['In Stock', 'EU'],
              sites: [
                { label: 'Microsoft.com', url: 'https://www.microsoft.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Coolshop.dk', url: 'https://www.coolshop.dk' },
                { label: 'GAME.es', url: 'https://www.game.es' },
              ],
            },
          ],
        },
        {
          id: 'gpus',
          label: 'GPUs',
          products: [
            {
              name: 'NVIDIA RTX 5090 Founders Edition',
              tags: ['High Demand', 'Limited'],
              sites: [
                { label: 'Alternate.de', url: 'https://www.alternate.de' },
                { label: 'Mindfactory.de', url: 'https://www.mindfactory.de' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Coolmod.es', url: 'https://www.coolmod.com' },
              ],
            },
            {
              name: 'AMD RX 9070 XT — EU Stock',
              tags: ['In Stock'],
              sites: [
                { label: 'Alternate.de', url: 'https://www.alternate.de' },
                { label: 'Newegg EU', url: 'https://www.newegg.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
              ],
            },
          ],
        },
        {
          id: 'ram',
          label: 'RAM',
          products: [
            {
              name: 'Corsair Dominator Titanium DDR5-6400 32GB Kit',
              tags: ['In Stock'],
              sites: [
                { label: 'Corsair.com', url: 'https://www.corsair.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Alternate.de', url: 'https://www.alternate.de' },
                { label: 'Coolblue.be', url: 'https://www.coolblue.be' },
              ],
            },
          ],
        },
        {
          id: 'ssd',
          label: 'SSD',
          products: [
            {
              name: 'Samsung 990 Pro 4TB NVMe M.2',
              tags: ['In Stock', 'Price Drop'],
              sites: [
                { label: 'Samsung.com', url: 'https://www.samsung.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Coolblue.nl', url: 'https://www.coolblue.nl' },
                { label: 'MediaMarkt.de', url: 'https://www.mediamarkt.de' },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'lego',
      label: 'Lego',
      emoji: '🧱',
      subcategories: [
        {
          id: 'lego_all',
          label: 'All Lego Sets',
          products: [
            {
              name: 'Lego Icons Eiffel Tower #10307 — EU Restock',
              tags: ['Restock', 'EU'],
              sites: [
                { label: 'Lego.com', url: 'https://www.lego.com' },
                { label: 'Amazon.de', url: 'https://www.amazon.de' },
                { label: 'Smyths Toys EU', url: 'https://www.smythstoys.com' },
                { label: 'Bol.com', url: 'https://www.bol.com' },
              ],
            },
            {
              name: 'Lego Technic Bugatti Chiron #42083',
              tags: ['Retiring Soon'],
              sites: [
                { label: 'Lego.com', url: 'https://www.lego.com' },
                { label: 'MediaMarkt.de', url: 'https://www.mediamarkt.de' },
                { label: 'Amazon.fr', url: 'https://www.amazon.fr' },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 'clearance_outlet',
      label: 'Clearance & Outlet',
      emoji: '🏷️',
      subcategories: [
        {
          id: 'regional_discounts',
          label: 'Regional Discounts',
          products: [
            {
              name: 'Amazon.de Lightning Deals — Collectibles & Electronics',
              tags: ['Today Only', 'DE'],
              sites: [
                { label: 'Amazon.de', url: 'https://www.amazon.de/deals' },
              ],
            },
            {
              name: 'Bol.com Dagdeal — Funko & Lego',
              tags: ['Today Only', 'NL/BE'],
              sites: [
                { label: 'Bol.com', url: 'https://www.bol.com/nl/nl/dagdeal/' },
              ],
            },
          ],
        },
        {
          id: 'hidden_outlet',
          label: 'Hidden Outlet Deals',
          products: [
            {
              name: 'Nike Factory Store EU Hidden Sales',
              tags: ['Hidden', 'Up to 50% off'],
              sites: [
                { label: 'Nike Outlet', url: 'https://www.nike.com/eu/outlet' },
                { label: 'Zalando Lounge', url: 'https://www.zalando-lounge.com' },
              ],
            },
            {
              name: 'Adidas Outlet EU Finds',
              tags: ['Hidden'],
              sites: [
                { label: 'Adidas Outlet', url: 'https://www.adidas.com/outlet' },
                { label: 'Zalando.de', url: 'https://www.zalando.de' },
              ],
            },
          ],
        },
        {
          id: 'retailer_markdowns',
          label: 'Retailer Markdowns',
          products: [
            {
              name: 'MediaMarkt DE — GPU & Console Clearance',
              tags: ['Clearance', 'DE'],
              sites: [
                { label: 'MediaMarkt.de', url: 'https://www.mediamarkt.de' },
              ],
            },
            {
              name: 'Fnac FR — TCG & Collectibles Markdown',
              tags: ['Clearance', 'FR'],
              sites: [
                { label: 'Fnac.fr', url: 'https://www.fnac.fr' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
