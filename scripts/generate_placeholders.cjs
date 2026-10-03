const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Create clean SVG representation for each car photo
const makeCarSvg = (num, title, subtitle) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750" width="1200" height="750">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141714" />
      <stop offset="60%" stop-color="#1A201A" />
      <stop offset="100%" stop-color="#0E120E" />
    </linearGradient>
    <linearGradient id="carGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#DDE3E0" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="24" stdDeviation="20" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="1200" height="750" fill="url(#bgGrad)" />

  <!-- Mountain silhouettes of Meghalaya -->
  <path d="M0 500 Q 250 380, 500 460 T 1000 400 T 1200 440 L 1200 750 L 0 750 Z" fill="#243024" opacity="0.6" />
  <path d="M0 560 Q 300 480, 650 530 T 1200 500 L 1200 750 L 0 750 Z" fill="#1b241b" opacity="0.8" />

  <!-- Road surface -->
  <path d="M0 640 L 1200 640 L 1200 750 L 0 750 Z" fill="#111111" />
  <line x1="0" y1="695" x2="1200" y2="695" stroke="#BEFF4D" stroke-dasharray="30 25" stroke-width="4" opacity="0.8" />

  <!-- White Car Graphic with Drop Shadow -->
  <g filter="url(#shadow)" transform="translate(180, 240)">
    <!-- Car Body -->
    <path d="M 60 280 C 100 280 140 280 180 280 C 195 240 235 210 285 210 C 335 210 375 240 390 280 L 590 280 C 605 240 645 210 695 210 C 745 210 785 240 800 280 L 840 280 C 865 280 875 265 870 240 L 845 170 C 835 145 810 135 770 130 L 610 120 L 480 50 C 460 40 430 38 370 38 L 225 44 C 190 48 155 85 135 125 L 85 185 C 70 205 70 230 75 250 Z" fill="url(#carGrad)" stroke="#B0B9B4" stroke-width="3" />
    
    <!-- Cabin Windows -->
    <path d="M 235 58 L 360 54 C 420 54 445 56 462 65 L 585 125 L 375 125 L 220 125 C 198 100 215 75 235 58 Z" fill="#18222F" stroke="#2D3B4E" stroke-width="3" />
    <path d="M 390 60 L 390 125 L 590 125 L 485 70 C 455 64 420 62 390 60 Z" fill="#0F172A" />

    <!-- Headlights & Accents -->
    <polygon points="830,175 860,195 835,205" fill="#BEFF4D" />
    <polygon points="85,190 105,200 90,210" fill="#EF4444" />
    <line x1="375" y1="58" x2="375" y2="275" stroke="#CBD5E1" stroke-width="3" />
    <line x1="580" y1="125" x2="580" y2="275" stroke="#CBD5E1" strokeWidth="3" />

    <!-- Wheels -->
    <circle cx="285" cy="280" r="58" fill="#18181B" stroke="#A1A1AA" stroke-width="8" />
    <circle cx="285" cy="280" r="28" fill="#3F3F46" />
    <circle cx="695" cy="280" r="58" fill="#18181B" stroke="#A1A1AA" stroke-width="8" />
    <circle cx="695" cy="280" r="28" fill="#3F3F46" />
  </g>

  <!-- Card Overlay Brand Badge -->
  <rect x="60" y="60" width="340" height="46" rx="23" fill="#111111" fill-opacity="0.8" stroke="#333333" stroke-width="1.5" />
  <circle cx="85" cy="83" r="6" fill="#BEFF4D" />
  <text x="105" y="88" fill="#BEFF4D" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="16">ON TIME TAXI SERVICE</text>

  <!-- Photo Number & Info -->
  <text x="1140" y="90" text-anchor="end" fill="#BEFF4D" font-family="'Plus Jakarta Sans', monospace" font-size="16" font-weight="700">PHOTO 0${num} / 04</text>
  
  <rect x="60" y="630" width="1080" height="70" rx="16" fill="#111111" fill-opacity="0.75" />
  <text x="90" y="672" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="22">${title}</text>
  <text x="1110" y="672" text-anchor="end" fill="#BEFF4D" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="20">Rs 5,000 / day</text>
</svg>
`;

const photos = [
  { num: 1, title: 'Clean & Comfortable White Vehicle', subtitle: 'Exterior front view' },
  { num: 2, title: 'Mountain Road Ready Profile', subtitle: 'Smooth rides across Meghalaya' },
  { num: 3, title: 'Spotless Passenger Cabin', subtitle: 'Well-maintained, peaceful interior' },
  { num: 4, title: 'Scenic Routes Across Meghalaya', subtitle: 'Shillong, Sohra, Dawki & Mawlynnong' },
];

photos.forEach(p => {
  const svg = makeCarSvg(p.num, p.title, p.subtitle);
  fs.writeFileSync(path.join(dir, `car-${p.num}.svg`), svg.trim());
  // Also write as fallback .jpg with SVG markup (browsers and modern web servers render it or fallback will activate)
  fs.writeFileSync(path.join(dir, `car-${p.num}.jpg`), svg.trim());
});

console.log('Generated car placeholder assets in public/images');
