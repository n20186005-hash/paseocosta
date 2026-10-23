import fs from 'node:fs';import path from 'node:path';
function visit(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())visit(file);else if(file.endsWith('.mjs')){const text=fs.readFileSync(file,'utf8');fs.writeFileSync(file,text.split(process.cwd()+'/').join(''));}}}
visit('dist/server');
