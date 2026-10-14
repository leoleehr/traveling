from pathlib import Path
import re,csv
p=Path(__file__).parent
s=(p/'preview.html').read_text(encoding='utf-8')
refs=re.findall(r'src="([^"]+)"',s)
ids=set(re.findall(r'id="([^"]+)"',s))
anchors=re.findall(r'href="#([^"]+)"',s)
rows=list(csv.DictReader((p/'sorted-photos.csv').open(encoding='utf-8-sig')))
assert all((p/r).exists() for r in refs)
assert all(x in ids for x in anchors)
assert len(rows)==len({r['file'] for r in rows})==566
print('Verified: 566 unique photos,',len(refs),'preview images, 4 date anchors.')
f=p/'網站呈現規畫.md'
t=f.read_text(encoding='utf-8')
f.write_text(t.replace('实拍','實拍').replace('離开','離開').replace('与','與').replace('手机','手機').replace('已規画','已規畫'),encoding='utf-8')
