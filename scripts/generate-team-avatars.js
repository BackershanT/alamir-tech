const fs = require('fs');
const path = require('path');

const teamDir = path.join(__dirname, '..', 'public', 'images', 'team');
if (!fs.existsSync(teamDir)) fs.mkdirSync(teamDir, { recursive: true });

// 1. Dubai: Farooq Malik (Lead Systems Architect)
const dubaiSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgD" x1="0" y1="0" x2="100" y2="100">
      <stop stop-color="#0f172a"/>
      <stop offset="1" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="skinD" x1="35" y1="25" x2="65" y2="65">
      <stop stop-color="#e0a97a"/>
      <stop offset="1" stop-color="#c68652"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bgD)"/>
  <rect x="44" y="55" width="12" height="16" fill="#c68652" rx="3"/>
  <ellipse cx="50" cy="42" rx="18" ry="21" fill="url(#skinD)"/>
  <path d="M32 38 C32 24 68 24 68 38 C68 28 62 20 50 20 C38 20 32 28 32 38 Z" fill="#1c1917"/>
  <path d="M37 46 C37 62 63 62 63 46 C63 58 56 64 50 64 C44 64 37 58 37 46 Z" fill="#1c1917"/>
  <path d="M18 100 C18 78 33 68 42 68 L58 68 C67 68 82 78 82 100 Z" fill="#091361"/>
  <path d="M42 68 L50 88 L58 68 Z" fill="#ffffff"/>
  <path d="M48 70 L52 70 L54 94 L50 98 L46 94 Z" fill="#0599D6"/>
</svg>`;

// 2. London: Emma Reed (VP Engineering)
const londonSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgL" x1="0" y1="0" x2="100" y2="100">
      <stop stop-color="#1e1b4b"/>
      <stop offset="1" stop-color="#312e81"/>
    </linearGradient>
    <linearGradient id="skinL" x1="35" y1="25" x2="65" y2="65">
      <stop stop-color="#fed7aa"/>
      <stop offset="1" stop-color="#fba872"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bgL)"/>
  <path d="M25 40 C25 22 75 22 75 40 C75 62 70 75 68 80 L32 80 C30 75 25 62 25 40 Z" fill="#7c2d12"/>
  <rect x="45" y="55" width="10" height="15" fill="#fba872" rx="3"/>
  <ellipse cx="50" cy="43" rx="16" ry="19" fill="url(#skinL)"/>
  <path d="M28 36 C34 22 66 22 72 36 C68 28 58 24 50 24 C42 24 32 28 28 36 Z" fill="#9a3412"/>
  <rect x="36" y="38" width="11" height="8" rx="2" stroke="#E60085" stroke-width="1.5" fill="none"/>
  <rect x="53" y="38" width="11" height="8" rx="2" stroke="#E60085" stroke-width="1.5" fill="none"/>
  <line x1="47" y1="42" x2="53" y2="42" stroke="#E60085" stroke-width="1.5"/>
  <path d="M20 100 C20 78 34 70 43 70 L57 70 C66 70 80 78 80 100 Z" fill="#4c1d95"/>
  <path d="M43 70 L50 86 L57 70 Z" fill="#ffffff"/>
</svg>`;

// 3. San Francisco: Alex Rivera (Principal Cloud Architect)
const sfSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgSF" x1="0" y1="0" x2="100" y2="100">
      <stop stop-color="#082f49"/>
      <stop offset="1" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="skinSF" x1="35" y1="25" x2="65" y2="65">
      <stop stop-color="#fcd34d"/>
      <stop offset="1" stop-color="#f59e0b"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bgSF)"/>
  <rect x="44" y="55" width="12" height="16" fill="#f59e0b" rx="3"/>
  <ellipse cx="50" cy="42" rx="17" ry="20" fill="url(#skinSF)"/>
  <path d="M30 35 C32 18 68 18 70 35 C68 26 60 22 50 22 C40 22 32 26 30 35 Z" fill="#292524"/>
  <path d="M38 48 C38 60 62 60 62 48 C62 57 56 61 50 61 C44 61 38 57 38 48 Z" fill="#292524" opacity="0.4"/>
  <path d="M18 100 C18 78 32 68 42 68 L58 68 C68 68 82 78 82 100 Z" fill="#1e293b"/>
  <path d="M42 68 C42 80 58 80 58 68 Z" fill="#0599D6"/>
