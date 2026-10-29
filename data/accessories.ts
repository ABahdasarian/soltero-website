
export type AccessorySet = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  coverImage: string;
  images: string[];
};

const set1 = [
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792963993/IMG_6026.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792963994/IMG_6060.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792963997/IMG_6121.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964009/IMG_6070.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964003/IMG_6078.webp",
  
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792963997/IMG_6103.webp",
  
];

const set2 = [
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964031/IMG_7773.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964008/IMG_8022.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964007/IMG_8003.webp",
  
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964008/IMG_8012.webp",

  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964004/IMG_7979.webp",
];

const set3 = [
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964014/IMG_1967.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964010/IMG_0976.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964031/IMG_3333.webp",
   
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964027/IMG_3334.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964027/IMG_3321.webp",
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964019/IMG_2667.webp",
  
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964014/IMG_2645.webp",
 
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964011/IMG_1011.webp",
  
 
];

const set4 = [
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964042/IMG_6962.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964044/IMG_6927.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964030/IMG_6775.webp",
  
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964037/IMG_6778.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964035/IMG_6809.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964034/IMG_6794.webp",
 
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964034/IMG_6758.webp",
  
  
  
];

const set5 = [
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964047/IMG_7049.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964040/IMG_6834.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964042/IMG_6840.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964046/IMG_6867.webp",
  
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964044/IMG_6852.webp",
  "https://res.cloudinary.com/cwh8h4x4/image/upload/v1792964043/IMG_6850.webp",

  
  
];

