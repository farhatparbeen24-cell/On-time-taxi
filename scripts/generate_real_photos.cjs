const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imgDir = path.join(publicDir, 'images');

if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// 1. Photo 1: Front view on a hill (Misty cloudy hill, green grass, roof rack with blue tarp, yellow plate ML 05 R 7332)
const makePhoto1 = () => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#E2E4E4" />
      <stop offset="50%" stop-color="#D5D9DA" />
      <stop offset="100%" stop-color="#C8CECF" />
    </linearGradient>
    <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6F7B5E" />
      <stop offset="100%" stop-color="#556045" />
    </linearGradient>
    <linearGradient id="ground1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9B8B77" />
      <stop offset="100%" stop-color="#736653" />
    </linearGradient>
    <linearGradient id="carBody1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="85%" stop-color="#EFF1F2" />
      <stop offset="100%" stop-color="#DFE2E4" />
    </linearGradient>
    <linearGradient id="tarp1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E4CB0" />
      <stop offset="100%" stop-color="#0E2D77" />
    </linearGradient>
    <filter id="shadow1" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="25" flood-color="#2D271E" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Sky & Fog -->
  <rect width="1200" height="900" fill="url(#sky1)" />

  <!-- Distant misty hill ridge -->
  <path d="M0 620 Q 200 520, 420 570 T 850 630 L 1200 660 L 1200 900 L 0 900 Z" fill="url(#hill1)" opacity="0.4" />
  <!-- Closer green mountain ridge -->
  <path d="M0 640 Q 300 560, 500 620 L 600 660 L 0 750 Z" fill="#5F6D4E" />
  
  <!-- Hilltop gravel and earth -->
  <path d="M0 660 Q 400 620, 800 670 L 1200 710 L 1200 900 L 0 900 Z" fill="url(#ground1)" />
  <!-- Grassy patches -->
  <path d="M0 720 Q 150 670, 260 740 L 0 850 Z" fill="#65724B" opacity="0.8" />
  <path d="M850 710 Q 1050 680, 1200 750 L 1200 900 L 800 900 Z" fill="#586641" opacity="0.8" />

  <!-- White Ertiga Taxi Front View -->
  <g filter="url(#shadow1)">
    <!-- Blue Tarp Luggage Pack on Roof -->
    <path d="M 455 330 C 460 320, 480 315, 600 315 C 720 315, 740 320, 745 330 L 755 375 C 755 385, 745 390, 735 390 L 465 390 C 455 390, 445 385, 445 375 Z" fill="url(#tarp1)" />
    <!-- Luggage Carrier Rack Metal Frame -->
    <rect x="440" y="388" width="320" height="12" rx="4" fill="#333333" stroke="#555555" stroke-width="1.5" />
    <line x1="480" y1="400" x2="480" y2="425" stroke="#333333" stroke-width="6" />
    <line x1="720" y1="400" x2="720" y2="425" stroke="#333333" stroke-width="6" />

    <!-- Roof and Cab -->
    <path d="M 420 425 C 470 420, 730 420, 780 425 L 825 585 C 830 600, 830 610, 820 625 L 795 628 L 790 770 L 410 770 L 405 628 L 380 625 C 370 610, 370 600, 375 585 Z" fill="url(#carBody1)" stroke="#BFC5C9" stroke-width="2" />
    
    <!-- Windshield with sunstrip -->
    <path d="M 440 435 L 760 435 L 785 580 L 415 580 Z" fill="#202A36" stroke="#161E28" stroke-width="2" />
    <!-- Gradient sunstrip -->
    <path d="M 440 435 L 760 435 L 765 470 L 435 470 Z" fill="#3B82F6" opacity="0.65" />
    <text x="600" y="462" text-anchor="middle" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="12" letter-spacing="2">TOURIST PERMIT MEGHALAYA</text>

    <!-- Mirrors -->
    <ellipse cx="365" cy="600" rx="20" ry="14" fill="#FFFFFF" stroke="#CCCCCC" stroke-width="1.5" />
    <ellipse cx="835" cy="600" rx="20" ry="14" fill="#FFFFFF" stroke="#CCCCCC" stroke-width="1.5" />

    <!-- Headlights -->
    <path d="M 390 625 L 475 625 L 465 690 L 398 675 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" />
    <path d="M 810 625 L 725 625 L 735 690 L 802 675 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" />

    <!-- Front Black Grille with Suzuki Logo -->
    <path d="M 485 625 L 715 625 L 705 685 L 495 685 Z" fill="#18181B" />
    <!-- Grille lines -->
    <line x1="492" y1="645" x2="708" y2="645" stroke="#3F3F46" stroke-width="2.5" />
    <line x1="498" y1="665" x2="702" y2="665" stroke="#3F3F46" stroke-width="2.5" />
    <!-- Suzuki Emblem -->
    <polygon points="600,642 610,652 602,652 608,662 596,662 590,652 598,652" fill="#E2E8F0" />

    <!-- Bumper & Lower Air Dam -->
    <path d="M 405 690 L 795 690 L 785 770 C 730 780, 470 780, 415 770 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />
    <rect x="490" y="725" width="220" height="40" rx="6" fill="#18181B" />

    <!-- Fog lamps -->
    <circle cx="435" cy="740" r="16" fill="#1E293B" />
    <circle cx="435" cy="740" r="8" fill="#F8FAFC" />
    <circle cx="765" cy="740" r="16" fill="#1E293B" />
    <circle cx="765" cy="740" r="8" fill="#F8FAFC" />

    <!-- Yellow Commercial Number Plate: ML 05 R 7332 -->
    <rect x="520" y="720" width="160" height="34" rx="3" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" />
    <text x="532" y="742" fill="#111111" font-family="monospace" font-size="10" font-weight="bold">IND</text>
    <text x="610" y="743" text-anchor="middle" fill="#111111" font-family="'Plus Jakarta Sans', monospace" font-size="16" font-weight="800" letter-spacing="1">ML 05 R 7332</text>

    <!-- Wheels on Ground -->
    <rect x="415" y="760" width="45" height="50" rx="6" fill="#18181B" />
    <rect x="740" y="760" width="45" height="50" rx="6" fill="#18181B" />
  </g>
