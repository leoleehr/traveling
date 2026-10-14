from pathlib import Path
from urllib.request import Request,urlopen
from urllib.parse import quote,urlsplit,urlunsplit
from PIL import Image,ImageOps,ImageDraw
import ssl,json,io
out=Path(__file__).parent;assets=Path('public/2026-nantou-double-ten/assets')
src=Path(r'C:\Users\music\Documents\網站素材\Traveling\20261008 南投四天三夜')
local=[9139,9157,9158,9159,9184,9197,9198,9200,9201,9202,9203,9220,9257,9287,9288,9289,9290,9361,9364,9365,9418,9419,9444,9445,9479,9480,9486,9494,9495,9518,9522,9532,9537,9538,9549,9550,9553,9583,9609,9610,9612,9671,9673,9697,9718,9724,9733,9734,9738,9747,9762,9763,9764]
records=[]
for n in local:
 name=f'IMG_{n}.JPG'; im=ImageOps.exif_transpose(Image.open(src/name));im.thumbnail((1600,1600));file=f'record-{n}.webp';im.convert('RGB').save(assets/file,quality=83)
 records.append(dict(file=file,original=name,source='使用者實拍',url=None))
c=json.loads((out/'web-photo-candidates.json').read_text(encoding='utf-8'))
urls={
'sunisle-space':('https://sunisletw.com/wp-content/uploads/2026/07/outdoor-B2-seating-banner.webp','https://sunisletw.com/sun-moon-lake-brunch/','日嶼官方'),
'sunisle-food':('https://sunisletw.com/wp-content/uploads/2026/07/sun-isle-maqaw-pepper-chicken-thigh-platter.webp','https://sunisletw.com/sun-moon-lake-brunch/','日嶼官方'),
'dongcaotun-view':('https://www.hty.com.tw/data/location/1780389452APGYL_0.jpg','https://www.hty.com.tw/location.php?act=view&no=14','新東陽官方'),
'dongcaotun-building':('https://www.hty.com.tw/data/uploader/images/20240716_140637.jpg','https://www.hty.com.tw/location.php?act=view&no=14','新東陽官方'),
'dongcaotun-landscape':('https://www.hty.com.tw/data/uploader/images/20240716_143014.jpg','https://www.hty.com.tw/location.php?act=view&no=14','新東陽官方'),
'haoke-space':('https://www.sunmoonlake.gov.tw/fapi/Image?type=Store&id=3509&refid=270&l=1&w=2480&h=1488','https://www.sunmoonlake.gov.tw/zh-TW/Shop/Stores?A=45&Id=270&P=2','日月潭國家風景區管理處'),
'yunnan-dinner':('https://www.yunnan.com.tw/images/restaurant/restaurant-01.JPG','https://www.yunnan.com.tw/','雲南風情官方'),
'brewery-space':(c['brewery'][2]['url'],'https://event.ttl.com.tw/pl/about/01main.aspx?cateid=248','台灣菸酒官方'),
}
lab=[r for r in c['feelinglab'] if 'uploads' in r['url'] and not r['url'].endswith('.gif')]
print('LAB candidates:',json.dumps(lab[:40],ensure_ascii=True))
for key,(url,page,source) in urls.items():
 try:
  parts=urlsplit(url);url=urlunsplit((parts.scheme,parts.netloc,quote(parts.path,safe='/%'),parts.query,parts.fragment))
  raw=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=30,context=ssl._create_unverified_context()).read()
  im=ImageOps.exif_transpose(Image.open(io.BytesIO(raw)));im.thumbnail((1600,1600));file=key+'.webp';im.convert('RGB').save(assets/file,quality=83)
  records.append(dict(file=file,original=url,source=source,url=page))
 except Exception as e:print(key,str(e))
(out/'public-photo-audit.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
for start in range(0,len(records),24):
 sheet=Image.new('RGB',(1440,1200),'white');d=ImageDraw.Draw(sheet)
 for j,r in enumerate(records[start:start+24]):
  im=Image.open(assets/r['file']);im.thumbnail((350,165));x=j%4*360;y=j//4*200;sheet.paste(im,(x+(360-im.width)//2,y));d.text((x+4,y+166),r['file'],fill='black')
 sheet.save(out/f'public-audit-{start//24+1}.jpg')
