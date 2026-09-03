/* =====================================================
   VAVUNIYA STORE — script.js
   ===================================================== */

// ─── Product Data ────────────────────────────────────
const defaultProducts = [
    {
        id: 1,
        name: "Men's Silver Lion Ring",
        category: "Fashion",
        price: 1000,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 1,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-12 at 10.55.13 AM.jpeg",
        details: {
            description: "A bold and premium men's ring crafted in the shape of a majestic lion — symbolising strength, courage, and royalty. Made from high-quality silver-finish alloy, this ring is designed for men who make a statement without saying a word.",
            material: "Silver-finish alloy (nickel-free)",
            style: "Lion Head Signet Ring",
            finish: "Polished silver",
            occasion: "Casual, Party, Gift",
            sizes: ["7", "8", "9", "10", "11"],
            highlights: [
                "🦁 Intricate lion face detailing",
                "💍 Comfortable wide band",
                "✨ High-polish silver finish",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery only",
                "🎁 Perfect as a gift"
            ]
        }
    },
    {
        id: 2,
        name: "P9 Pro Max Wireless Headphone",
        category: "Electronics",
        price: 2650,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-07 at 1.56.20 PM.jpeg",
        details: {
            description: "Premium quality P9 Pro Max wireless headphones offering seamless Bluetooth connection, TF card playback for mp3 song files, and convenient USB charging.",
            material: "High-quality polymer & cushioned ear pads",
            style: "Over-Ear Wireless Headphone",
            finish: "Premium Finish",
            occasion: "Music, Gaming, Travel, Casual",
            sizes: ["One Size"],
            highlights: [
                "🎧 Bluetooth connection",
                "🎵 Insert TF card to play mp3 files",
                "🔋 USB Charging",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery only",
                "🎁 Great for gifting"
            ]
        }
    },
    {
        id: 3,
        name: "Mini WiFi Camera",
        category: "Electronics",
        price: 2600,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-11 at 12.38.33 PM.jpeg",
        details: {
            description: "Compact and discreet Mini WiFi Camera featuring real-time wireless monitoring, motion detection, and easy setup to keep your home or office secure.",
            material: "Durable matte polymer",
            style: "Mini Wireless IP Camera",
            finish: "Sleek Matte Black",
            occasion: "Security, Surveillance, Home Monitoring",
            sizes: ["Standard"],
            highlights: [
                "📷 Mini compact design for discreet monitoring",
                "📶 WiFi connection for remote live viewing",
                "🌙 Night vision and motion detection alerts",
                "🔋 Rechargeable battery & continuous power support",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery only"
            ]
        }
    },
    {
        id: 4,
        name: "Universal Mobile Phone Cooler",
        category: "Electronics",
        price: 2000,
        original: null,
        badge: "hot",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-18 at 2.41.04 PM.jpeg",
        details: {
            description: "High-performance Universal Mobile Phone Cooler designed to prevent overheating during intense live gaming, streaming, or heavy tasks. Fits most smartphones with a universal clamp.",
            material: "ABS & high-efficiency fan unit",
            style: "Universal Gaming Cooler",
            finish: "Random Color (Various Colors)",
            occasion: "Gaming, Live Streaming, High Performance Mode",
            sizes: ["Standard"],
            highlights: [
                "❄️ Live Game Universal phone cooler",
                "📱 Universal clamp fits most smartphones",
                "🌈 Available in random aesthetic colors",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },
    {
        id: 5,
        name: "Premium Portable Bluetooth Speaker",
        category: "Electronics",
        price: 3700,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-08 at 5.21.42 PM.jpeg",
        details: {
            description: "Experience robust, high-fidelity sound on the go with this rugged portable Bluetooth speaker. Features dual bass radiators, a durable fabric grill, and a long-lasting rechargeable battery for non-stop entertainment.",
            material: "Rugged fabric mesh & durable rubberized housing",
            style: "Portable Wireless Speaker",
            finish: "Sleek Black",
            occasion: "Outdoor, Party, Travel, Home Entertainment",
            sizes: ["Standard"],
            highlights: [
                "🔊 High-fidelity stereo sound with deep bass",
                "📶 Wireless Bluetooth connection with long range",
                "🔋 Long-lasting rechargeable battery",
                "💧 Splashproof & rugged outdoor-friendly design",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },
    {
        id: 6,
        name: "Premium Anime & Gaming Wall Posters",
        category: "Decor",
        price: 4400,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/WhatsApp Image 2026-06-10 at 1.01.12 PM.jpeg",
        details: {
            description: "High-definition vivid color prints perfect for decorating bedrooms, gaming setups, or home workspaces. Select from standard sizes (A3, A2, A1). Custom designs are available—send us any JPG image!",
            material: "High-grade premium poster cardstock (Matte/Semi-Gloss)",
            style: "Modern Anime & Gaming Wall Art",
            finish: "Sleek Anti-Glare Coating",
            occasion: "Home Decor, Room Styling, Gifting",
            sizes: ["A3 (11.7 × 16.5 in)", "A2 (16.5 × 23.4 in)", "A1 (23.4 × 33.1 in)"],
            sizePrices: {
                "A3 (11.7 × 16.5 in)": 4400,
                "A2 (16.5 × 23.4 in)": 7600,
                "A1 (23.4 × 33.1 in)": 13000
            },
            highlights: [
                "🖼️ High-resolution vivid color printing",
                "📐 Size choices: A3, A2, and A1 dimensions",
                "🎨 Custom designs available (send any JPG image)",
                "📦 Safely packed and shipped in secure tubes",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 7,
        name: "Kids mini gun",
        category: "Toys & Kids",
        price: 4000,
        original: 4800,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/gun.jpeg",
        details: {
            description: "only for kids ",
            material: "plastic",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 8,
        name: "Smart watch with TWS",
        category: "Electronics",
        price: 5000,
        original: 6600,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/s watch.png",
        details: {
            description: "TWS And Smart Watch",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 9,
        name: "3 Pcs Travel Backpack ",
        category: "Fashion",
        price: 2700,
        original: 3900,
        badge: "SALE",
        rating: 5.0,
        reviews: 0,
        freeDelivery: false,
        img: "product_img/2700 Bag.png",
        details: {
            description: "3 Pcs Travel Backpack  Price - Rs2700/= Delivery charge:- 300/=",
            material: "Standard",
            style: "Modern",
            finish: " ",
            occasion: "Travel",
            sizes: ["Standard"],
            highlights: [
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 10,
        name: "High speed Mini USB WiFi Wireless Adapter ",
        category: "Electronics",
        price: 1200,
        original: null,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/wifi adapter.png",
        details: {
            description: "High speed Mini USB WiFi Wireless Adapter High speed Network Card 300Mbps 802.11 ngb for Windows 2000 / XP / Vista / WIN7 / 8 /10/11 /Linux / Mac OS PC Laptop USB WIFI antenna ",
            material: "Standard",
            style: " USB WiFi Wireless Adapter",
            finish: "black",
            occasion: "Home",
            sizes: ["Standard"],
            highlights: [
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 11,
        name: "Ring Light ",
        category: "Electronics",
        price: 3600,
        original: null,
        badge: "HOT",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/ringlight.png",
        details: {
            description: "Price :- 3600",
            material: "black",
            style: "Speaker",
            finish: " ",
            occasion: "Outdoor",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 12,
        name: "1 8-In-1 USB C Hub",
        category: "Electronics",
        price: 2000,
        original: 2800,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: false,
        img: "product_img/1 8-In-1 USB C Hub.jpeg",
        details: {
            description: "1 8-In-1 USB C Hub with Audio Jack | Compatible with Tablets, USB Powered, 5V Operating Voltage",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: " ",
            sizes: ["Standard"],
            highlights: [
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 13,
        name: "NY Cap",
        category: "Fashion",
        price: 2600,
        original: null,
        badge: "HOT",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/NYCcap.png",
        details: {
            description: "",
            material: " ",
            style: "Modern",
            finish: "All Colors",
            occasion: "Travel",
            sizes: ["Standard"],
            highlights: [
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 14,
        name: "Anime Gaming Desk Mat And Mouse Pad",
        category: "Home & Security",
        price: 3200,
        original: 3800,
        badge: "HOT",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/Desk mat.png",
        details: {
            description: "1 Large Japanese Samurai Anime Gaming Desk Mat And Mouse Pad - Non-Slip Rubber Base, Extra Wide Rectangular Computer Pad with Cherry Blossom, Mount Fuji And Red Sun/ Design, for PC, Home Office",
            material: " ",
            style: " ",
            finish: " ",
            occasion: " Home Office",
            sizes: ["Standard"],
            highlights: [
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    { id: 15, name: "Spiderman mask adjustable free size", category: "Toys & Kids", price: 6000, original: 8000, badge: "new", rating: 5.0, reviews: 5, freeDelivery: true, img: "product_img/spider man mask.png", details: { description: "Free size", material: "Elastic ", style: "Spider man ", finish: "Red", occasion: "Marvel", sizes: ["Standard"], highlights: [ "wireless connection", "🔋 Long-lasting rechargeable battery", "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } },

    {
        id: 16,
        name: "Remote control car with led",
        category: "Toys & Kids",
        price: 8500,
        original: 10000,
        badge: "new",
        rating: 5.0,
        reviews: 3,
        freeDelivery: true,
        img: "product_img/remorttruck.png",
        details: {
            description: "✨ **LED Lights සමඟ සුපිරි Look එකක්** ⚡ **20KM/H Speed** – වේගය කැමති අයට හොඳම තේරීම 🎮 **2.4GHZ Remote Control** – Smooth Control & Long Range 🔋 **Rechargeable Battery** – නැවත නැවත charge කර භාවිතා කරන්න 📏 **1:16 Size** – Realistic & Stylish Design   💸 **මිල – Rs. 7999/=** ",
            material: "Good material ",
            style: "2.4hz ",
            finish: "Black",
            occasion: "Play",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available",
                "📶 Wireless connection"
            ]
        }
    },

    {
        id: 17,
        name: "A9 PRO ANC APP VERSION 2025  ",
        category: "Electronics",
        price: 4550,
        original: 6000,
        badge: "Hot",
        rating: 5.0,
        reviews: 4,
        freeDelivery: true,
        img: "product_img/displaytws.png",
        details: {
            description: "A9 PRO ANC APP VERSION 2025  😍 මේක 2025 අලුතින් release කරපු A9 Pro ANC model එක APP එකත් සමග ආපු . ඒ  කියන්නෙ පරන ඒවා  වගේ නෙමේ ඔයට මෙක phoneAPP  connect  🤟wallpaper photo 🤟message notifications , 🤟call  history  call dial  2025 APP version❤️   🟢 LED display    🟢 Equalizer   🟢 Crystal Clear Sound   🟢 Long Battery Life   🟢 Water & Sweat Resistant   🟢 Touch Controls: Easy access to your favorite tunes.   🟢 ANC & ENC Supported   🟢 Charging Port :Type C   🟢 Weather   🟢 Call dial   🟢 message notifications   🟢 Calendar /Alarm 🟥Free case     450/-",
            material: "Plastic ",
            style: "Wireless airpods with display ",
            finish: "Black and white ",
            occasion: "Multi use",
            sizes: ["Standard"],
            highlights: [
                "📶 High-speed Bluetooth wireless connection",
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 18,
        name: "Tws",
        category: "Electronics",
        price: 2000,
        original: 2500,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/tws.png",
        details: {
            description: "Airpods",
            material: "Plastic good material ",
            style: "Wireless portable tws",
            finish: "White",
            occasion: "Entertainment ",
            sizes: ["Standard"],
            highlights: [
                "📶 High-speed Bluetooth wireless connection",
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 19,
        name: "Watch ultra 2",
        category: "Electronics",
        price: 2400,
        original: 2800,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/watchultra.png",
        details: {
            description: "Smart watch ",
            material: "Good ",
            style: "Smart watch ",
            finish: "Black ",
            occasion: "Outdoor ",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 20,
        name: "Jbl pure bass 760 BT",
        category: "Electronics",
        price: 4600,
        original: 8000,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/jblhedset.jpeg",
        details: {
            description: "Pure bass",
            material: "Black",
            style: "Wireless portable headphone",
            finish: "Black",
            occasion: "Travel",
            sizes: ["Standard"],
            highlights: [
                "📶 High-speed Bluetooth wireless connection",
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 21,
        name: "Neckband ",
        category: "Electronics",
        price: 2500,
        original: 3500,
        badge: "new",
        rating: 5.0,
        reviews: 0,
        freeDelivery: true,
        img: "product_img/Neckband.png",
        details: {
            description: "Pue bass good sound ",
            material: "Silicone ",
            style: "Wireless portable neckband",
            finish: "Black ",
            occasion: "Entertainment and for bike riders",
            sizes: ["Standard"],
            highlights: [
                "📶 High-speed Bluetooth wireless connection",
                "🔋 Long-lasting rechargeable battery",
                "🚚 Rs 300 Delivery Fee",
                "💵 Cash on Delivery available"
            ]
        }
    },

    { id: 22, name: "Multitool stain less steal", category: "Home & Security", price: 2500, original: null, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/multytool.png", details: { description: "Multi tool", material: "Stainless Steel ", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "📶 High-speed Bluetooth wireless connection", "🔋 Long-lasting rechargeable battery", "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } 
    },

    { id: 23, name: "Airpods with powerbank", category: "Electronics", price: 2500, original: null, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/3displaytws.png", details: { description: "Power bank + airpodd", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "📶 High-speed Bluetooth wireless connection", "🔋 Long-lasting rechargeable battery", "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } },

    { id: 24, name: " 128gb sd card ", category: "Electronics", price: 4250, original: null, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/sdcard.png", details: { description: "SanDisk ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "💵 Cash on Delivery available", "🎁 Great for gifting", "🎁 Great for gifting" ] } },

    { id: 25, name: "32gb pendrive ", category: "Electronics", price: 2600, original: null, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/dt50.png", details: { description: "Kingston ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } },

    { id: 26, name: "128gb pendrive ", category: "Electronics", price: 5000, original: 6000, badge: "new", rating: 5.0, reviews: 5, freeDelivery: true, img: "product_img/kingston pendrive.png", details: { description: "Kingston ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

    { id: 27, name: "Pvc playing cards", category: "Fashion", price: 1300, original: 2000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/pcards.png", details: { description: "Good", material: "Pvc", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

    { id: 28, name: "Massage gun", category: "Electronics", price: 4500, original: 5750, badge: "new", rating: 5.0, reviews: 2, freeDelivery: true, img: "product_img/Massage gun.png", details: { description: "Its used for massage ", material: "Good", style: "Portable ", finish: "White ", occasion: "To pain relief ", sizes: ["Standard"], highlights: [ "🔋 Long-lasting rechargeable battery", "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } },

    { id: 29, name: "Gell blaster gun Bb bullet gun", category: "Toys & Kids", price: 14000, original: 16000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/toygun.png", details: { description: "Best quality ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🔋 Long-lasting rechargeable battery", "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

    { id: 30, name: "Feeder bottle for bb bullet gun", category: "Toys & Kids", price: 1500, original: 1750, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/feeder.png", details: { description: "Best quality ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } },

    { id: 31, name: "Tatoo hand sleeve", category: "Fashion", price: 1300, original: 1500, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/handsleef.png", details: { description: "One piece ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 Rs 300 Delivery Fee", "💵 Cash on Delivery available" ] } },

    {
        id: 32,
        name: "Air Pod Pro (AAA Grade) ",
        category: "Electronics",
        price: 3700,
        original: 4000,
        badge: "new",
        rating: 5.0,
        reviews: 3,
        freeDelivery: true,
        img: "product_img/airpodsproAAA.png",
        details: {
            description: "Air Pod Pro (AAA Grade)  Free delivery Shipment Stock 🔥",
            material: "Standard",
            style: "Modern",
            finish: "White",
            occasion: "Outdoor, home entertainment,work uses",
            sizes: ["Standard"],
            highlights: [
                "📶 High-speed Bluetooth wireless connection",
                "🔋 Long-lasting rechargeable battery",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 33,
        name: "CK CALVIN KLEIN STEEL WATCHES FOR LADIES",
        category: "Fashion",
        price: 1670,
        original: 1900,
        badge: "new",
        rating: 5.0,
        reviews: 2,
        freeDelivery: true,
        img: "product_img/kelvin watch.png",
        details: {
            description: "CK CALVIN KLEIN STEEL WATCHES FOR LADIES -GOLD STEEL WITH DIFFERENT COLOR DIALS",
            material: "Standard",
            style: "Modern",
            finish: "Gold, silver and other colours ",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 34,
        name: "G-SHOCK CASIO Men’s watches",
        category: "Fashion",
        price: 4600,
        original: 5000,
        badge: "new",
        rating: 5.0,
        reviews: 2,
        freeDelivery: true,
        img: "product_img/gshockwatch.png",
        details: {
            description: "NEW STOCK G-SHOCK CASIO Men’s watches Dual time Stainless steel Water resist💧💦",
            material: "Stainless steel ",
            style: "Modern",
            finish: "Silver, gold ",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 35,
        name: "FASHION STEEL  WATCHES FOR LADIES -Gold and Mix Design  ",
        category: "Electronics",
        price: 1280,
        original: 1500,
        badge: "new",
        rating: 5.0,
        reviews: 3,
        freeDelivery: true,
        img: "product_img/steel watch.png",
        details: {
            description: "Enter a beautiful description of the product here.",
            material: "Standard",
            style: "Modern",
            finish: "Black, gold, silver, gray",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 36,
        name: " BW8 SIM SMART WATCH  ",
        category: "Electronics",
        price: 5500,
        original: 5800,
        badge: "new",
        rating: 5.0,
        reviews: 2,
        freeDelivery: true,
        img: "product_img/BW8SIM Watch.png",
        details: {
            description: "NEW ARRIVALS 💥  BW8 SIM SMART WATCH  - 1 straps",
            material: "Standard",
            style: "1 straps",
            finish: "Orange, black ",
            occasion: "Outdoor ",
            sizes: ["Standard"],
            highlights: [
                "🔋 Long-lasting rechargeable battery",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🔋 Long-lasting rechargeable battery",
                "📶 Wireless connection"
            ]
        }
    },

    {
        id: 37,
        name: "BUGATTI LUXURY RUBBER STRAP WATCHES FOR MENS",
        category: "Electronics",
        price: 12600,
        original: 13000,
        badge: "new",
        rating: 5.0,
        reviews: 4,
        freeDelivery: true,
        img: "product_img/bugatti watch.png",
        details: {
            description: "BUGATTI LUXURY RUBBER STRAP WATCHES FOR MENS -Silver & Black Case, Black & White Strap",
            material: "Standard",
            style: "Modern",
            finish: "-Silver & Black Case, Black & White Strap",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available"
            ]
        }
    },

    {
        id: 38,
        name: "XFENG LATER STRAP WATCHES FOR MENS",
        category: "Fashion",
        price: 2100,
        original: 2500,
        badge: "new",
        rating: 5.0,
        reviews: 3,
        freeDelivery: true,
        img: "product_img/XEFENG LATHER.png",
        details: {
            description: "XFENG LATER STRAP WATCHES FOR MENs",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 39,
        name: "EMAR DXB ARABIC AURA PLASTIC MATERIAL WATCHES FOR MEN",
        category: "Fashion",
        price: 2000,
        original: 2500,
        badge: "new",
        rating: 5.0,
        reviews: 3,
        freeDelivery: true,
        img: "product_img/Arabicwatch.png",
        details: {
            description: "NEW STOCK EMAR DXB ARABIC AURA PLASTIC MATERIAL WATCHES FOR MEN -With Box & Link Removel tool",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

    {
        id: 40,
        name: " JBL AIR PODS ",
        category: "Electronics",
        price: 2000,
        original: 2500,
        badge: "new",
        rating: 5.0,
        reviews: 2,
        freeDelivery: true,
        img: "product_img/jbl tws.png",
        details: {
            description: "NEW STOCK ARRIVALS 😊  JBL AIR PODS 📍 FREE CASE",
            material: "Standard",
            style: "Modern",
            finish: "Matte Finish",
            occasion: "Casual",
            sizes: ["Standard"],
            highlights: [
                "📶 High-speed Bluetooth wireless connection",
                "🔋 Long-lasting rechargeable battery",
                "🚚 FREE delivery to Vavuniya",
                "💵 Cash on Delivery available",
                "🎁 Great for gifting"
            ]
        }
    },

   { id: 41, name: "Metal USB HUB 7 Port with Adapter `", category: "Electronics", price: 2850, original: 3300, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Metal USB.png", details: { description: "⭐️ *Amazon Basics* ®️ Rs 2850/- Metal USB HUB 7 Port with Adapter Limited Stocks", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available" ] } },

   { id: 42, name: "10 in 1 Docking Station with Wireless Charging Function ", category: "Electronics", price: 5850, original: 6500, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/10 in 1 Docking.jpg", details: { description: "🔥 *New Arrival* 10 in 1 Docking Station with Wireless Charging Function Rs 5850/-", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available" ] } },
   { id: 43, name: "Toy car to build", category: "Electronics", price: 2500, original: 3000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Toy car to build.jpg", details: { description: "105 pieces ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

   { id: 44, name: "Cute bunny Wireless Headphone", category: "Electronics", price: 4500, original: 5000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Wireless Headphone.jpg", details: { description: "Cute Bunny Plush Wireless Headset Price - Rs 4500/=", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "📶 High-speed Bluetooth wireless connection", "🔋 Long-lasting rechargeable battery", "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

   { id: 45, name: "Cute bunny Wireless Headphone", category: "Electronics", price: 4500, original: 5000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Cute bunny Wireless Headphone.jpg", details: { description: "Cute Bunny Plush Wireless Headset Price - Rs 4500/=", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "📶 High-speed Bluetooth wireless connection", "🔋 Long-lasting rechargeable battery", "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

   { id: 46, name: "Gt3 Max drone drone with camera", category: "Electronics", price: 15500, original: 18000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Gt3 Max drone drone.jpg", details: { description: "8k quality ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "📶 High-speed Bluetooth wireless connection", "🔋 Long-lasting rechargeable battery", "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available" ] } },

   { id: 47, name: "Hawasaki mini bike", category: "Electronics", price: 4500, original: 5000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Hawasaki mini bike.jpg", details: { description: "Enter a beautiful description of the product here.", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "💵 Cash on Delivery available" ] } },

   { id: 48, name: "`Massage gun", category: "Electronics", price: 1875, original: 2500, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Massage gun.jpg", details: { description: "Enter a beautiful description of the product here.", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🔋 Long-lasting rechargeable battery", "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available" ] } },

   { id: 49, name: "`OSK-701 Rechargeable Smart Scalp Massager", category: "Electronics", price: 2090, original: 3450, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/OSK-701 Rechargeable.jpg", details: { description: "Enter a beautiful description of the product here.", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🔋 Long-lasting rechargeable battery", "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available" ] } },

   { id: 50, name: "Ktm duke bike", category: "Electronics", price: 4500, original: 5000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Ktm duke bike.jpg", details: { description: "Enter a beautiful description of the product here.", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "💵 Cash on Delivery available" ] } },

   { id: 51, name: "Hotwheel F1 racing car", category: "Electronics", price: 8500, original: 9000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/redbull.jpg", details: { description: "Original ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

   { id: 52, name: "Hotwheel F1 racing car", category: "Electronics", price: 8500, original: 9000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/Atlassian.jpg", details: { description: "Original ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },
   { id: 53, name: "Hotwheel F1 racing car", category: "Electronics", price: 8500, original: 9000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/kik.jpg", details: { description: "Original ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

   { id: 54, name: "Hotwheel F1 racing car", category: "Electronics", price: 8500, original: 9000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/benz.jpg", details: { description: "Original ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },

   { id: 55, name: "Hotwheel F1 racing car", category: "Electronics", price: 8500, original: 9000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/McLaren.jpg", details: { description: "Original ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },
   
   { id: 56, name: "Hotwheel F1 racing car", category: "Electronics", price: 8500, original: 9000, badge: "new", rating: 5.0, reviews: 0, freeDelivery: true, img: "product_img/racingbulls.jpg", details: { description: "Original ", material: "Standard", style: "Modern", finish: "Matte Finish", occasion: "Casual", sizes: ["Standard"], highlights: [ "🚚 FREE delivery to Vavuniya", "💵 Cash on Delivery available", "🎁 Great for gifting" ] } },
    {
         id: 57,
         name: "Lamborghini mini car",
         category: "Electronics",
         price: 8500,
         original: 12000,
         badge: "new",
         rating: 5.0,
         reviews: 0,
         freeDelivery: true,
         img: "product_img/Lamborghini mini car.jpg",
         details: {
             description: "✨ Features: Lamborghini   ✅ Doors can be opened ✅ Working front and rear lights ✅ Realistic engine sound effects ✅ Premium die-cast metal body ✅ Rubber tyres",
             material: "Steal",
             style: "Modern",
             finish: "Matte Finish",
             occasion: "Casual",
             sizes: ["Standard"],
             highlights: [
                 "🚚 FREE delivery to Vavuniya",
                 "💵 Cash on Delivery available",
                 "🎁 Great for gifting"
             ]
         }
    },

    {
         id: 58,
         name: "Bmw mini car",
         category: "Electronics",
         price: 9000,
         original: 12000,
         badge: "new",
         rating: 5.0,
         reviews: 0,
         freeDelivery: true,
         img: "product_img/Bmw mini car.jpg",
         details: {
             description: "✨ Features: BMW 530li(Officially Licensed)  ✅ Doors can be opened ✅ Working front and rear lights ❌ No engine sound ✅ Premium die-cast metal body ✅ Rubber tyres",
             material: "Steal",
             style: "Modern",
             finish: "Matte Finish",
             occasion: "Casual",
             sizes: ["Standard"],
             highlights: [
                 "🚚 FREE delivery to Vavuniya",
                 "💵 Cash on Delivery available",
                 "🎁 Great for gifting"
             ]
         }
    }
];

/* =====================================================
   VAVUNIYA STORE — script.js
   SRI LANKA-WIDE DELIVERY VERSION
   ===================================================== */

/*
   IMPORTANT:
   Keep your existing `defaultProducts` array above this line.
   It contains your 58 products.

   This code starts from:
       let products = [];

   and replaces everything below it.
*/

let products = [];

// ─── Sri Lanka Districts ─────────────────────────────
const sriLankaDistricts = [
    "Ampara",
    "Anuradhapura",
    "Badulla",
    "Batticaloa",
    "Colombo",
    "Galle",
    "Gampaha",
    "Hambantota",
    "Jaffna",
    "Kalutara",
    "Kandy",
    "Kegalle",
    "Kilinochchi",
    "Kurunegala",
    "Mannar",
    "Matale",
    "Matara",
    "Monaragala",
    "Mullaitivu",
    "Nuwara Eliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya"
];

// ─── Delivery Settings ───────────────────────────────
const DELIVERY_FEE = 300;
const DELIVERY_COUNTRY = "Sri Lanka";

// ─── Fisher-Yates Shuffle ────────────────────────────
function shuffle(array) {
    const pinIndex = array.findIndex(p => p.id === 15);

    let pinItem = null;

    if (pinIndex !== -1) {
        pinItem = array.splice(pinIndex, 1)[0];
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    if (pinItem) {
        array.unshift(pinItem);
    }
}

// ─── Load Dynamic Products from JSONBin.io ───────────
async function loadDynamicProducts() {
    try {
        const binId =
            (typeof CONFIG !== 'undefined')
                ? CONFIG.JSONBIN_BIN_ID
                : null;

        if (!binId) {
            console.warn(
                'CONFIG.JSONBIN_BIN_ID not defined. Using default local products.'
            );

            products = [...defaultProducts];
            shuffle(products);
            return;
        }

        const response = await fetch(
            `https://api.jsonbin.io/v3/b/${binId}/latest`
        );

        if (!response.ok) {
            throw new Error(
                `HTTP error! Status: ${response.status}`
            );
        }

        const data = await response.json();

        if (data && data.record) {
            products = data.record;

            console.log(
                `Loaded ${products.length} products dynamically from JSONBin.io`
            );
        } else {
            throw new Error(
                'Invalid JSONBin response format'
            );
        }

    } catch (error) {
        console.error(
            'Error fetching dynamic products. Using local products:',
            error
        );

        products = [...defaultProducts];
    }

    shuffle(products);
}

// ─── State ───────────────────────────────────────────
let cart = JSON.parse(
    localStorage.getItem('bb-cart') || '[]'
);

let currentFilter = 'All';
let currentSort = 'default';
let searchQuery = '';

// ─── Save Cart ───────────────────────────────────────
function saveCart() {
    localStorage.setItem(
        'bb-cart',
        JSON.stringify(cart)
    );
}

// ─── DOM References ──────────────────────────────────
const productGrid =
    document.getElementById('product-grid');

const cartIcon =
    document.getElementById('cart-icon');

const cartOverlay =
    document.getElementById('cart-overlay');

const closeCartBtn =
    document.getElementById('close-cart');

const cartItemsEl =
    document.getElementById('cart-items');

const cartCountEl =
    document.getElementById('cart-count');

const cartTotalPriceEl =
    document.getElementById('cart-total-price');

const checkoutBtn =
    document.getElementById('checkout-btn');

const checkoutModal =
    document.getElementById('checkout-modal');

const cancelCheckout =
    document.getElementById('cancel-checkout');

const checkoutForm =
    document.getElementById('checkout-form');

const filterPillsEl =
    document.getElementById('filter-pills');

const sortSelect =
    document.getElementById('sort-select');

const searchInput =
    document.getElementById('search-input');

const noResultsEl =
    document.getElementById('no-results');

const toastEl =
    document.getElementById('toast');

// ─── Checkout Step Elements ──────────────────────────
const step1El =
    document.getElementById('step-1');

const step2El =
    document.getElementById('step-2');

const step1Ind =
    document.getElementById('step1-indicator');

const step2Ind =
    document.getElementById('step2-indicator');

const btnNext =
    document.getElementById('btn-next');

const btnBack =
    document.getElementById('btn-back');

const btnConfirm =
    document.getElementById('btn-confirm');

const reviewAddressEl =
    document.getElementById('review-address');

const reviewItemsEl =
    document.getElementById('review-items');

const reviewTotalEl =
    document.getElementById('review-total');

// ─── Setup Sri Lanka District Dropdown ───────────────
function setupSriLankaDeliveryAreas() {

    const areaEl =
        document.getElementById('c-area');

    if (!areaEl) {
        console.warn(
            'Checkout area field #c-area was not found.'
        );
        return;
    }

    /*
       If c-area is a SELECT dropdown, automatically
       replace its options with all 25 Sri Lankan districts.
    */
    if (areaEl.tagName.toLowerCase() === 'select') {

        areaEl.innerHTML = `
            <option value="">
                Select your district
            </option>

            ${sriLankaDistricts.map(district => `
                <option value="${district}">
                    ${district}
                </option>
            `).join('')}
        `;

    }

    areaEl.setAttribute(
        'aria-label',
        'Select your Sri Lankan district'
    );
}

// ─── Init ─────────────────────────────────────────────
async function init() {

    // Setup Sri Lanka-wide delivery
    setupSriLankaDeliveryAreas();

    // Disable right click
    document.addEventListener(
        'contextmenu',
        e => e.preventDefault()
    );

    // Load products
    await loadDynamicProducts();

    // Parse category from URL
    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const categoryParam =
        urlParams.get('category');

    if (categoryParam) {

        currentFilter =
            categoryParam;

        document
            .querySelectorAll('.pill')
            .forEach(p => {

                p.classList.toggle(
                    'active',
                    p.dataset.filter === currentFilter
                );

            });
    }

    renderProducts();
    updateCart();

    // Sticky header
    window.addEventListener(
        'scroll',
        () => {

            const header =
                document.getElementById(
                    'main-header'
                );

            if (header) {
                header.classList.toggle(
                    'scrolled',
                    window.scrollY > 10
                );
            }

        }
    );

    // Cart open
    cartIcon?.addEventListener(
        'click',
        () => {
            cartOverlay?.classList.add('active');
        }
    );

    // Cart close
    closeCartBtn?.addEventListener(
        'click',
        () => {
            cartOverlay?.classList.remove('active');
        }
    );

    // Close cart by clicking background
    cartOverlay?.addEventListener(
        'click',
        e => {

            if (e.target === cartOverlay) {
                cartOverlay.classList.remove(
                    'active'
                );
            }

        }
    );

    // Filter pills
    filterPillsEl?.addEventListener(
        'click',
        e => {

            if (!e.target.matches('.pill')) {
                return;
            }

            document
                .querySelectorAll('.pill')
                .forEach(p =>
                    p.classList.remove('active')
                );

            e.target.classList.add('active');

            currentFilter =
                e.target.dataset.filter;

            renderProducts();
        }
    );

    // Category cards
    document
        .querySelectorAll('.cat-card')
        .forEach(card => {

            card.addEventListener(
                'click',
                () => {

                    const filter =
                        card.dataset.filter;

                    if (
                        !document.querySelector(
                            '.products-page-main'
                        )
                    ) {

                        window.location.href =
                            `products.html?category=${encodeURIComponent(filter)}`;

                        return;
                    }

                    document
                        .querySelectorAll('.pill')
                        .forEach(p => {

                            p.classList.toggle(
                                'active',
                                p.dataset.filter === filter
                            );

                        });

                    currentFilter = filter;

                    renderProducts();

                    document
                        .getElementById(
                            'products-section'
                        )
                        ?.scrollIntoView({
                            behavior: 'smooth'
                        });
                }
            );
        });

    // Sort
    sortSelect?.addEventListener(
        'change',
        e => {

            currentSort =
                e.target.value;

            renderProducts();
        }
    );

    // Search
    let searchTimeout;

    searchInput?.addEventListener(
        'input',
        e => {

            clearTimeout(searchTimeout);

            searchTimeout =
                setTimeout(() => {

                    searchQuery =
                        e.target.value
                            .trim()
                            .toLowerCase();

                    renderProducts();

                }, 250);
        }
    );

    // ─── Checkout Open ───────────────────────────────
    checkoutBtn?.addEventListener(
        'click',
        () => {

            if (cart.length === 0) {

                showToast(
                    '🛒 Your cart is empty!'
                );

                return;
            }

            cartOverlay?.classList.remove(
                'active'
            );

            goToStep(1);

            checkoutModal?.classList.add(
                'active'
            );

            const tsEl =
                document.getElementById(
                    'bb-form-ts'
                );

            if (tsEl) {
                tsEl.value =
                    Date.now();
            }

            // Make sure districts are available
            setupSriLankaDeliveryAreas();
        }
    );

    // Close checkout
    cancelCheckout?.addEventListener(
        'click',
        () => {
            checkoutModal?.classList.remove(
                'active'
            );
        }
    );

    // Close checkout by background click
    checkoutModal?.addEventListener(
        'click',
        e => {

            if (e.target === checkoutModal) {

                checkoutModal.classList.remove(
                    'active'
                );
            }

        }
    );

    // ─── Step 1 → Step 2 ─────────────────────────────
    checkoutForm?.addEventListener(
        'submit',
        e => {

            e.preventDefault();

            if (!validateStep1()) {
                return;
            }

            buildReview();

            goToStep(2);
        }
    );

    // Back
    btnBack?.addEventListener(
        'click',
        () => goToStep(1)
    );

    // Confirm order
    btnConfirm?.addEventListener(
        'click',
        () => placeOrder()
    );

    // ─── Product Detail Modal ────────────────────────
    const pdModal =
        document.getElementById(
            'product-detail-modal'
        );

    document
        .getElementById('pd-close-btn')
        ?.addEventListener(
            'click',
            () => {
                pdModal?.classList.remove(
                    'active'
                );
            }
        );

    pdModal?.addEventListener(
        'click',
        e => {

            if (e.target === pdModal) {
                pdModal.classList.remove(
                    'active'
                );
            }

        }
    );

    document
        .getElementById('pd-add-cart-btn')
        ?.addEventListener(
            'click',
            function () {

                const id =
                    parseInt(
                        this.dataset.productId
                    );

                const activeSizeBtn =
                    document.querySelector(
                        '#pd-sizes-wrap .size-btn.selected'
                    );

                const selectedSize =
                    activeSizeBtn
                        ? activeSizeBtn.textContent
                        : null;

                addToCart(
                    id,
                    null,
                    selectedSize
                );

                pdModal?.classList.remove(
                    'active'
                );

                cartOverlay?.classList.add(
                    'active'
                );
            }
        );

    // ─── Hamburger / Mobile Nav ─────────────────────
    const hamburger =
        document.getElementById(
            'hamburger'
        );

    const mobileNav =
        document.getElementById(
            'mobile-nav'
        );

    if (hamburger && mobileNav) {

        hamburger.addEventListener(
            'click',
            () => {

                hamburger.classList.toggle(
                    'open'
                );

                mobileNav.classList.toggle(
                    'open'
                );

                document.body.style.overflow =
                    mobileNav.classList.contains(
                        'open'
                    )
                        ? 'hidden'
                        : '';
            }
        );

        mobileNav.addEventListener(
            'click',
            e => {

                if (
                    !e.target.closest(
                        '.mobile-nav-panel'
                    )
                ) {

                    hamburger.classList.remove(
                        'open'
                    );

                    mobileNav.classList.remove(
                        'open'
                    );

                    document.body.style.overflow =
                        '';
                }

            }
        );

        mobileNav
            .querySelectorAll(
                '.mobile-nav-link'
            )
            .forEach(link => {

                link.addEventListener(
                    'click',
                    () => {

                        hamburger.classList.remove(
                            'open'
                        );

                        mobileNav.classList.remove(
                            'open'
                        );

                        document.body.style.overflow =
                            '';
                    }
                );
            });
    }

    // ─── Theme Switcher ──────────────────────────────
    const themeToggle =
        document.getElementById(
            'theme-toggle'
        );

    if (themeToggle) {

        themeToggle.addEventListener(
            'click',
            () => {

                const currentTheme =
                    document.documentElement
                        .getAttribute(
                            'data-theme'
                        ) || 'rose';

                const nextTheme =
                    currentTheme === 'rose'
                        ? 'onyx'
                        : 'rose';

                document.documentElement
                    .setAttribute(
                        'data-theme',
                        nextTheme
                    );

                localStorage.setItem(
                    'bb-theme',
                    nextTheme
                );
            }
        );
    }
}

// ─── Render Products ─────────────────────────────────
function renderProducts() {

    let list = [...products];

    // Category filter
    if (currentFilter !== 'All') {

        list =
            list.filter(
                p =>
                    p.category === currentFilter
            );
    }

    // Search filter
    if (searchQuery) {

        list =
            list.filter(
                p =>
                    p.name
                        .toLowerCase()
                        .includes(searchQuery) ||

                    p.category
                        .toLowerCase()
                        .includes(searchQuery)
            );
    }

    // Sorting
    if (currentSort === 'price-asc') {

        list.sort(
            (a, b) =>
                a.price - b.price
        );

    } else if (
        currentSort === 'price-desc'
    ) {

        list.sort(
            (a, b) =>
                b.price - a.price
        );

    } else if (
        currentSort === 'name-asc'
    ) {

        list.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    } else if (
        currentSort === 'name-desc'
    ) {

        list.sort(
            (a, b) =>
                b.name.localeCompare(
                    a.name
                )
        );

    } else if (
        currentSort === 'popularity'
    ) {

        list.sort(
            (a, b) =>
                b.rating - a.rating ||
                b.reviews - a.reviews
        );
    }

    // Heading
    const heading =
        document.getElementById(
            'products-heading'
        );

    if (heading) {

        heading.textContent =
            currentFilter === 'All'
                ? 'Featured Products'
                : currentFilter;
    }

    // Homepage: show 3 products
    if (
        !document.querySelector(
            '.products-page-main'
        )
    ) {

        const pinIndex =
            list.findIndex(
                p => p.id === 15
            );

        let pinItem = null;

        if (pinIndex !== -1) {

            pinItem =
                list.splice(
                    pinIndex,
                    1
                )[0];
        }

        list =
            list
                .sort(
                    () =>
                        Math.random() - 0.5
                )
                .slice(0, 2);

        if (pinItem) {
            list.unshift(pinItem);
        }
    }

    // Count
    const countEl =
        document.getElementById(
            'count-num'
        );

    if (countEl) {
        countEl.textContent =
            list.length;
    }

    // No results
    if (noResultsEl) {

        noResultsEl.style.display =
            list.length === 0
                ? 'block'
                : 'none';
    }

    if (productGrid) {

        productGrid.style.display =
            list.length === 0
                ? 'none'
                : 'grid';
    }

    if (!productGrid) {
        return;
    }

    productGrid.innerHTML = '';

    list.forEach(
        (product, i) => {

            const card =
                document.createElement(
                    'div'
                );

            card.className =
                'product-card clickable-card';

            card.style.animationDelay =
                `${i * 0.04}s`;

            card.setAttribute(
                'role',
                'button'
            );

            card.setAttribute(
                'tabindex',
                '0'
            );

            card.setAttribute(
                'aria-label',
                `View details for ${product.name}`
            );

            const discountPct =
                product.original
                    ? Math.round(
                        (
                            1 -
                            product.price /
                            product.original
                        ) * 100
                    )
                    : null;

            const badgeHTML =
                product.badge
                    ? `<div class="badge ${
                        product.badge === 'new'
                            ? 'new'
                            : ''
                    }">${
                        product.badge === 'new'
                            ? 'New'
                            : `${discountPct}% Off`
                    }</div>`
                    : '';

            const originalHTML =
                product.original
                    ? `
                        <span class="product-price-original">
                            Rs ${product.original.toLocaleString()}
                        </span>
                    `
                    : '';

            const stars =
                '★'.repeat(
                    Math.round(
                        product.rating
                    )
                ) +
                '☆'.repeat(
                    5 -
                    Math.round(
                        product.rating
                    )
                );

            card.innerHTML = `
                ${badgeHTML}

                <div class="product-img">
                    <img
                        src="${product.img}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <div class="view-details-overlay">
                        👁 View Details
                    </div>
                </div>

                <div class="product-info">

                    <div class="product-category">
                        ${product.category}
                    </div>

                    <div class="product-title">
                        ${product.name}
                    </div>

                    <div class="product-rating">
                        <span class="stars">
                            ${stars}
                        </span>

                        <span>
                            ${product.rating}
                            (${product.reviews})
                        </span>
                    </div>

                    <div
                        style="
                            font-size:0.78rem;
                            color:#16803c;
                            margin:5px 0;
                            font-weight:600;
                        "
                    >
                        🚚 Sri Lanka-wide delivery
                    </div>

                    <div class="product-price-row">

                        <div class="product-price">
                            Rs ${product.price.toLocaleString()}
                        </div>

                        ${originalHTML}

                    </div>

                    <button
                        class="add-to-cart"
                        onclick="event.stopPropagation(); addToCart(${product.id}, this)"
                    >
                        + Add to Cart
                    </button>

                </div>
            `;

            // Open details
            card.addEventListener(
                'click',
                () =>
                    openProductDetail(
                        product.id
                    )
            );

            // Keyboard support
            card.addEventListener(
                'keydown',
                e => {

                    if (
                        e.key === 'Enter' ||
                        e.key === ' '
                    ) {

                        e.preventDefault();

                        openProductDetail(
                            product.id
                        );
                    }
                }
            );

            productGrid.appendChild(
                card
            );
        }
    );
}

// ─── Product Detail Modal ────────────────────────────
window.openProductDetail =
    function(productId) {

        const product =
            products.find(
                p => p.id === productId
            );

        if (!product) {
            return;
        }

        const d =
            product.details || {};

        const stars =
            '★'.repeat(
                Math.round(
                    product.rating
                )
            ) +
            '☆'.repeat(
                5 -
                Math.round(
                    product.rating
                )
            );

        const isRing =
            product.category === 'Fashion' ||
            product.name
                .toLowerCase()
                .includes('ring');

        const sizeLabel =
            isRing
                ? 'Ring Size'
                : 'Select Size';

        const sizesHTML =
            d.sizes &&
            d.sizes.length > 0

                ? `
                    <div class="detail-sizes">

                        <div class="detail-label">
                            ${sizeLabel}
                        </div>

                        <div class="size-options">

                            ${d.sizes.map(
                                (s, idx) => `

                                <button
                                    class="size-btn ${
                                        idx === 0
                                            ? 'selected'
                                            : ''
                                    }"
                                    onclick="
                                        event.stopPropagation();
                                        selectSize(
                                            this,
                                            '${String(s)
                                                .replace(
                                                    /'/g,
                                                    "\\'"
                                                )}',
                                            ${product.id}
                                        )
                                    "
                                >
                                    ${s}
                                </button>

                            `
                            ).join('')}

                        </div>
                    </div>
                `
                : '';

        const highlightsHTML =
            d.highlights

                ? `
                    <ul class="highlights-list">

                        ${d.highlights
                            .map(
                                h =>
                                    `<li>${h}</li>`
                            )
                            .join('')}

                    </ul>
                `
                : '';

        const specsHTML = [
            d.material
                ? `<tr>
                    <td>Material</td>
                    <td>${d.material}</td>
                   </tr>`
                : '',

            d.style
                ? `<tr>
                    <td>Style</td>
                    <td>${d.style}</td>
                   </tr>`
                : '',

            d.finish
                ? `<tr>
                    <td>Finish</td>
                    <td>${d.finish}</td>
                   </tr>`
                : '',

            d.occasion
                ? `<tr>
                    <td>Occasion</td>
                    <td>${d.occasion}</td>
                   </tr>`
                : ''
        ].join('');

        const modal =
            document.getElementById(
                'product-detail-modal'
            );

        if (!modal) {
            return;
        }

        document.getElementById(
            'pd-img'
        ).src = product.img;

        document.getElementById(
            'pd-img'
        ).alt = product.name;

        document.getElementById(
            'pd-category'
        ).textContent =
            product.category;

        document.getElementById(
            'pd-name'
        ).textContent =
            product.name;

        document.getElementById(
            'pd-stars'
        ).textContent =
            stars;

        document.getElementById(
            'pd-rating-count'
        ).textContent =
            `${product.rating} (${product.reviews} review${
                product.reviews === 1
                    ? ''
                    : 's'
            })`;

        // Initial price
        const defaultSize =
            d.sizes &&
            d.sizes.length > 0
                ? d.sizes[0]
                : null;

        let initialPrice =
            product.price;

        if (
            defaultSize &&
            d.sizePrices &&
            d.sizePrices[defaultSize]
        ) {

            initialPrice =
                d.sizePrices[
                    defaultSize
                ];
        }

        document.getElementById(
            'pd-price'
        ).textContent =
            `Rs ${initialPrice.toLocaleString()}`;

        // Sri Lanka delivery message
        const deliveryElement =
            document.getElementById(
                'pd-free-delivery'
            );

        if (deliveryElement) {

            deliveryElement.innerHTML = `
                <div
                    style="
                        color:#16803c;
                        font-weight:600;
                        margin-top:8px;
                    "
                >
                    🚚 Delivery available across Sri Lanka
                </div>

                <div
                    style="
                        color:#555;
                        font-size:0.85rem;
                        margin-top:3px;
                    "
                >
                    Delivery Fee: Rs ${DELIVERY_FEE.toLocaleString()}
                </div>
            `;
        }

        document.getElementById(
            'pd-description'
        ).textContent =
            d.description || '';

        document.getElementById(
            'pd-highlights'
        ).innerHTML =
            highlightsHTML;

        document.getElementById(
            'pd-sizes-wrap'
        ).innerHTML =
            sizesHTML;

        document.getElementById(
            'pd-specs-body'
        ).innerHTML =
            specsHTML;

        document.getElementById(
            'pd-specs-table'
        ).style.display =
            specsHTML ? '' : 'none';

        document.getElementById(
            'pd-add-cart-btn'
        ).dataset.productId =
            product.id;

        modal.classList.add(
            'active'
        );
    };

// ─── Select Product Size ─────────────────────────────
window.selectSize =
    function(btn, size, productId) {

        btn.closest(
            '.size-options'
        )
        .querySelectorAll(
            '.size-btn'
        )
        .forEach(
            b =>
                b.classList.remove(
                    'selected'
                )
        );

        btn.classList.add(
            'selected'
        );

        const product =
            products.find(
                p => p.id === productId
            );

        if (
            product &&
            product.details &&
            product.details.sizePrices &&
            product.details.sizePrices[size]
        ) {

            const newPrice =
                product.details
                    .sizePrices[size];

            document.getElementById(
                'pd-price'
            ).textContent =
                `Rs ${newPrice.toLocaleString()}`;
        }
    };

// ─── Add To Cart ────────────────────────────────────
window.addToCart =
    function(
        productId,
        btn,
        selectedSize = null
    ) {

        const product =
            products.find(
                p => p.id === productId
            );

        if (!product) {
            return;
        }

        // Default size
        if (
            !selectedSize &&
            product.details &&
            product.details.sizes &&
            product.details.sizes.length > 0
        ) {

            selectedSize =
                product.details.sizes[0];
        }

        // Price
        let price =
            product.price;

        if (
            selectedSize &&
            product.details &&
            product.details.sizePrices &&
            product.details
                .sizePrices[selectedSize]
        ) {

            price =
                product.details
                    .sizePrices[selectedSize];
        }

        // Existing item
        const existing =
            cart.find(
                i =>
                    i.id === productId &&
                    i.selectedSize === selectedSize
            );

        if (existing) {

            existing.quantity += 1;

        } else {

            cart.push({
                ...product,
                price: price,
                selectedSize:
                    selectedSize,
                quantity: 1
            });
        }

        saveCart();
        updateCart();

        showToast(
            `✅ "${product.name}"${
                selectedSize
                    ? ` (${selectedSize})`
                    : ''
            } added to cart!`
        );

        // Button feedback
        if (btn) {

            btn.textContent =
                '✓ Added!';

            btn.classList.add(
                'added'
            );

            setTimeout(
                () => {

                    btn.textContent =
                        '+ Add to Cart';

                    btn.classList.remove(
                        'added'
                    );

                },
                1800
            );
        }

        // Cart bounce
        if (cartCountEl) {

            cartCountEl.style.animation =
                'none';

            requestAnimationFrame(
                () => {

                    cartCountEl.style.animation =
                        '';
                }
            );
        }
    };

// ─── Update Quantity ────────────────────────────────
window.updateQuantity =
    function(
        id,
        delta,
        size = ''
    ) {

        const targetSize =
            size === 'null' ||
            size === ''
                ? null
                : size;

        const item =
            cart.find(
                i =>
                    i.id === id &&
                    i.selectedSize ===
                        targetSize
            );

        if (!item) {
            return;
        }

        item.quantity +=
            delta;

        if (item.quantity <= 0) {

            cart =
                cart.filter(
                    i =>
                        !(
                            i.id === id &&
                            i.selectedSize ===
                                targetSize
                        )
                );
        }

        saveCart();
        updateCart();
    };

// ─── Remove Item ────────────────────────────────────
window.removeItem =
    function(
        id,
        size = ''
    ) {

        const targetSize =
            size === 'null' ||
            size === ''
                ? null
                : size;

        cart =
            cart.filter(
                i =>
                    !(
                        i.id === id &&
                        i.selectedSize ===
                            targetSize
                    )
            );

        saveCart();
        updateCart();
    };

// ─── Update Cart ────────────────────────────────────
function updateCart() {

    let total = 0;
    let count = 0;

    if (cart.length === 0) {

        cartItemsEl.innerHTML = `
            <div class="cart-empty">

                <span>🛒</span>

                <p>
                    Your cart is empty
                </p>

                <small
                    style="
                        color:var(--text-muted);
                        font-size:.82rem;
                    "
                >
                    Add some items to get started
                </small>

            </div>
        `;

    } else {

        cartItemsEl.innerHTML = '';

        cart.forEach(
            item => {

                total +=
                    item.price *
                    item.quantity;

                count +=
                    item.quantity;

                const el =
                    document.createElement(
                        'div'
                    );

                el.className =
                    'cart-item';

                el.innerHTML = `
                    <img
                        src="${item.img}"
                        alt="${item.name}"
                        class="cart-item-img"
                        loading="lazy"
                    >

                    <div class="cart-item-details">

                        <div class="cart-item-title">

                            ${item.name}

                            ${
                                item.selectedSize
                                    ? `
                                        <span
                                            class="cart-item-size-badge"
                                            style="
                                                font-size:0.75rem;
                                                color:var(--accent);
                                                display:block;
                                                margin-top:0.1rem;
                                                font-weight:600;
                                            "
                                        >
                                            Size:
                                            ${item.selectedSize}
                                        </span>
                                    `
                                    : ''
                            }

                        </div>

                        <div class="cart-item-unit">
                            Rs ${item.price.toLocaleString()} each
                        </div>

                        <div class="cart-item-price">
                            Rs ${
                                (
                                    item.price *
                                    item.quantity
                                ).toLocaleString()
                            }
                        </div>

                        <div class="cart-item-actions">

                            <button
                                class="qty-btn"
                                onclick="
                                    updateQuantity(
                                        ${item.id},
                                        -1,
                                        '${item.selectedSize || ''}'
                                    )
                                "
                            >
                                −
                            </button>

                            <span class="qty-value">
                                ${item.quantity}
                            </span>

                            <button
                                class="qty-btn"
                                onclick="
                                    updateQuantity(
                                        ${item.id},
                                        1,
                                        '${item.selectedSize || ''}'
                                    )
                                "
                            >
                                +
                            </button>

                            <button
                                class="remove-btn"
                                onclick="
                                    removeItem(
                                        ${item.id},
                                        '${item.selectedSize || ''}'
                                    )
                                "
                            >
                                Remove
                            </button>

                        </div>

                    </div>
                `;

                cartItemsEl.appendChild(
                    el
                );
            }
        );
    }

    if (cartCountEl) {
        cartCountEl.textContent =
            count;
    }

    if (cartTotalPriceEl) {
        cartTotalPriceEl.textContent =
            `Rs ${total.toLocaleString()}`;
    }
}

// ─── Checkout Steps ────────────────────────────────
function goToStep(n) {

    if (step1El) {

        step1El.style.display =
            n === 1
                ? 'block'
                : 'none';
    }

    if (step2El) {

        step2El.style.display =
            n === 2
                ? 'block'
                : 'none';
    }

    if (step1Ind) {

        step1Ind.classList.toggle(
            'active',
            n === 1
        );

        step1Ind.classList.toggle(
            'done',
            n > 1
        );
    }

    if (step2Ind) {

        step2Ind.classList.toggle(
            'active',
            n === 2
        );
    }
}

// ─── Validate Checkout ──────────────────────────────
function validateStep1() {

    const name =
        document.getElementById(
            'c-name'
        )?.value.trim();

    const phone =
        document.getElementById(
            'c-phone'
        )?.value.trim();

    const addr =
        document.getElementById(
            'c-address'
        )?.value.trim();

    const area =
        document.getElementById(
            'c-area'
        )?.value;

    // Required fields
    if (
        !name ||
        !phone ||
        !addr ||
        !area
    ) {

        showToast(
            '⚠️ Please fill all required fields'
        );

        return false;
    }

    // Sri Lankan phone validation
    const phoneRegex =
        /^0\d{9}$/;

    const cleanPhone =
        phone.replace(
            /\s/g,
            ''
        );

    if (
        !phoneRegex.test(
            cleanPhone
        )
    ) {

        showToast(
            '⚠️ Enter a valid Sri Lankan phone number (e.g. 0771234567)'
        );

        return false;
    }

    // District validation
    if (
        !sriLankaDistricts.includes(
            area
        )
    ) {

        showToast(
            '⚠️ Please select a valid Sri Lankan district'
        );

        return false;
    }

    return true;
}

// ─── Build Order Review ─────────────────────────────
function buildReview() {

    const name =
        document.getElementById(
            'c-name'
        ).value.trim();

    const phone =
        document.getElementById(
            'c-phone'
        ).value.trim();

    const addr =
        document.getElementById(
            'c-address'
        ).value.trim();

    const area =
        document.getElementById(
            'c-area'
        ).value;

    const note =
        document.getElementById(
            'c-note'
        )?.value.trim() || '';

    // Customer address review
    reviewAddressEl.innerHTML = `
        <strong>
            ${name}
        </strong>

        &nbsp;|&nbsp;

        ${phone}

        <br>

        ${addr},
        ${area}

        <br>

        ${DELIVERY_COUNTRY}

        <br>

        <span
            style="
                color:#16803c;
                font-weight:600;
            "
        >
            🚚 Sri Lanka-wide delivery
        </span>

        <br>

        <span
            style="
                font-size:0.85rem;
                color:#666;
            "
        >
            Delivery Fee:
            Rs ${DELIVERY_FEE.toLocaleString()}
        </span>

        ${
            note
                ? `
                    <br>
                    <em>
                        Note: ${note}
                    </em>
                `
                : ''
        }
    `;

    reviewItemsEl.innerHTML = '';

    let subtotal = 0;

    cart.forEach(
        item => {

            subtotal +=
                item.price *
                item.quantity;

            const row =
                document.createElement(
                    'div'
                );

            row.className =
                'review-item';

            row.innerHTML = `
                <span>
                    ${item.name}
                    ×
                    ${item.quantity}
                    ${
                        item.selectedSize
                            ? ` (${item.selectedSize})`
                            : ''
                    }
                </span>

                <strong>
                    Rs ${
                        (
                            item.price *
                            item.quantity
                        ).toLocaleString()
                    }
                </strong>
            `;

            reviewItemsEl.appendChild(
                row
            );
        }
    );

    // Delivery fee
    const deliveryRow =
        document.createElement(
            'div'
        );

    deliveryRow.className =
        'review-item';

    deliveryRow.innerHTML = `
        <span>
            Delivery Fee - Sri Lanka
        </span>

        <strong>
            Rs ${DELIVERY_FEE.toLocaleString()}
        </strong>
    `;

    reviewItemsEl.appendChild(
        deliveryRow
    );

    const total =
        subtotal +
        DELIVERY_FEE;

    if (total > 10000) {

        reviewTotalEl.innerHTML = `
            Rs ${total.toLocaleString()}

            <br>

            <span
                style="
                    color:#d32f2f;
                    font-size:0.85em;
                    font-weight:500;
                "
            >
                (50% Advance Payment Required)
            </span>
        `;

    } else {

        reviewTotalEl.textContent =
            `Rs ${total.toLocaleString()} (COD)`;
    }
}

// ─── Anti-Spam Guard ────────────────────────────────
function isSpam() {

    // Honeypot
    const honeypot =
        document.getElementById(
            'bb-url'
        );

    if (
        honeypot &&
        honeypot.value.trim() !== ''
    ) {

        console.warn(
            '[BB] Spam blocked: honeypot triggered'
        );

        return true;
    }

    // Speed check
    const tsEl =
        document.getElementById(
            'bb-form-ts'
        );

    if (
        tsEl &&
        tsEl.value
    ) {

        const elapsed =
            Date.now() -
            parseInt(
                tsEl.value,
                10
            );

        if (elapsed < 3000) {

            console.warn(
                '[BB] Spam blocked: form submitted too fast'
            );

            return true;
        }
    }

    // Rate limit
    const now =
        Date.now();

    const oneDay =
        24 *
        60 *
        60 *
        1000;

    const history =
        JSON.parse(
            localStorage.getItem(
                'bb-order-times'
            ) || '[]'
        )
        .filter(
            t =>
                now - t <
                oneDay
        );

    if (history.length >= 4) {

        const oldest =
            Math.min(
                ...history
            );

        const hoursLeft =
            Math.ceil(
                (
                    oldest +
                    oneDay -
                    now
                ) /
                (
                    60 *
                    60 *
                    1000
                )
            );

        showToast(
            `⚠️ Daily order limit reached. Try again in ${hoursLeft} hour${
                hoursLeft === 1
                    ? ''
                    : 's'
            }.`
        );

        return true;
    }

    return false;
}

// ─── Record Order ──────────────────────────────────
function recordOrder() {

    const now =
        Date.now();

    const oneDay =
        24 *
        60 *
        60 *
        1000;

    const history =
        JSON.parse(
            localStorage.getItem(
                'bb-order-times'
            ) || '[]'
        )
        .filter(
            t =>
                now - t <
                oneDay
        );

    history.push(
        now
    );

    localStorage.setItem(
        'bb-order-times',
        JSON.stringify(history)
    );
}

// ─── Place Order ───────────────────────────────────
function placeOrder() {

    // Anti-spam
    if (isSpam()) {

        showToast(
            '⚠️ Order blocked. Please try again.'
        );

        return;
    }

    // Disable confirm button
    if (btnConfirm) {

        btnConfirm.textContent =
            '⏳ Placing Order…';

        btnConfirm.disabled =
            true;
    }

    // Subtotal
    const subtotal =
        cart.reduce(
            (
                sum,
                item
            ) =>
                sum +
                item.price *
                item.quantity,
            0
        );

    // Sri Lanka delivery fee
    const deliveryFee =
        DELIVERY_FEE;

    // Final total
    const total =
        subtotal +
        deliveryFee;

    // Customer information
    const customerName =
        document.getElementById(
            'c-name'
        ).value.trim();

    const customerPhone =
        document.getElementById(
            'c-phone'
        ).value.trim();

    const customerAddress =
        document.getElementById(
            'c-address'
        ).value.trim();

    const customerArea =
        document.getElementById(
            'c-area'
        ).value;

    const customerNote =
        document.getElementById(
            'c-note'
        )?.value.trim() || '';

    // ─── Order Data ─────────────────────────────────
    const orderData = {

        customer: {

            name:
                customerName,

            phone:
                customerPhone,

            address:
                customerAddress,

            area:
                customerArea,

            district:
                customerArea,

            country:
                DELIVERY_COUNTRY,

            deliveryCountry:
                DELIVERY_COUNTRY,

            note:
                customerNote
        },

        items:
            cart.map(
                item => ({

                    id:
                        item.id,

                    name:
                        item.name,

                    price:
                        item.price,

                    quantity:
                        item.quantity,

                    selectedSize:
                        item.selectedSize ||
                        null,

                    img:
                        item.img ||
                        null
                })
            ),

        subtotal:
            subtotal,

        deliveryFee:
            deliveryFee,

        total:
            total,

        deliveryMethod:
            'Sri Lanka-wide Delivery',

        deliveryLocation:
            customerArea,

        paymentMethod:
            total > 10000
                ? 'Advance'
                : 'COD',

        status:
            'pending',

        createdAt:
            new Date().toISOString(),

        orderNumber:
            'BB-' +
            Date.now()
                .toString(36)
                .toUpperCase()
    };

    // ─── Save to Firebase ───────────────────────────
    const saveOrder =
        (
            typeof db !==
            'undefined'
        )

            ? db
                .collection('orders')
                .add(orderData)

            : Promise.resolve();

    saveOrder
        .then(
            () => {

                // Record successful order
                recordOrder();

                // Empty cart
                cart = [];

                saveCart();

                updateCart();

                // Close checkout
                checkoutModal?.classList.remove(
                    'active'
                );

                // Reset form
                checkoutForm?.reset();

                // Re-create district dropdown
                setupSriLankaDeliveryAreas();

                // Return to step 1
                goToStep(1);

                // Reset button
                if (btnConfirm) {

                    btnConfirm.textContent =
                        '✅ Confirm Order';

                    btnConfirm.disabled =
                        false;
                }

                // Success page
                window.location.href =
                    'order-success.html?method=' +
                    encodeURIComponent(
                        orderData.paymentMethod
                    );
            }
        )
        .catch(
            err => {

                console.error(
                    'Error saving order:',
                    err
                );

                if (btnConfirm) {

                    btnConfirm.textContent =
                        '✅ Confirm Order';

                    btnConfirm.disabled =
                        false;
                }

                showToast(
                    '⚠️ Order failed. Please try again.'
                );
            }
        );
}

// ─── Toast ──────────────────────────────────────────
let toastTimeout;

function showToast(msg) {

    if (!toastEl) {
        return;
    }

    toastEl.textContent =
        msg;

    toastEl.classList.add(
        'show'
    );

    clearTimeout(
        toastTimeout
    );

    toastTimeout =
        setTimeout(
            () => {

                toastEl.classList.remove(
                    'show'
                );

            },
            3000
        );
}

// ─── Start Application ──────────────────────────────
init();