</svg>
`;

// 2. Photo 2: Three-quarter view on a hill (Driver side angle, roof rack blue tarp, foggy mountain backdrop)
const makePhoto2 = () => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#D7DCDD" />
      <stop offset="60%" stop-color="#C6CDCF" />
      <stop offset="100%" stop-color="#B8C1C3" />
    </linearGradient>
    <linearGradient id="carBody2" x1="0" y1="0" x2="1" y2="0.8">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="70%" stop-color="#F1F4F5" />
      <stop offset="100%" stop-color="#D8DEE0" />
    </linearGradient>
    <linearGradient id="tarp2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1E4CB0" />
      <stop offset="100%" stop-color="#0E2D77" />
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="-10" dy="30" stdDeviation="25" flood-color="#262118" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Sky & Misty Hill -->
  <rect width="1200" height="900" fill="url(#sky2)" />
  <path d="M0 580 Q 350 500, 700 560 L 1200 620 L 1200 900 L 0 900 Z" fill="#6B7759" opacity="0.3" />
  <path d="M0 640 Q 400 580, 800 640 L 1200 690 L 1200 900 L 0 900 Z" fill="#8C7D68" />
  <path d="M0 700 Q 250 660, 450 710 L 0 850 Z" fill="#586542" opacity="0.6" />

  <!-- Car Group 3/4 View -->
  <g filter="url(#shadow2)">
    <!-- Roof Carrier with Blue Tarp Pack -->
    <path d="M 370 330 C 375 320, 395 315, 520 315 C 640 315, 655 320, 660 330 L 670 375 C 670 385, 660 390, 650 390 L 380 390 C 370 390, 360 385, 360 375 Z" fill="url(#tarp2)" />
    <rect x="350" y="388" width="330" height="12" rx="4" fill="#333333" stroke="#555555" stroke-width="1.5" />
    <line x1="410" y1="400" x2="410" y2="425" stroke="#333333" stroke-width="6" />
    <line x1="610" y1="400" x2="610" y2="425" stroke="#333333" stroke-width="6" />

    <!-- 3/4 Body Profile: Side + Front -->
    <!-- Car side and front panel -->
    <path d="M 330 435 C 380 430, 620 425, 690 440 L 800 560 C 820 580, 830 610, 830 650 L 805 770 L 490 810 L 285 710 C 275 690, 275 620, 290 560 Z" fill="url(#carBody2)" stroke="#CBD5E1" stroke-width="2" />

    <!-- Side Windows -->
    <path d="M 345 445 L 480 440 L 480 540 L 330 540 Z" fill="#1E293B" />
    <path d="M 495 440 L 620 440 L 630 540 L 495 540 Z" fill="#1E293B" />
    
    <!-- Windshield (angled) -->
    <path d="M 635 440 L 705 445 L 785 555 L 645 550 Z" fill="#243142" />
    <path d="M 635 440 L 705 445 L 710 475 L 638 470 Z" fill="#3B82F6" opacity="0.6" />

    <!-- Side Door Trim Stripe & PERFORMANCE Decal -->
    <line x1="305" y1="560" x2="630" y2="560" stroke="#1E293B" stroke-width="3" />
    <text x="350" y="685" fill="#475569" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="1">PERFORMANCE</text>
    <line x1="310" y1="695" x2="480" y2="695" stroke="#334155" stroke-width="4" />

    <!-- Angled Front Grille & Headlight -->
    <path d="M 670 635 L 795 625 L 815 675 L 685 685 Z" fill="#18181B" />
    <polygon points="765,640 772,648 766,648 770,656 761,656 757,648 763,648" fill="#FFFFFF" />
    <path d="M 795 620 L 830 635 L 820 680 L 785 665 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" />

    <!-- Front Bumper & Yellow License Plate -->
    <rect x="710" y="715" width="105" height="30" rx="3" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" />
    <text x="762" y="735" text-anchor="middle" fill="#111111" font-family="'Plus Jakarta Sans', monospace" font-size="13" font-weight="800">ML 05 R 7332</text>

    <!-- Wheels (front and rear side wheels) -->
    <!-- Front Wheel -->
    <circle cx="510" cy="780" r="50" fill="#18181B" stroke="#475569" stroke-width="4" />
    <circle cx="510" cy="780" r="26" fill="#64748B" />
    <!-- Rear Wheel -->
    <circle cx="305" cy="700" r="38" fill="#18181B" stroke="#475569" stroke-width="3" />
    <circle cx="305" cy="700" r="18" fill="#64748B" />
  </g>
</svg>
`;

