from pathlib import Path
from urllib.request import Request,urlopen
from PIL import Image
import json,io,ssl
p=Path(__file__).parent;a=Path('public/2026-nantou-double-ten/assets')
rows=json.loads((p/'public-photo-audit.json').read_text(encoding='utf-8'))
r=next(x for x in reversed(rows) if x['file']=='mos-candidate-1.webp')
im=Image.open(io.BytesIO(urlopen(Request(r['original'],headers={'User-Agent':'Mozilla/5.0'}),context=ssl._create_unverified_context(),timeout=30).read()));im.thumbnail((1200,1200));im.convert('RGB').save(a/'mos-shop.webp',quality=83)
rows.append(dict(**{k:v for k,v in r.items() if k!='file'},file='mos-shop.webp'))
(p/'public-photo-audit.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