</svg>`;

// 4. Riyadh: Tariq Al-Mansoor (Enterprise Delivery Lead)
const riyadhSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgR" x1="0" y1="0" x2="100" y2="100">
      <stop stop-color="#064e3b"/>
      <stop offset="1" stop-color="#065f46"/>
    </linearGradient>
    <linearGradient id="skinR" x1="35" y1="25" x2="65" y2="65">
      <stop stop-color="#e0a97a"/>
      <stop offset="1" stop-color="#b45309"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bgR)"/>
  <rect x="44" y="55" width="12" height="16" fill="#b45309" rx="3"/>
  <ellipse cx="50" cy="42" rx="17" ry="20" fill="url(#skinR)"/>
  <path d="M32 36 C32 22 68 22 68 36 C68 26 60 20 50 20 C40 20 32 26 32 36 Z" fill="#171717"/>
  <path d="M36 46 C36 62 64 62 64 46 C64 58 56 64 50 64 C44 64 36 58 36 46 Z" fill="#171717"/>
  <path d="M18 100 C18 78 33 68 42 68 L58 68 C67 68 82 78 82 100 Z" fill="#18181b"/>
  <path d="M42 68 L50 88 L58 68 Z" fill="#ffffff"/>
  <path d="M48 70 L52 70 L54 94 L50 98 L46 94 Z" fill="#10b981"/>
</svg>`;

// 5. Singapore: Mei-Ling Chen (Head of APAC Solutions)
const singaporeSvg = `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgS" x1="0" y1="0" x2="100" y2="100">
      <stop stop-color="#3b0764"/>
      <stop offset="1" stop-color="#6b21a8"/>
    </linearGradient>
    <linearGradient id="skinS" x1="35" y1="25" x2="65" y2="65">
      <stop stop-color="#fef08a"/>
      <stop offset="1" stop-color="#fed7aa"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#bgS)"/>
  <path d="M26 36 C26 20 74 20 74 36 C74 58 72 70 70 72 L30 72 C28 70 26 58 26 36 Z" fill="#09090b"/>
  <rect x="45" y="55" width="10" height="15" fill="#fed7aa" rx="3"/>
  <ellipse cx="50" cy="43" rx="16" ry="19" fill="url(#skinS)"/>
  <path d="M26 36 C32 24 68 24 74 36 C68 28 60 25 50 25 C40 25 32 28 26 36 Z" fill="#18181b"/>
  <path d="M25 40 L30 65 L36 50 Z" fill="#18181b"/>
  <path d="M75 40 L70 65 L64 50 Z" fill="#18181b"/>
  <path d="M20 100 C20 78 34 70 43 70 L57 70 C66 70 80 78 80 100 Z" fill="#0f766e"/>
  <path d="M43 70 L50 86 L57 70 Z" fill="#ffffff"/>
</svg>`;

fs.writeFileSync(path.join(teamDir, 'dubai.svg'), dubaiSvg, 'utf-8');
fs.writeFileSync(path.join(teamDir, 'london.svg'), londonSvg, 'utf-8');
fs.writeFileSync(path.join(teamDir, 'san-francisco.svg'), sfSvg, 'utf-8');
fs.writeFileSync(path.join(teamDir, 'riyadh.svg'), riyadhSvg, 'utf-8');
fs.writeFileSync(path.join(teamDir, 'singapore.svg'), singaporeSvg, 'utf-8');

console.log('Successfully written 5 team avatar SVGs to public/images/team/');
