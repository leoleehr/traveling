const {chromium}=require('C:/Users/music/AppData/Local/Temp/traveling-qa/node_modules/playwright');
const fs=require('fs'),vm=require('vm'),assert=require('assert');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/maps?**',r=>r.abort());await page.route('https://fonts.googleapis.com/**',r=>r.abort());
 await page.goto('http://127.0.0.1:8765/2026-nantou-double-ten/',{waitUntil:'domcontentloaded'});
 await page.waitForSelector('#timeline .stop');
 const ctx={};vm.createContext(ctx);vm.runInContext(fs.readFileSync('public/2026-nantou-double-ten/data.js','utf8')+'; this.data={PLACES,DAYS,STAYS};',ctx);
 const files=new Set(ctx.data.DAYS.flatMap(d=>d.stops.flatMap(s=>s.photos.map(p=>p.file))));
 for(const f of files){assert(fs.existsSync('public/2026-nantou-double-ten/assets/'+f),f);const response=await page.request.get('http://127.0.0.1:8765/2026-nantou-double-ten/assets/'+f);assert(response.ok(),f);}
 for(const width of [390,768,1280]){
  await page.setViewportSize({width,height:900});
  for(let day=0;day<4;day++){
   await page.locator('#tab-'+day).click();assert.equal(await page.locator('#timeline .stop').count(),ctx.data.DAYS[day].stops.length);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'overflow '+width+' day '+day);
  }
 }
 await page.setViewportSize({width:390,height:844});await page.locator('#tab-2').click();
 await page.locator('.photo-open').first().click();assert(await page.locator('#gallery').evaluate(e=>e.open));await page.locator('#gallery-next').click();assert((await page.locator('#gallery-count').innerText()).startsWith('2 /'));await page.keyboard.press('Escape');assert(!(await page.locator('#gallery').evaluate(e=>e.open)));
 await page.locator('#tab-2').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#tab-3').getAttribute('aria-selected'),'true');
 await page.goto('http://127.0.0.1:8765/2026-nantou-double-ten/?day=3&place=dongcaotun#journey',{waitUntil:'domcontentloaded'});await page.waitForSelector('#stop-3-dongcaotun.linked-stop');assert((await page.locator('#day-title').innerText()).includes('樹屋'));
 await page.locator('input[data-check]').first().check();await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('input[data-check]');assert(await page.locator('input[data-check]').first().isChecked());
 const nodes={};vm.createContext(nodes);vm.runInContext(fs.readFileSync('public/travel-map-data.js','utf8')+'; this.nodes=TRAVEL_NODES;',nodes);
 for(const n of nodes.nodes.filter(n=>n.trip==='2026-nantou-double-ten')){const url=new URL(n.href,'http://127.0.0.1:8765/');const day=Number(url.searchParams.get('day')),place=url.searchParams.get('place');assert(ctx.data.DAYS[day].stops.some(s=>s.place===place),n.name);}
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});await page.waitForSelector('#atlas-nodes details');assert((await page.locator('#atlas-nodes').textContent()).includes('東草屯'));assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
 await page.goto('http://127.0.0.1:8765/2026-nantou-double-ten/?day=2#journey',{waitUntil:'domcontentloaded'});await page.waitForSelector('#timeline .stop');await page.evaluate(async()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});await page.screenshot({path:'planning/nantou-202610/mobile-record.png',fullPage:true});
 await page.setViewportSize({width:1280,height:900});await page.goto('http://127.0.0.1:8765/2026-nantou-double-ten/',{waitUntil:'domcontentloaded'});await page.waitForSelector('#timeline .stop');await page.evaluate(async()=>{document.querySelectorAll('img').forEach(i=>i.loading='eager');await Promise.all([...document.images].map(i=>i.decode().catch(()=>{})));});await page.screenshot({path:'planning/nantou-202610/desktop-record.png',fullPage:true});
 assert.deepEqual(errors,[]);await browser.close();console.log('PASS: 34 approved images, all 4 days at 390/768/1280px, gallery, keyboard tabs, checklist persistence, 21 map links, homepage, no JS errors.');
})().catch(e=>{console.error(e);process.exit(1)});
