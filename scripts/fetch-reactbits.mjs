// Downloads the React Bits components this site uses into src/components/reactbits/.
// Runs automatically before dev and build (see package.json). Source: https://reactbits.dev
import { mkdir, writeFile, access } from 'node:fs/promises';

const BASE = 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content';
const FILES = [
  'Backgrounds/Aurora/Aurora.jsx',
  'Backgrounds/Aurora/Aurora.css',
  'TextAnimations/BlurText/BlurText.jsx',
  'TextAnimations/CountUp/CountUp.jsx',
  'TextAnimations/GradientText/GradientText.jsx',
  'TextAnimations/GradientText/GradientText.css',
  'Components/SpotlightCard/SpotlightCard.jsx',
  'Components/SpotlightCard/SpotlightCard.css',
  'Animations/FadeContent/FadeContent.jsx'
];
const OUT = new URL('../src/components/reactbits/', import.meta.url);

await mkdir(OUT, { recursive: true });
for (const path of FILES) {
  const name = path.split('/').pop();
  const target = new URL(name, OUT);
  try {
    await access(target);
    continue; // already downloaded
  } catch {}
  const res = await fetch(`${BASE}/${path}`);
  if (!res.ok) throw new Error(`Could not download ${path}: ${res.status}`);
  await writeFile(target, await res.text());
  console.log(`fetched ${name}`);
}
