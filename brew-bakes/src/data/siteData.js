export const menuItems = [
  // Coffee
  {
    id: 1, category: 'coffee', name: 'Espresso Shot',
    desc: 'Rich, concentrated espresso pulled from single-origin beans.',
    price: '₹120', badge: 'Bestseller',
    emoji: '☕',
    img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80'
  },
  {
    id: 2, category: 'coffee', name: 'Cappuccino',
    desc: 'Velvety espresso with steamed milk and a thick, airy foam crown.',
    price: '₹180', badge: 'Popular',
    emoji: '☕',
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80'
  },
  {
    id: 3, category: 'coffee', name: 'Caramel Latte',
    desc: 'Smooth espresso melted into silky steamed milk with house caramel drizzle.',
    price: '₹200', badge: '',
    emoji: '🥛',
    img: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=400&q=80'
  },
  {
    id: 4, category: 'coffee', name: 'Cold Brew Coffee',
    desc: 'Steeped 18 hours for a naturally sweet, ultra-smooth cold coffee.',
    price: '₹220', badge: 'New',
    emoji: '🧊',
    img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80'
  },
  // Bakes
  {
    id: 5, category: 'bakes', name: 'Belgian Chocolate Cake',
    desc: 'Three-layer dark chocolate cake with ganache and cocoa dust.',
    price: '₹350', badge: 'Chef\'s Pick',
    emoji: '🍰',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'
  },
  {
    id: 6, category: 'bakes', name: 'Fudge Brownies',
    desc: 'Dense, gooey brownies with walnuts and a crinkly top. Served warm.',
    price: '₹120', badge: 'Bestseller',
    emoji: '🍫',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80'
  },
  {
    id: 7, category: 'bakes', name: 'Vanilla Cheesecake',
    desc: 'New York-style cheesecake on a buttery graham crust.',
    price: '₹280', badge: '',
    emoji: '🍮',
    img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80'
  },
  // Sandwiches
  {
    id: 8, category: 'bites', name: 'Club Sandwich',
    desc: 'Triple-decker with chicken, bacon, lettuce, tomato, and aioli.',
    price: '₹260', badge: '',
    emoji: '🥪',
    img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'
  },
  {
    id: 9, category: 'bites', name: 'Avocado Toast',
    desc: 'Sourdough toast with smashed avocado, poached egg, and chili flakes.',
    price: '₹220', badge: 'Healthy Pick',
    emoji: '🥑',
    img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80'
  },
  {
    id: 10, category: 'bites', name: 'Grilled Panini',
    desc: 'Pressed panini with mozzarella, tomato, and pesto on ciabatta.',
    price: '₹240', badge: '',
    emoji: '🥖',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
  },
];

export const menuCategories = [
  { id: 'all', label: 'All Items' },
  { id: 'coffee', label: '☕ Coffee' },
  { id: 'bakes', label: '🍰 Bakes' },
  { id: 'bites', label: '🥪 Bites' },
];

export const testimonials = [
  {
    id: 1, name: 'Priya Sharma', role: 'Food Blogger',
    rating: 5, avatar: 'PS',
    text: 'Brew & Bakes is my absolute favourite spot in the city. The cappuccino is rich and perfectly balanced, and their brownies are the best I\'ve ever had — and I\'ve tried a lot!'
  },
  {
    id: 2, name: 'Arjun Mehta', role: 'Software Engineer',
    rating: 5, avatar: 'AM',
    text: 'I work remotely from here almost every week. Great WiFi, cozy atmosphere, and the cold brew keeps me going. Staff is super warm and always remembers my order!'
  },
  {
    id: 3, name: 'Sneha Kulkarni', role: 'College Student',
    rating: 5, avatar: 'SK',
    text: 'Perfect study café. The avocado toast and caramel latte combo is everything. Reasonably priced and never too crowded on weekday mornings.'
  },
  {
    id: 4, name: 'Rahul Desai', role: 'Startup Founder',
    rating: 5, avatar: 'RD',
    text: 'Held three client meetings here. The ambience is professional yet relaxed. Clients always compliment the place. The cheesecake closed more deals than my pitch deck!'
  },
];

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', alt: 'Cozy café interior', span: 'col-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', alt: 'Latte art' },
  { id: 3, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', alt: 'Coffee beans' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80', alt: 'Freshly baked goods' },
  { id: 5, src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80', alt: 'Barista at work', span: 'col-span-2' },
  { id: 6, src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80', alt: 'Aesthetic cold coffee' },
];

export const whyUs = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'We source locally every morning — no frozen shortcuts, ever.' },
  { icon: '👨‍🍳', title: 'Skilled Baristas', desc: 'Our team trains at specialty coffee academies. Each cup is a craft.' },
  { icon: '🛋️', title: 'Cozy Ambience', desc: 'Warm lighting, curated playlists, and seats designed to linger.' },
  { icon: '📶', title: 'Free High-Speed WiFi', desc: 'Blazing fast internet so you can work, study, or just scroll.' },
  { icon: '⚡', title: 'Quick Service', desc: 'Your order out in under 5 minutes. We respect your time.' },
];