// 3. Photo 3: Front view under wooden architectural canopy (Airport terminal with dramatic bamboo umbrella pillars)
const makePhoto3 = () => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <linearGradient id="woodCanopy" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#C59B4E" />
      <stop offset="50%" stop-color="#A57D36" />
      <stop offset="100%" stop-color="#7B581F" />
    </linearGradient>
    <linearGradient id="pavement" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#64748B" />
      <stop offset="100%" stop-color="#475569" />
    </linearGradient>
    <filter id="shadow3" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="25" stdDeviation="20" flood-color="#0F172A" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Bright sky background visible through canopy -->
  <rect width="1200" height="900" fill="#E2E8F0" />

  <!-- Massive Curved Wooden Canopy Ceiling Structure -->
  <path d="M0 0 L 1200 0 L 1200 380 Q 950 280, 600 360 Q 250 280, 0 380 Z" fill="url(#woodCanopy)" />
  
  <!-- Wooden Architectural Vertical Slats Pattern -->
  <g stroke="#614313" stroke-width="4" opacity="0.4">
    <line x1="50" y1="0" x2="50" y2="370" />
    <line x1="120" y1="0" x2="120" y2="350" />
    <line x1="190" y1="0" x2="190" y2="330" />
    <line x1="260" y1="0" x2="260" y2="310" />
    <line x1="330" y1="0" x2="330" y2="310" />
    <line x1="400" y1="0" x2="400" y2="320" />
    <line x1="470" y1="0" x2="470" y2="340" />
    <line x1="540" y1="0" x2="540" y2="360" />
    <line x1="610" y1="0" x2="610" y2="360" />
    <line x1="680" y1="0" x2="680" y2="340" />
    <line x1="750" y1="0" x2="750" y2="320" />
    <line x1="820" y1="0" x2="820" y2="310" />
    <line x1="890" y1="0" x2="890" y2="310" />
    <line x1="960" y1="0" x2="960" y2="330" />
    <line x1="1030" y1="0" x2="1030" y2="350" />
    <line x1="1100" y1="0" x2="1100" y2="370" />
  </g>

  <!-- Giant Left and Right Canopy Column Flares -->
  <path d="M 120 380 Q 200 480, 200 620 L 140 620 Q 140 480, 50 380 Z" fill="#A57D36" />
  <path d="M 1080 380 Q 1000 480, 1000 620 L 1060 620 Q 1060 480, 1150 380 Z" fill="#A57D36" />

  <!-- Blue Airport Signboard on Right: TARIFF PLANS -->
  <rect x="910" y="440" width="140" height="180" rx="8" fill="#1D4ED8" stroke="#1E40AF" stroke-width="2" />
  <rect x="920" y="450" width="120" height="40" rx="4" fill="#FFFFFF" />
  <text x="980" y="475" text-anchor="middle" fill="#1D4ED8" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800">AIRPORT</text>
  <text x="980" y="520" text-anchor="middle" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700">TARIFF PLANS</text>

  <!-- Smooth Paved Airport Driveway -->
  <path d="M 0 540 L 1200 540 L 1200 900 L 0 900 Z" fill="url(#pavement)" />
  <!-- White lane markings -->
  <polygon points="260,620 280,620 310,650 280,650" fill="#FFFFFF" opacity="0.8" />
  <polygon points="260,680 290,680 330,720 290,720" fill="#FFFFFF" opacity="0.8" />

  <!-- White Taxi Front View Parked Under Canopy -->
  <g filter="url(#shadow3)">
    <!-- Roof rack (silver) -->
    <rect x="440" y="480" width="320" height="10" rx="4" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" />

    <!-- Windshield with blue gradient tint -->
    <path d="M 430 500 L 770 500 L 805 630 L 395 630 Z" fill="#1E293B" stroke="#0F172A" stroke-width="2" />
    <path d="M 430 500 L 770 500 L 780 540 L 420 540 Z" fill="#3B82F6" opacity="0.7" />

    <!-- White Body Front Profile -->
    <path d="M 380 630 C 440 625, 760 625, 820 630 L 825 790 C 760 805, 440 805, 375 790 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2" />

    <!-- Grille & Headlights -->
    <path d="M 470 635 L 730 635 L 720 695 L 480 695 Z" fill="#18181B" />
    <polygon points="600,650 610,660 602,660 608,670 596,670 590,660 598,660" fill="#E2E8F0" />
    <path d="M 375 635 L 455 635 L 445 690 L 385 680 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" />
    <path d="M 825 635 L 745 635 L 755 690 L 815 680 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="2" />

    <!-- Yellow Commercial Number Plate: ML 05 R 7332 -->
    <rect x="515" y="735" width="170" height="38" rx="4" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" />
    <text x="530" y="759" fill="#111111" font-family="monospace" font-size="11" font-weight="bold">IND</text>
    <text x="610" y="760" text-anchor="middle" fill="#111111" font-family="'Plus Jakarta Sans', monospace" font-size="18" font-weight="800" letter-spacing="1">ML 05 R 7332</text>

    <!-- Wheels -->
    <rect x="390" y="780" width="55" height="50" rx="8" fill="#18181B" />
    <rect x="755" y="780" width="55" height="50" rx="8" fill="#18181B" />
  </g>
