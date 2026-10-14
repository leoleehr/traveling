from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json,csv
src=Path(r'C:\Users\music\Documents\網站素材\Traveling\20261008 南投四天三夜')
out=Path(__file__).parent
rows=[]
for p in sorted(src.glob('*.JPG')):
    im=Image.open(p); e=im.getexif(); ex=e.get_ifd(34665); gps=e.get_ifd(34853)
    def coord(k):
        a=gps.get(k)
        return round(float(a[0])+float(a[1])/60+float(a[2])/3600,6) if a else None
    rows.append(dict(file=p.name,time=ex.get(36867,e.get(306,'')),lat=coord(2),lon=coord(4)))
rows.sort(key=lambda r:(r['time'],r['file']))
(out/'photos.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
with (out/'photos.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=rows[0].keys());w.writeheader();w.writerows(rows)
for start in range(0,len(rows),60):
    page=Image.new('RGB',(1500,1500),'white');d=ImageDraw.Draw(page)
    for j,r in enumerate(rows[start:start+60]):
        im=ImageOps.exif_transpose(Image.open(src/r['file']));im.thumbnail((244,122))
        x=(j%6)*250;y=(j//6)*150;page.paste(im,(x+(250-im.width)//2,y))
        d.text((x+4,y+123),r['file']+' '+r['time'][11:16],fill='black')
    page.save(out/f'contact-{start//60+1:02}.jpg')
groups=[]
for r in rows:
    key=(r['time'][:10], round(r['lat'],2) if r['lat'] else None,round(r['lon'],2) if r['lon'] else None)
    if not groups or groups[-1]['key']!=key:groups.append(dict(key=key,first=r['file'],start=r['time'],end=r['time'],last=r['file'],count=0))
    groups[-1].update(end=r['time'],last=r['file'],count=groups[-1]['count']+1)
print('Photos:',len(rows),'All files:',len(list(src.iterdir())))
print(json.dumps(groups,ensure_ascii=False,indent=2))
