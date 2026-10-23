// Validate the reviewed, committed PNG; normal builds never rasterize system fonts.
// After an intentional SVG edit, explicitly render/review the PNG and update its hash.
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const png = await readFile('public/images/social.png');
const expected = 'f9c3ff5692a9591faf1d23007b647afd754ddf337b8b26e9e3d5548ff8822897';
if (png.subarray(0, 8).toString('hex') !== '89504e470d0a1a0a' || png.readUInt32BE(16) !== 1200 || png.readUInt32BE(20) !== 630 || createHash('sha256').update(png).digest('hex') !== expected) {
  throw new Error('Social PNG differs from the reviewed 1200×630 artifact. Render and review it explicitly.');
}
console.log('Reviewed social PNG verified; bytes preserved.');
