/** Top-left pine + lights + baubles */
export const CORNER_TL_SVG = `
<svg class="ab-xmas-corner-svg" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="ab-bauble-gold" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffe08a"/>
      <stop offset="55%" stop-color="#d4a017"/>
      <stop offset="100%" stop-color="#8a6a10"/>
    </radialGradient>
    <radialGradient id="ab-bauble-silver" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e8e8e8"/>
      <stop offset="100%" stop-color="#9aa0a6"/>
    </radialGradient>
  </defs>
  <!-- pine needles -->
  <g fill="#1a5c2e" opacity="0.95">
    <ellipse cx="20" cy="40" rx="55" ry="18" transform="rotate(-25 20 40)"/>
    <ellipse cx="50" cy="25" rx="60" ry="16" transform="rotate(-10 50 25)"/>
    <ellipse cx="30" cy="70" rx="50" ry="15" transform="rotate(-35 30 70)"/>
    <ellipse cx="70" cy="55" rx="55" ry="14" transform="rotate(-20 70 55)"/>
    <ellipse cx="15" cy="100" rx="45" ry="14" transform="rotate(-40 15 100)"/>
    <ellipse cx="55" cy="90" rx="48" ry="13" transform="rotate(-28 55 90)"/>
  </g>
  <g fill="#2d7a3e">
    <ellipse cx="40" cy="35" rx="40" ry="12" transform="rotate(-18 40 35)"/>
    <ellipse cx="65" cy="60" rx="42" ry="11" transform="rotate(-22 65 60)"/>
    <ellipse cx="25" cy="80" rx="38" ry="11" transform="rotate(-32 25 80)"/>
  </g>
  <!-- string lights wire -->
  <path d="M5 30 Q60 50 90 20 Q120 55 40 95" fill="none" stroke="#2a2a2a" stroke-width="1.5"/>
  <circle cx="25" cy="38" r="4" fill="#e53935"/>
  <circle cx="48" cy="42" r="4" fill="#fdd835"/>
  <circle cx="72" cy="28" r="4" fill="#43a047"/>
  <circle cx="95" cy="32" r="4" fill="#1e88e5"/>
  <circle cx="70" cy="55" r="4" fill="#e53935"/>
  <circle cx="50" cy="72" r="4" fill="#fdd835"/>
  <!-- hanging strings -->
  <line x1="110" y1="0" x2="110" y2="55" stroke="#c9a227" stroke-width="1.2"/>
  <line x1="155" y1="0" x2="155" y2="85" stroke="#c9a227" stroke-width="1.2"/>
  <!-- baubles -->
  <rect x="104" y="52" width="12" height="6" rx="1" fill="#c9a227"/>
  <circle cx="110" cy="78" r="22" fill="url(#ab-bauble-silver)"/>
  <path d="M98 70 l8 8 -4 2 -8-8z M118 68 l8 6 -3 3 -9-7z M105 88 l10 4 -2 4 -10-5z" fill="#c9a227" opacity="0.7"/>
  <rect x="149" y="82" width="12" height="6" rx="1" fill="#c9a227"/>
  <circle cx="155" cy="112" r="24" fill="url(#ab-bauble-gold)"/>
  <ellipse cx="148" cy="102" rx="6" ry="4" fill="#fff6c8" opacity="0.45"/>
</svg>
`.trim();

/** Bottom-right pine + lights + baubles */
export const CORNER_BR_SVG = `
<svg class="ab-xmas-corner-svg" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <radialGradient id="ab-bauble-gold-br" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffe08a"/>
      <stop offset="55%" stop-color="#d4a017"/>
      <stop offset="100%" stop-color="#8a6a10"/>
    </radialGradient>
    <radialGradient id="ab-bauble-silver-br" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e8e8e8"/>
      <stop offset="100%" stop-color="#9aa0a6"/>
    </radialGradient>
  </defs>
  <g transform="rotate(180 140 140)">
    <g fill="#1a5c2e" opacity="0.95">
      <ellipse cx="20" cy="40" rx="55" ry="18" transform="rotate(-25 20 40)"/>
      <ellipse cx="50" cy="25" rx="60" ry="16" transform="rotate(-10 50 25)"/>
      <ellipse cx="30" cy="70" rx="50" ry="15" transform="rotate(-35 30 70)"/>
      <ellipse cx="70" cy="55" rx="55" ry="14" transform="rotate(-20 70 55)"/>
      <ellipse cx="15" cy="100" rx="45" ry="14" transform="rotate(-40 15 100)"/>
      <ellipse cx="55" cy="90" rx="48" ry="13" transform="rotate(-28 55 90)"/>
    </g>
    <g fill="#2d7a3e">
      <ellipse cx="40" cy="35" rx="40" ry="12" transform="rotate(-18 40 35)"/>
      <ellipse cx="65" cy="60" rx="42" ry="11" transform="rotate(-22 65 60)"/>
      <ellipse cx="25" cy="80" rx="38" ry="11" transform="rotate(-32 25 80)"/>
    </g>
    <path d="M5 30 Q60 50 90 20 Q120 55 40 95" fill="none" stroke="#2a2a2a" stroke-width="1.5"/>
    <circle cx="25" cy="38" r="4" fill="#e53935"/>
    <circle cx="48" cy="42" r="4" fill="#fdd835"/>
    <circle cx="72" cy="28" r="4" fill="#43a047"/>
    <circle cx="95" cy="32" r="4" fill="#1e88e5"/>
    <circle cx="70" cy="55" r="4" fill="#e53935"/>
    <circle cx="50" cy="72" r="4" fill="#fdd835"/>
    <line x1="110" y1="0" x2="110" y2="55" stroke="#c9a227" stroke-width="1.2"/>
    <line x1="155" y1="0" x2="155" y2="85" stroke="#c9a227" stroke-width="1.2"/>
    <rect x="104" y="52" width="12" height="6" rx="1" fill="#c9a227"/>
    <circle cx="110" cy="78" r="22" fill="url(#ab-bauble-silver-br)"/>
    <path d="M98 70 l8 8 -4 2 -8-8z M118 68 l8 6 -3 3 -9-7z M105 88 l10 4 -2 4 -10-5z" fill="#c9a227" opacity="0.7"/>
    <rect x="149" y="82" width="12" height="6" rx="1" fill="#c9a227"/>
    <circle cx="155" cy="112" r="24" fill="url(#ab-bauble-gold-br)"/>
    <ellipse cx="148" cy="102" rx="6" ry="4" fill="#fff6c8" opacity="0.45"/>
  </g>
</svg>
`.trim();