export const accessories: AccessorySet[] = [
  {
    id: "set-1",
    name: "Freshwater Pearl Bridal Jewellery Set with Crystal Heart Necklace & Bracelet",
    description: `A delicate handmade jewellery set featuring natural freshwater pearls, sparkling faceted beads and romantic heart details. Designed especially for bridal and wedding looks, this elegant set can be purchased together or as individual pieces.

The soft lustre of natural freshwater pearls combined with clear sparkling beads creates a timeless, feminine look — perfect for the bride, bridesmaids or other special occasions.

NECKLACE
Handmade with natural freshwater pearls, clear faceted crystal beads and a sparkling crystal heart pendant.

Necklace size options:
• 15 in (38 cm) + 2 in extender
• 16 in (41 cm) + 2 in extender
• 17 in (43 cm) + 2 in extender
• 18 in (46 cm) + 2 in extender

The necklace includes an adjustable stainless steel extender chain for a comfortable fit.

BRACELET
Handmade with natural freshwater pearls, faceted glass beads and a sparkling zircon heart charm.

Bracelet size options:
• 14 cm (5.5 in)
• 15 cm (5.9 in)
• 16 cm (6.3 in)
• 17 cm (6.7 in)
• 18 cm (7.1 in)
• 19 cm (7.5 in)
• 20 cm (7.9 in)

Each bracelet includes a 3 cm (1.2 in) stainless steel extender chain, allowing you to adjust the fit for maximum comfort.

DETAILS
• Natural freshwater pearls
• Clear faceted crystal and glass beads
• Crystal heart pendant on the necklace
• Zircon heart charm on the bracelet
• Stainless steel clasps and extender chains
• Handmade in the UK
• Available individually or as a matching set.

CARE
Avoid contact with water, perfumes and harsh chemicals. Store in a dry place and clean gently with a soft cloth.`,
    price: null,
    coverImage: set1[0],
    images: set1,
  },
  {
    id: "set-2",
    name: "Crystal Beaded Choker Necklace with Teardrop Cubic Zirconia Pendant",
    description: `Add a delicate sparkle to your look with this handmade crystal beaded choker necklace, featuring shimmering jewellery glass beads and a sparkling teardrop cubic zirconia (CZ) pendant set in silver-tone stainless steel.

The faceted glass beads catch the light beautifully, while the delicate CZ pendant adds an elegant finishing touch. Inspired by Art Deco elegance, this feminine necklace is perfect for prom, parties, special occasions or adding a little sparkle to an everyday outfit. Wear it on its own or layer it with your favourite necklaces.

✦ MATERIALS
Jewellery glass beads, Cubic zirconia (CZ), Stainless steel

✦ AVAILABLE SIZES
Choose your preferred necklace length:
14.6 in (37 cm)
15.4 in (39 cm)
16.1 in (41 cm)
16.9 in (43 cm)
17.7 in (45 cm)

Each necklace includes an additional 2 in (5 cm) extender chain for an adjustable fit.

✦ MODEL SIZE
The model is wearing a 15.4 in (39 cm) necklace with a 2 in (5 cm) extender chain.

✦ PERFECT FOR
Everyday sparkle
Prom and special occasions
Romantic and feminine outfits
Layering with other necklaces
Birthday and anniversary gifts
A thoughtful gift for a girlfriend, sister or friend

✦ GIFT READY
Your necklace will arrive beautifully packaged and ready to gift.

✦ JEWELLERY CARE
Avoid direct contact with water, perfumes, lotions and harsh chemicals. Gently wipe with a soft cloth after wearing and store in a dry place.`,
    price: null,
    coverImage: set2[0],
    images: set2,
  },
  {
    id: "set-3",
    name: "Freshwater Pearl Jewellery Set with Crystal Necklace, Bracelet & Cross Earrings",
    description: `A romantic three-piece jewellery set handmade with natural freshwater pearls, sparkling crystal glass beads and delicate gold-tone details. Lightweight and comfortable to wear.

The set includes a matching necklace, bracelet and zircon cross drop earrings. Perfect for romantic and coquette-inspired looks, bridal styling, bridesmaids, birthdays, anniversaries or as a beautiful gift for a wife, mum, sister or someone special.

MATERIALS
• Natural freshwater pearls
• Premium crystal glass beads
• Premium Japanese seed beads
• Gold plated stainless steel details
• Sparkling zircon cross charms

NECKLACE — 2 LOOKS IN 1
The zircon cross charm is removable. Wear it with the charm for a statement look, or remove it for a softer pearl & crystal necklace. The toggle clasp can be worn at the front or back.

NECKLACE LENGTHS
• 44 cm / 17.3 in
• 46 cm / 18.1 in
• 48 cm / 18.9 in
• 50 cm / 19.7 in

BRACELET SIZE
Please enter your preferred bracelet length in the personalisation box. Each bracelet includes an additional approx. 3 cm / 1.2 in extender chain.

As freshwater pearls are natural, slight variations in shape and size make every piece unique.`,
    price: null,
    coverImage: set3[0],
    images: set3,
  },
  
{
  id: "set-4",
  name: "Elegant Freshwater Pearl Necklace & Bracelet Set",
  description: `A timeless handmade jewellery set featuring natural freshwater pearls, sparkling crystal glass beads, premium Japanese TOHO seed beads and a delicate cubic zirconia charm.

Designed for brides who love elegant, minimalist jewellery, this matching pearl necklace and bracelet set is perfect for your wedding day and beautiful enough to wear long after the celebration.

Whether you’re walking down the aisle, celebrating an anniversary, attending a special event, enjoying a romantic dinner or simply adding a touch of elegance to your everyday style, this delicate jewellery set will complement any outfit beautifully.

Materials:
• Natural freshwater pearls
• Crystal glass beads
• Premium Japanese TOHO seed beads
• Cubic zirconia charm
• Gold-coloured stainless steel clasp, extender chain and findings

Necklace Sizes
14” (36 cm)
15” (38 cm)
16” (41 cm)
17” (43 cm)
18” (46 cm)
19” (48 cm)
20” (51 cm)

2” (5 cm) extender chain

Bracelet Size
Please write your preferred bracelet length in the Personalisation box when placing your order.

Each bracelet is handmade to your requested length and includes a 3 cm (1.18”) stainless steel extender chain for a comfortable, adjustable fit.

Perfect For
♡ Bridal jewellery
♡ Wedding gift
♡ Bridesmaid gift
♡ Anniversary
♡ Birthday
♡ Elegant everyday wear`,
  price: null,
  coverImage: set4[0],
  images: set4,
},

  {
    id: "set-5",
    name: "Elegant Freshwater Pearl Bridal Jewelry Set",
    description: `Complete your bridal look with this elegant handmade freshwater pearl necklace and matching bracelet set, featuring genuine freshwater pearls, sparkling crystal glass beads, a shimmering square cubic zirconia pendant and durable stainless steel findings in a silver finish.

Designed for brides who love timeless elegance, this delicate jewelry set is also perfect for bridesmaids, anniversaries, birthdays, romantic dinners or adding a refined touch to everyday outfits. Its classic design makes it a keepsake you’ll enjoy long after the wedding day.

Materials
• Genuine freshwater pearls
• Crystal glass beads
• Square cubic zirconia pendant
• Silver-coloured stainless steel clasp, extender chain and findings.
────────────

Necklace Sizes:

14” (36 cm)
15” (38 cm)
16” (41 cm)
17” (43 cm)
18” (46 cm)
19” (48 cm)
20” (51 cm)

Each necklace includes an approximately 2” (5 cm) stainless steel extender chain for an adjustable fit.
────────────

Bracelet Size:

Please write your preferred bracelet length in the Personalisation box when placing your order.

Each bracelet is handmade to your requested length and includes a 3 cm (1.18”) stainless steel extender chain for a comfortable, adjustable fit.

Perfect For ♡ Bridal jewellery ♡ Wedding gift ♡ Bridesmaid gift ♡ Anniversary ♡ Birthday ♡ Elegant everyday wear`,
    price: null,
    coverImage: set5[0],
    images: set5,
  },
];
