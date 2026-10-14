from urllib.request import Request,urlopen
from urllib.parse import urljoin
from pathlib import Path
import re,ssl,json,io
from PIL import Image,ImageOps
p=Path(__file__).parent;a=Path('public/2026-nantou-double-ten/assets');records=json.loads((p/'public-photo-audit.json').read_text(encoding='utf-8'))
pages={'ita':'https://www.sunmoonlake.gov.tw/zh-tw/attractions/Attractions?A=20&Id=149','mall':'https://www.rtaiwanr.com/zh-TW/nantou/cingjing/mist-plaza'}
for key,url in pages.items():
 t=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),context=ssl._create_unverified_context(),timeout=30).read().decode('utf-8','replace')
 p.joinpath(key+'-page.html').write_text(t,encoding='utf-8')
 if key=='ita': imgs=list(dict.fromkeys(re.findall(r'(?:https://www.sunmoonlake.gov.tw)?/fapi/Image\?[^\"<>]+',t)))
 else: imgs=list(dict.fromkeys(re.findall(r'https[^\"<>\s]+\.(?:jpg|png|webp)',t)))
 print(key,json.dumps(imgs[:15],ensure_ascii=True))
 for i,u in enumerate(imgs[:5] if key=='mall' else imgs[:1]):
  u=urljoin(url,u.replace('&amp;','&'))
  try:
   raw=urlopen(Request(u,headers={'User-Agent':'Mozilla/5.0'}),context=ssl._create_unverified_context(),timeout=30).read();im=ImageOps.exif_transpose(Image.open(io.BytesIO(raw)));im.thumbnail((1600,1600));f=f'{key}-{i}.webp';im.convert('RGB').save(a/f,quality=83);records.append(dict(file=f,original=u,url=url,source='日月潭國家風景區管理處' if key=='ita' else 'Round Taiwan Round 玩島玩'))
  except Exception as e:print(str(e))
(p/'public-photo-audit.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
