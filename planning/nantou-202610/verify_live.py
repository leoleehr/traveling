from pathlib import Path
from urllib.request import Request,urlopen
from concurrent.futures import ThreadPoolExecutor
import hashlib,json,ssl,time
root=Path('public');base='https://traveling.musicallanding.workers.dev/'
manifest=json.loads(Path(__file__).with_name('published-photo-manifest.json').read_text(encoding='utf-8'))
paths=['index.html','2026-nantou-double-ten/index.html','2026-nantou-double-ten/data.js','2026-nantou-double-ten/record.js','2026-nantou-double-ten/record.css','travel-map-data.js','travel-map.js']+['2026-nantou-double-ten/assets/'+p['file'] for p in manifest]
def check(p):
 for attempt in range(3):
  try:
   r=urlopen(Request(base+p+'?verify='+str(time.time_ns()),headers={'Cache-Control':'no-cache','User-Agent':'Mozilla/5.0'}),timeout=30,context=ssl._create_unverified_context());b=r.read()
   if hashlib.sha256(b).digest()!=hashlib.sha256((root/p).read_bytes()).digest():raise ValueError('content mismatch')
   return p
  except Exception:
   if attempt==2:raise
   time.sleep(2)
with ThreadPoolExecutor(max_workers=8) as pool: results=list(pool.map(check,paths))
print('PASS:',len(results),'live files return current byte-matching content; includes all',len(manifest),'approved photographs.')