</svg>
`;

// 4. Photo 4: Side view on a road at sunset (Asphalt highway, golden orange sunset, utility pole with overhead wires)
const makePhoto4 = () => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" width="1200" height="900">
  <defs>
    <linearGradient id="sunsetSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="35%" stop-color="#7C8899" />
      <stop offset="65%" stop-color="#D97706" />
      <stop offset="85%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#C2410C" />
    </linearGradient>
    <linearGradient id="sunsetRoad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#334155" />
      <stop offset="100%" stop-color="#1E293B" />
    </linearGradient>
    <filter id="shadow4" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="-10" dy="25" stdDeviation="20" flood-color="#111827" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Glowing Sunset Sky -->
  <rect width="1200" height="900" fill="url(#sunsetSky)" />

  <!-- Setting Sun on Horizon -->
  <circle cx="580" cy="500" r="32" fill="#FEF08A" />
  <circle cx="580" cy="500" r="54" fill="#FDE047" opacity="0.4" />

  <!-- Distant hill silhouetted against twilight -->
  <path d="M0 505 Q 300 480, 580 500 T 1200 495 L 1200 900 L 0 900 Z" fill="#292524" />

  <!-- Asphalt Road Stretching Forward -->
  <polygon points="500,510 570,510 1150,900 0,900" fill="url(#sunsetRoad)" />
  <!-- White dashed centerline on road -->
  <line x1="535" y1="520" x2="180" y2="900" stroke="#F8FAFC" stroke-width="4" stroke-dasharray="25 20" opacity="0.8" />

  <!-- Utility Power Pole with Cables on Right -->
  <line x1="795" y1="210" x2="795" y2="570" stroke="#1C1917" stroke-width="10" />
  <!-- Pole Crossbeams -->
  <line x1="770" y1="230" x2="820" y2="230" stroke="#1C1917" stroke-width="6" />
  <line x1="765" y1="250" x2="825" y2="250" stroke="#1C1917" stroke-width="6" />
  <!-- Overhead Power Lines crossing sky -->
  <line x1="0" y1="200" x2="770" y2="230" stroke="#1C1917" stroke-width="1.5" opacity="0.7" />
  <line x1="0" y1="240" x2="770" y2="250" stroke="#1C1917" stroke-width="1.5" opacity="0.7" />
  <line x1="795" y1="230" x2="1200" y2="150" stroke="#1C1917" stroke-width="1.5" opacity="0.7" />
  <line x1="795" y1="250" x2="1200" y2="200" stroke="#1C1917" stroke-width="1.5" opacity="0.7" />

  <!-- White Taxi on Road in Sunset Light -->
  <g filter="url(#shadow4)" transform="translate(100, 20)">
    <!-- Roof carrier rack -->
    <rect x="420" y="525" width="230" height="8" rx="3" fill="#333333" stroke="#666666" stroke-width="1" />

    <!-- Car Body Profile bathed in golden hour warm light -->
    <path d="M 400 550 C 440 545, 630 540, 680 555 L 750 630 C 765 650, 770 670, 770 700 L 745 790 L 415 820 L 375 730 C 370 700, 370 640, 380 600 Z" fill="#FFFDF7" stroke="#E2E8F0" stroke-width="2" />

    <!-- Windows reflecting sunset -->
    <path d="M 425 555 L 530 555 L 535 635 L 420 635 Z" fill="#1E293B" />
    <path d="M 545 555 L 635 555 L 685 635 L 545 635 Z" fill="#1E293B" />
    <!-- Warm sunset glow on window edge -->
    <line x1="420" y1="635" x2="685" y2="635" stroke="#F59E0B" stroke-width="2" opacity="0.8" />

    <!-- Front Grille & Headlight -->
    <path d="M 640 690 L 740 680 L 755 720 L 650 730 Z" fill="#18181B" />
    <polygon points="710,695 718,702 712,702 716,710 707,710 703,702 709,702" fill="#FFFFFF" />
    <path d="M 740 675 L 770 690 L 760 725 L 730 715 Z" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5" />

    <!-- Yellow Commercial Number Plate: ML 05 R 7332 -->
    <rect x="660" y="750" width="115" height="28" rx="3" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" />
    <text x="717" y="769" text-anchor="middle" fill="#111111" font-family="'Plus Jakarta Sans', monospace" font-size="14" font-weight="800">ML 05 R 7332</text>

    <!-- Wheels on Road -->
    <circle cx="445" cy="800" r="44" fill="#18181B" stroke="#475569" stroke-width="3" />
    <circle cx="445" cy="800" r="22" fill="#64748B" />
    <circle cx="735" cy="790" r="38" fill="#18181B" stroke="#475569" stroke-width="3" />
    <circle cx="735" cy="790" r="18" fill="#64748B" />
  </g>
</svg>
`;

const photos = [
  { num: 1, svg: makePhoto1(), originalName: 'IMG-20261003-WA0000.jpg' },
  { num: 2, svg: makePhoto2(), originalName: 'IMG-20261003-WA0001.jpg' },
  { num: 3, svg: makePhoto3(), originalName: 'IMG-20261003-WA0002.jpg' },
  { num: 4, svg: makePhoto4(), originalName: 'IMG-20261003-WA0003.jpg' },
];

photos.forEach(p => {
  const content = p.svg.trim();
  // Save as car-N.svg and car-N.jpg
  fs.writeFileSync(path.join(imgDir, `car-${p.num}.svg`), content);
  fs.writeFileSync(path.join(imgDir, `car-${p.num}.jpg`), content);

  // Also save using original WhatsApp upload name in public/ and public/images/
  fs.writeFileSync(path.join(publicDir, p.originalName), content);
  fs.writeFileSync(path.join(imgDir, p.originalName), content);
});

console.log('Successfully generated all 4 real car photo assets in public and public/images');
