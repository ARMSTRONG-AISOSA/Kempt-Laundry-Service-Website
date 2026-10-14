export const site = {
  name: 'Kempt Laundry Services',
  // Live address. Set NEXT_PUBLIC_SITE_URL (e.g. in Vercel) when a custom domain is connected.
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://kemptlaundry.vercel.app').replace(/\/$/, ''),
  // Other names people search for — used in structured data for Google.
  altNames: ['Kempt Laundry', 'Kempt Laundry Service', 'Kempt Laundry Benin', 'Kempt'],
  tagline: 'Cleaner clothes, better care.',
  phone: '+234 806 379 4348',
  phoneHref: 'tel:+2348063794348',
  whatsapp: 'https://wa.me/2348063794348',
  pickupHref: 'https://wa.me/2348063794348?text=' + encodeURIComponent("Hi Kempt, I'd like to schedule a pickup."),
  google: 'https://maps.app.goo.gl/HYyNidGfMSRXPzpVA',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.790965724113!2d5.588009670415838!3d6.420898810162067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafdb20cbcdf43d5b%3A0xf977abf7f60937e4!2sKEMPT%20LAUNDRY%20SERVICES!5e0!3m2!1sen!2sng!4v1791912652813!5m2!1sen!2sng',
  address: '1st Power Line, by Uche Store, Isiohor Road, off Aibalegbe, Uselu, Benin City 302117, Edo State',
  postal: {
    street: '1st Power Line, by Uche Store, Isiohor Road, off Aibalegbe, Uselu',
    city: 'Benin City',
    region: 'Edo State',
    postcode: '302117',
    country: 'NG',
  },
  // Pickup areas within Benin City, e.g. ['Uselu', 'Ugbowo']. Only list areas Kempt really serves.
  areas: [] as string[],
  // Social profiles — paste full URLs when the pages are created. Empty ones are ignored.
  socials: { instagram: '', facebook: '', tiktok: '', x: '' },
  // Opening hours for Google (24h). Keep in sync with `hours` above.
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:30' },
    { days: ['Saturday'], opens: '10:30', closes: '17:00' },
    { days: ['Sunday'], opens: '13:30', closes: '17:00' },
  ],
  hours: [
    { d: 'Mon – Fri', t: '8:00 AM – 6:30 PM' },
    { d: 'Saturday', t: '10:30 AM – 5:00 PM' },
    { d: 'Sunday', t: '1:30 PM – 5:00 PM' },
  ],
  developer: { name: 'Bossstrong-Dev', href: 'https://bossstrong-dev.vercel.app/' },
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
];

export const steps = [
  { n: '1', t: 'Book', d: 'Schedule online or send us a WhatsApp message.' },
  { n: '2', t: 'We pick up', d: 'We collect your bag from your home, hostel or office.' },
  { n: '3', t: 'We clean', d: 'Washed, ironed and starched if you want it.' },
  { n: '4', t: 'Back in 72 hours', d: 'Returned fresh and folded — or sooner with express.' },
];

export const services = [
  { t: 'Washing & folding', d: 'Everyday clothes washed, dried and neatly folded.', img: '/photos/folded.jpg' },
  { t: 'Ironing & starching', d: 'Crisp shirts, native wear and uniforms, pressed and starched.', img: '/photos/shirts.jpg' },
  { t: 'Duvets & bedspreads', d: 'Bulky bedding deep-cleaned, too big for a home machine.', img: '/photos/basket.jpg' },
  { t: 'Curtains & rugs', d: 'Cleaned and returned ready to hang or lay.', img: '/photos/textiles.jpg' },
  { t: 'Shoes & throw pillows', d: 'Sneakers, canvas shoes and cushions cleaned by hand.', img: '/photos/sneakers.jpg' },
  { t: 'Bulk laundry', d: 'Academic gowns, choir robes and school uniforms in volume.', img: '/photos/apparel.jpg' },
];

export const groups = [
  { t: 'Everyday clothing', d: 'Shirts, trousers, dresses and native attire — washed, ironed and folded.', items: ['Washing', 'Ironing', 'Starching', 'Folding'], img: '/photos/shirts.jpg' },
  { t: 'Home & bedding', d: 'The big, heavy items that don\u2019t fit at home.', items: ['Duvets', 'Bedspreads', 'Curtains', 'Rugs', 'Throw pillows'], img: '/photos/basket2.jpg' },
  { t: 'Shoes', d: 'Hand-cleaned so they look new without damage.', items: ['Sneakers', 'Canvas shoes', 'School shoes'], img: '/photos/sneakers.jpg' },
  { t: 'Bulk laundry', d: 'Volume cleaning for schools, churches and organisations.', items: ['Academic gowns', 'Choir robes', 'School uniforms'], img: '/photos/apparel.jpg' },
];

