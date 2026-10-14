from pathlib import Path
from urllib.request import Request,urlopen
from PIL import Image,ImageOps,ImageDraw
import ssl,json,io,re
p=Path(__file__).parent;a=Path('public/2026-nantou-double-ten/assets')
urls={
'feelinglab-exterior':('https://media.lyes.tw/photo/0d/0d31y9itf87f_xi5/o.jpg','https://lyes.tw/feeling18-lab/','涼子是也'),
'feelinglab-space':('https://media.lyes.tw/photo/50/50jybzbziefa1070/o.jpg','https://lyes.tw/feeling18-lab/','涼子是也'),
'dongcaotun-scenery':('https://taipeidaward.taipei/Upload/FileManager/bee63c39-f776-41c4-b3f7-0e88056c671b.jpg','https://taipeidaward.taipei/Post/182395','臺北設計獎'),
}
page='https://www.peigogo.com/2015/01/mos.html'
t=urlopen(Request(page,headers={'User-Agent':'Mozilla/5.0'}),context=ssl._create_unverified_context(),timeout=30).read().decode('utf-8','replace')
images=list(dict.fromkeys(re.findall(r'https?://[^\s<>\"\x27]+\.(?:jpg|JPG|jpeg|png)',t)))
print('mos images',json.dumps(images[:20],ensure_ascii=True))
images=[u for u in images if '/s1600/' in u]
for i,u in enumerate(images[:9]):urls[f'mos-candidate-{i}']=(u,page,'PeiGoGo')
records=json.loads((p/'public-photo-audit.json').read_text(encoding='utf-8'));new=[]
for key,(url,page,source) in urls.items():
 try:
  raw=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0','Referer':page}),timeout=30,context=ssl._create_unverified_context()).read();im=ImageOps.exif_transpose(Image.open(io.BytesIO(raw)));im.thumbnail((1600,1600));file=key+'.webp';im.convert('RGB').save(a/file,quality=83)
  r=dict(file=file,original=url,source=source,url=page);records.append(r);new.append(r)
 except Exception as e:print(key,str(e))
(p/'public-photo-audit.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8')
sheet=Image.new('RGB',(1440,1040),'white');d=ImageDraw.Draw(sheet)
for j,r in enumerate(new):
 im=Image.open(a/r['file']);im.thumbnail((350,210));x=j%4*360;y=j//4*260;sheet.paste(im,(x+(360-im.width)//2,y));d.text((x+3,y+213),r['file'],fill='black')
sheet.save(p/'extra-audit.jpg')
