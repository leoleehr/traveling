from urllib.request import Request,urlopen
from urllib.parse import urljoin
from pathlib import Path
import re,json,html,ssl
pages={
'sunisle':'https://sunisletw.com/sun-moon-lake-brunch/',
'dongcaotun':'https://www.hty.com.tw/location.php?act=view&no=14',
'brewery':'https://event.ttl.com.tw/pl/about/01main.aspx?cateid=248',
'feeling':'https://www.feeling18c.com/store',
'feelinglab':'https://lyes.tw/feeling18-lab/',
'dinner':'https://www.sunmoonlake.gov.tw/zh-TW/Shop/Stores?A=45&Id=270&P=2',
'yunnan':'https://www.yunnan.com.tw/',
'mos':'https://www.mos.com.tw/shop/search_detail.aspx?id=B259',
}
all={}
for key,url in pages.items():
 try:
  t=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=30,context=ssl._create_unverified_context()).read().decode('utf-8','replace')
  Path(__file__).with_name(key+'-page.html').write_text(t,encoding='utf-8')
  tags=re.findall(r'<img\b[^>]+>',t,re.I)
  records=[]
  for tag in tags:
   attrs=dict(re.findall(r'([\w-]+)=[\"\']([^\"\']*)',tag))
   u=attrs.get('data-src') or attrs.get('src')
   if u and not u.startswith('data:'):records.append({'url':urljoin(url,html.unescape(u)),'alt':attrs.get('alt','')})
  all[key]=records
  print(key,json.dumps(records,ensure_ascii=False))
 except Exception as e: print(key,str(e))
Path(__file__).with_name('web-photo-candidates.json').write_text(json.dumps(all,ensure_ascii=False,indent=2),encoding='utf-8')
