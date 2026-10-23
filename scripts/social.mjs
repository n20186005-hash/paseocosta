import {createRequire} from 'node:module';
const require=createRequire(import.meta.resolve('astro'));
const sharp=require('sharp');
await sharp('public/images/river-illustration.svg').resize(1200,630,{fit:'cover'}).png().toFile('public/images/social.png');
