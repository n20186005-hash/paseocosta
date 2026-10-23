import test from 'node:test';
import assert from 'node:assert/strict';
import {fetchWeather,wmoInfo,buildAdvice} from '../src/lib/weather.ts';
import {sample} from './forecast.fixture.mjs';

test('native server weather validates data and keeps upstream usable when cache fails', async()=>{
 const saved=globalThis.fetch, old=globalThis.caches; const calls=[];
 try {
  globalThis.caches={default:{match:async()=>{throw Error('cache');},put:async()=>{throw Error('cache');}}};
  globalThis.fetch=async url=>{calls.push(new URL(url));return Response.json(sample);};
  const data=await fetchWeather(-38.9791753,-68.0536146);
  assert.equal(data.current.temperature,18);assert.equal(data.observedAt,'2026-10-23T10:00-03:00');
  assert.equal(calls[0].searchParams.get('latitude'),'-38.9791753');assert.equal(calls[0].searchParams.get('longitude'),'-68.0536146');
  assert.equal(wmoInfo(0,'en').label,'Clear');assert.equal(wmoInfo(0,'es').label,'Despejado');
  assert.ok(buildAdvice(data,'en').gear.some(s=>s.includes('Sunscreen')));
  globalThis.caches=undefined;
  for(const bad of [{...sample,current:{...sample.current,temperature_2m:null}},{...sample,daily:{...sample.daily,uv_index_max:[]}},{...sample,daily:{...sample.daily,time:[]}}]) {
   globalThis.fetch=async()=>Response.json(bad);assert.equal(await fetchWeather(-38.9791753,-68.0536146),null);
  }
  globalThis.fetch=async()=>{throw Error('offline');};assert.equal(await fetchWeather(-38.9791753,-68.0536146),null);
 }finally{globalThis.fetch=saved;globalThis.caches=old;}
});
