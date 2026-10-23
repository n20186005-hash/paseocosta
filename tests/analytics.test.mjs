import test from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import fs from 'node:fs';
const source=fs.readFileSync('public/analytics.js','utf8');
function browser(value,blocked=false,ignored=false){
 const store=new Map(value ? [['paseocosta-analytics',value]]:[]),scripts=[],events={},writes=[];
 const input={checked:false,addEventListener:(name,fn)=>events[name]=fn}, status={textContent:''};
 const document={documentElement:{lang:'en'},head:{appendChild:s=>scripts.push(s)},createElement:()=>({}),addEventListener:(name,fn)=>events[name]=fn,querySelector:s=>s==='#analytics-choice'?input:status};
 Object.defineProperty(document,'cookie',{get:()=> '_ga=old; _ga_HXM22WWPKP=old; other=keep',set:v=>writes.push(v)});
 const context={window:{},document,location:{hostname:'paseocosta.com'},localStorage:{getItem:k=>store.get(k),setItem:(k,v)=>{if(blocked)throw Error('blocked');if(!ignored)store.set(k,v);}}};
 vm.runInNewContext(source,context);return{...context,scripts,events,input,status,writes,store};
}
test('existing Analytics preference controls loading, persistence and withdrawal',()=>{
 const b=browser();assert.equal(b.scripts.length,0);assert.equal(b.window['ga-disable-G-HXM22WWPKP'],true);
 b.events.DOMContentLoaded();b.input.checked=true;b.events.change();assert.equal(b.scripts.length,1);assert.equal(b.store.get('paseocosta-analytics'),'accepted');
 b.input.checked=false;b.events.change();assert.equal(b.window['ga-disable-G-HXM22WWPKP'],true);assert.ok(b.writes.every(v=>v.startsWith('_ga')));assert.ok(b.status.textContent.includes('cannot be recalled'));
 assert.equal(browser('accepted').scripts.length,1);
 const blocked=browser(undefined,true);blocked.events.DOMContentLoaded();blocked.input.checked=true;blocked.events.change();assert.equal(blocked.scripts.length,0);assert.equal(blocked.input.checked,false);
});

test('withdrawal immediately denies runtime when an old grant cannot be overwritten',()=>{
 for(const mode of ['throw','ignored']) {
  const b=browser('accepted',mode==='throw',mode==='ignored');
  assert.equal(b.scripts.length,1);assert.equal(b.window['ga-disable-G-HXM22WWPKP'],false);
  b.events.DOMContentLoaded();assert.equal(b.input.checked,true);
  let disabledBeforeWrite=false;
  const original=b.localStorage.setItem;
  b.localStorage.setItem=(...args)=>{disabledBeforeWrite=b.window['ga-disable-G-HXM22WWPKP'];return original(...args);};
  b.input.checked=false;b.events.change();
  assert.equal(disabledBeforeWrite,true,mode);assert.equal(b.window['ga-disable-G-HXM22WWPKP'],true,mode);
  assert.equal(b.input.checked,false,mode);assert.equal(b.store.get('paseocosta-analytics'),'accepted',mode);
  assert.ok(b.writes.length>0);assert.ok(b.status.textContent.includes('off on this page'));
  assert.ok(b.status.textContent.includes('could not be saved'));assert.ok(b.status.textContent.includes('older saved choice'));
  assert.ok(!b.status.textContent.includes('Preference saved'));
  b.events.DOMContentLoaded();assert.equal(b.input.checked,false);assert.equal(b.scripts.length,1);
 }
});
