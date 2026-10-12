// Generates placeholder artwork (SVG) and audio (WAV) for all 20 episodes.
// Usage: node scripts/generate-assets.mjs
import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const artworkDir = join(root, "public", "artwork");
const audioDir = join(root, "public", "audio");
mkdirSync(artworkDir, { recursive: true });
mkdirSync(audioDir, { recursive: true });

const accents = ["#e8c15a", "#c9a227", "#d9b382", "#b89778", "#e0cf9e"];

const titles = [
  "The Art of Starting Over",
  "Small Habits, Big Signals",
  "Designing for Silence",
  "Cities at Night",
  "The Slow Web",
  "Talking to Strangers",
  "Craft Over Content",
  "How Ideas Travel",
  "The Margin of Error",
  "Rituals of Deep Work",
  "Analog Dreams",
  "Stories We Tell Ourselves",
  "On Quitting Well",
  "Building Things That Last",
  "The Power of Boredom",
  "Maps and Memory",
  "Learning to Listen",
  "The Future of Small Teams",
  "Money, Meaning, Work",
  "A Year of Making Things",
];

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, "0");
  const accent = accents[(i - 1) % accents.length];
  const title = titles[i - 1].toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" role="img" aria-label="Episode ${i} artwork">
  <defs>
    <radialGradient id="g" cx="30%" cy="25%" r="90%">
      <stop offset="0%" stop-color="#23242e"/>
      <stop offset="100%" stop-color="#0e0f13"/>
    </radialGradient>
  </defs>
  <rect width="600" height="600" fill="url(#g)"/>
  <circle cx="480" cy="120" r="160" fill="${accent}" opacity="0.14"/>
  <circle cx="90" cy="520" r="120" fill="${accent}" opacity="0.10"/>
  <g stroke="${accent}" stroke-width="4" stroke-linecap="round" opacity="0.85">
    <line x1="60" y1="440" x2="60" y2="470"/>
    <line x1="80" y1="425" x2="80" y2="485"/>
    <line x1="100" y1="410" x2="100" y2="500"/>
    <line x1="120" y1="430" x2="120" y2="480"/>
    <line x1="140" y1="415" x2="140" y2="495"/>
    <line x1="160" y1="438" x2="160" y2="472"/>
    <line x1="180" y1="420" x2="180" y2="490"/>
  </g>
  <text x="60" y="150" font-family="Georgia, serif" font-size="150" fill="${accent}">${num}</text>
  <text x="62" y="195" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="6" fill="#a9a597">MI PODCAST</text>
  <text x="60" y="560" font-family="Helvetica, Arial, sans-serif" font-size="26" letter-spacing="3" fill="#f2efe8">${title}</text>
</svg>
`;
  writeFileSync(join(artworkDir, `ep-${num}.svg`), svg, "utf8");
}

// 8-bit unsigned mono PCM WAV, 8000 Hz, 1.5s soft tone
const rate = 8000;
const seconds = 1.5;
const samples = Math.round(rate * seconds);
const dataSize = samples;
const buf = Buffer.alloc(44 + dataSize);
buf.write("RIFF", 0);
buf.writeUInt32LE(36 + dataSize, 4);
buf.write("WAVE", 8);
buf.write("fmt ", 12);
buf.writeUInt32LE(16, 16);
buf.writeUInt16LE(1, 20); // PCM
buf.writeUInt16LE(1, 22); // mono
buf.writeUInt32LE(rate, 24);
buf.writeUInt32LE(rate, 28); // byte rate
buf.writeUInt16LE(1, 32); // block align
buf.writeUInt16LE(8, 34); // bits per sample
buf.write("data", 36);
buf.writeUInt32LE(dataSize, 40);
for (let i = 0; i < samples; i++) {
  const t = i / rate;
  const envelope = Math.min(1, t * 4, (seconds - t) * 4);
  const freq = 220 + (i % 40) * 2;
  const value = 128 + Math.round(40 * envelope * Math.sin(2 * Math.PI * freq * t));
  buf[44 + i] = value;
}

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, "0");
  writeFileSync(join(audioDir, `ep-${num}.wav`), buf);
}

console.log("Generated 20 artworks and 20 audio files.");
