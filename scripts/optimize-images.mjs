// Converts every PNG/JPG under public/images to resized WebP and deletes the original.
// Usage: node scripts/optimize-images.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'public/images';

// Max dimensions per image role (never upscales)
function limitsFor(file) {
  const name = path.basename(file).toLowerCase();
  if (file.includes('customer-logo')) return { width: 400, height: 200, quality: 85 };
  if (/logo/.test(name)) return { width: 800, height: 400, quality: 85 };
  if (/hero|banner|port|fort|expertise_/.test(name)) return { width: 1920, quality: 78 };
  return { width: 1400, quality: 78 };
}

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );

let before = 0;
let after = 0;

for (const file of walk(ROOT).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
  const { width, height, quality } = limitsFor(file);
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');
  await sharp(file)
    .resize({ width, height, fit: 'inside', withoutEnlargement: true })
    .webp({ quality, alphaQuality: 90, effort: 6, smartSubsample: true })
    .toFile(out);
  const a = fs.statSync(file).size;
  const b = fs.statSync(out).size;
  before += a;
  after += b;
  fs.unlinkSync(file);
  console.log(`${(a / 1024).toFixed(0).padStart(6)}KB -> ${(b / 1024).toFixed(0).padStart(5)}KB  ${out}`);
}

console.log(`\nTotal: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`);
