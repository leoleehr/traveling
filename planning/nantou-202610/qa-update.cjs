const http=require('http'),fs=require('fs'),path=require('path'),assert=require('assert');
const {chromium}=require('C:/Users/music/AppData/Local/Temp/traveling-qa/node_modules/playwright');
const root=path.resolve('public');
const server=http.createServer((req,res)=>{let file=path.resolve(root,'.'+decodeURIComponent(req.url.split('?')[0]));if(!file.startsWith(root)){res.statusCode=403;return res.end()}if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');fs.readFile(file,(error,data)=>{if(error){res.statusCode=404;return res.end()}res.end(data)})});
server.listen(8768,async()=>{let browser;try{
 browser=await chromium.launch({channel:'msedge',headless:true});const page=await browser.newPage({viewport:{width:390,height:844}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8768/2026-nantou-double-ten/',{waitUntil:'domcontentloaded'});await page.waitForSelector('#timeline .stop');
 const data=await page.evaluate(()=>({places:PLACES,days:DAYS,stays:STAYS}));
 assert.equal(data.places.hotel.name,'米洛克景觀飯店');assert(data.places.hotel.q.includes('米洛克景觀飯店'));
 assert(data.days[2].stops.find(s=>s.place==='sunisle').photos.some(p=>p.file==='sunisle-breakfast.webp'));
 assert(data.days[2].stops.find(s=>s.place==='xiangshan').photos.some(p=>p.file==='record-9478-cropped.webp'));
 assert(data.days[2].stops.find(s=>s.place==='tree').photos.some(p=>p.file==='record-9607.webp'));
 for(const file of ['sunisle-breakfast.webp','record-9478-cropped.webp','record-9607.webp','record-9608.webp'])assert(fs.existsSync(path.join(root,'2026-nantou-double-ten','assets',file)),file);
 for(const width of [390,768,1280]){await page.setViewportSize({width,height:900});await page.locator('#tab-2').click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'horizontal overflow '+width);}
 await page.setViewportSize({width:390,height:844});await page.locator('#tab-2').click();await page.locator('.route-illustration a[data-day="1"] .map-label-bg').click();await page.waitForFunction(()=>document.querySelector('#day-title').textContent.includes('埔里'));
 assert.deepEqual(errors,[]);console.log('PASS: confirmed Miluoke place, supplied breakfast, visitor-free Xiangshan crop, both star photos, assets present, route click works, no horizontal overflow at 390/768/1280, no JS errors.');
 }catch(error){console.error(error);process.exitCode=1}finally{if(browser)await browser.close();server.close()}});
