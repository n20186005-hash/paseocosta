import {sample} from './forecast.fixture.mjs';
import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';import path from 'node:path';import {pathToFileURL} from 'node:url';
const dir=path.resolve('dist/server/chunks');
const file=fs.readdirSync(dir).find(f=>f.startsWith('entrypoints_'));
const {i:App,o:manifest}=await import(pathToFileURL(path.join(dir,file)));
const app=new App(manifest);
const routes=['/','/en/','/privacidad','/en/privacidad','/terminos','/en/terminos','/cookies','/en/cookies'];
test('all SSR language/page families have matching metadata, usable assets and legal alternates',async()=>{
 const saved=globalThis.fetch;globalThis.fetch=async()=>new Response('offline',{status:503});
 try {
  const titles=new Set();
  for(const route of routes){
   const response=await app.render(new Request('https://paseocosta.com'+route));assert.equal(response.status,200,route);
   const html=await response.text();assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,route);
   const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title);
   assert.ok(html.includes(`rel="canonical" href="https://paseocosta.com${route}"`),route);
   assert.ok(/name="description" content="[^"]{15,}"/.test(html));
   const topic=route.replace(/^\/en(?=\/|$)/,'')||'/';
   for(const alternate of ['https://paseocosta.com'+topic,'https://paseocosta.com'+(topic==='/'?'/en/':'/en'+topic)])assert.ok(html.includes(`href="${alternate}"`),route);
   for(const match of html.matchAll(/(?:src|href)="(\/(?:_astro|images)\/[^"?#]+)"/g))assert.ok(fs.existsSync('dist/client'+match[1]),match[1]);
   for(const match of html.matchAll(/href="#([^"?]+)"/g))assert.ok(html.includes(`id="${match[1]}"`),`${route}#${match[1]}`);
   for(const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)){
    const schema=JSON.parse(match[1]);assert.ok(!schema.aggregateRating);assert.ok(!schema.openingHoursSpecification);
    if(schema['@type']==='FAQPage')for(const question of schema.mainEntity){assert.ok(html.includes(question.name));assert.ok(html.includes(question.acceptedAnswer.text));}
   }
   assert.ok(!html.includes('astro-island'));assert.ok(!html.includes('googletagmanager.com/gtag/js'));
   if(route==='/'||route==='/en/'){assert.ok(html.includes('28.881')||html.includes('28,881'));assert.ok(html.includes('23 Oct 2026'));assert.ok(html.indexOf('weather-heading')<html.indexOf('site-footer'));assert.ok(html.includes('mobile-menu'));}
  }
  const sitemap=fs.readFileSync('dist/client/sitemap-0.xml','utf8');for(const route of routes)assert.ok(sitemap.includes(`<loc>https://paseocosta.com${route}</loc>`));
 }finally{globalThis.fetch=saved;}
});
test('SSR middleware preserves redirect queries, returns real404/noindex and bodyless HEAD',async()=>{
 for(const [input,expected]of [['http://paseocosta.com/en/?x=1','https://paseocosta.com/en/?x=1'],['https://paseocosta.com/en?x=1','https://paseocosta.com/en/?x=1'],['https://paseocosta.com/privacidad/?x=1','https://paseocosta.com/privacidad?x=1']]){
  const response=await app.render(new Request(input));assert.equal(response.status,301);assert.equal(response.headers.get('Location'),expected);
 }
 const missing=await app.render(new Request('https://paseocosta.com/en/no-such-page'));assert.equal(missing.status,404);assert.equal(missing.headers.get('X-Robots-Tag'),'noindex');assert.ok((await missing.text()).includes('Page not found'));
 const head=await app.render(new Request('https://paseocosta.com/en/cookies',{method:'HEAD'}));assert.equal(head.status,200);assert.equal(await head.text(),'');assert.ok(head.headers.get('Content-Type').includes('text/html'));
});

test('successful native SSR weather uses the exact place and localized forecast',async()=>{
 const saved=globalThis.fetch,old=globalThis.caches;const calls=[];
 try{
  globalThis.caches=undefined;globalThis.fetch=async url=>{calls.push(new URL(url));return Response.json(sample);};
  const response=await app.render(new Request('https://paseocosta.com/en/'));
  const html=await response.text();assert.equal(response.status,200);
  assert.equal(calls[0].searchParams.get('longitude'),'-68.0536146');
  assert.ok(html.includes('Clear'));assert.ok(!html.includes('Despejado'));
  assert.ok(html.includes('2026-10-23T10:00-03:00'));assert.ok(html.includes('CC BY 4.0'));
  assert.ok(html.includes('not an on-site observation'));assert.ok(html.includes('wx-forecast'));
 }finally{globalThis.fetch=saved;globalThis.caches=old;}
});