// SAMPLE PRICES — replace with the confirmed price list.
export const featured = [
  { t: 'Shirt', p: '₦500', img: '/photos/shirts.jpg' },
  { t: 'Trousers', p: '₦600', img: '/photos/folded.jpg' },
  { t: 'Native attire', p: '₦1,500', img: '/photos/apparel.jpg' },
  { t: 'Bedspread', p: '₦2,500', img: '/photos/basket.jpg' },
  { t: 'Duvet', p: '₦4,000', img: '/photos/basket2.jpg' },
  { t: 'Sneakers', p: '₦2,000', img: '/photos/sneakers.jpg' },
];

export type PriceRow = { t: string; d: string; p: string; img: string };
export const priceTabs: { key: string; label: string; rows: PriceRow[] }[] = [
  { key: 'clothing', label: 'Clothing', rows: [
    { t: 'Shirt / blouse', d: 'Wash, iron, fold', p: '₦500', img: '/photos/shirts.jpg' },
    { t: 'Trousers / skirt', d: 'Wash & iron', p: '₦600', img: '/photos/folded.jpg' },
    { t: 'Native attire', d: 'Agbada, kaftan, buba', p: '₦1,500', img: '/photos/apparel.jpg' },
    { t: 'Dress / gown', d: 'Wash & iron', p: '₦1,000', img: '/photos/hero.jpg' },
    { t: 'Suit (2-piece)', d: 'Jacket & trousers', p: '₦2,500', img: '/photos/shirts.jpg' },
    { t: 'School uniform set', d: 'Shirt + shorts/skirt', p: '₦800', img: '/photos/folded.jpg' },
  ] },
  { key: 'household', label: 'Household', rows: [
    { t: 'Bedspread', d: 'Single to king size', p: '₦2,500', img: '/photos/basket.jpg' },
    { t: 'Duvet', d: 'Single to king size', p: '₦4,000', img: '/photos/basket2.jpg' },
    { t: 'Curtains', d: 'Per panel', p: '₦1,500', img: '/photos/textiles.jpg' },
    { t: 'Throw pillow', d: 'Per pillow', p: '₦800', img: '/photos/hero.jpg' },
    { t: 'Rug', d: 'Priced by size', p: 'from ₦5,000', img: '/photos/textiles.jpg' },
  ] },
  { key: 'shoes', label: 'Shoes', rows: [
    { t: 'Sneakers', d: 'Hand-washed', p: '₦2,000', img: '/photos/sneakers.jpg' },
    { t: 'Canvas shoes', d: 'Hand-washed', p: '₦1,500', img: '/photos/sneakers.jpg' },
    { t: 'School shoes', d: 'Clean & polish', p: '₦1,000', img: '/photos/sneakers.jpg' },
  ] },
  { key: 'bulk', label: 'Bulk', rows: [
    { t: 'Academic gowns', d: 'Per piece, 20+ pieces', p: 'Quote', img: '/photos/apparel.jpg' },
    { t: 'Choir robes', d: 'Per piece, 20+ pieces', p: 'Quote', img: '/photos/apparel.jpg' },
    { t: 'School uniforms', d: 'Per set, 50+ sets', p: 'Quote', img: '/photos/folded.jpg' },
  ] },
];

export const faqs = [
  { q: 'How long does it take?', a: 'Standard orders are returned within 72 hours. Express delivery is available on most items — ask when booking.' },
  { q: 'Do you pick up and deliver?', a: 'Yes, across Benin City. Schedule online or send us a WhatsApp message with your address and preferred time.' },
  { q: 'How is starching charged?', a: 'Starching is an add-on charged per item, from ₦200.' },
];

export const reviews = [
  { i: 'AO', n: 'Armstrong Omoregie', r: 'Customer for 2 years', q: 'I have enjoyed Kempt Laundry Services for the past 2 years and their delivery and everything has only gotten better.' },
  { i: 'JE', n: 'Joshua Eboh', r: 'Express service', q: 'I got the express service — in 24 hours I had my clothes back, and it had such a sleek finish. I was amazed by the quality in such a short time.' },
  { i: 'BV', n: 'Benjamin Victory', r: 'Google review', q: 'I have always had a great experience with Kempt. They leave my clothes right on time and give very quality service.' },
  { i: 'TS', n: 'Tobore Samson Oghenekevwe', r: 'Ugbowo · customer for 3+ years', q: 'My sure plug for over 3 years now! I be busy guy, so washing has always been wahala for me. But Kempt nor let the stress finish me.' },
  { i: 'OB', n: 'Osamudiamen Blessing', r: 'Google review', q: 'If you are looking for a professional, affordable and reliable laundry service in Benin City that picks up and delivers on time, Kempt Laundry is the place to go.' },
  { i: 'OD', n: 'Okoye Divinedidy', r: 'Google review', q: 'Mr. Reliable — always up to date when it comes to services to customers. Keep up the good work.' },
];

// Replace with real client logos: { name, src } where src lives in /public/clients/
export const clients = Array.from({ length: 7 }, (_, i) => ({ name: 'Client logo ' + (i + 1), src: '' }));
