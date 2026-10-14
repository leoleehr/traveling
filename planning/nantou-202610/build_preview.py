from pathlib import Path
from PIL import Image,ImageOps
import json,csv,html
out=Path(__file__).parent
src=Path(r'C:\Users\music\Documents\網站素材\Traveling\20261008 南投四天三夜')
# Filename ranges refer to existing files only. Missing sequence numbers are not invented.
groups=[
('10/8','埔里｜城堡的夜晚','藍色城堡',9139,9189,['IMG_9184.JPG','IMG_9157.JPG','IMG_9181.JPG'],'外觀、房內與合照；拍攝時間 22:00–23:10。'),
('10/9','埔里｜早餐、逛街與甜點','藍色城堡：早餐與甜點',9190,9221,['IMG_9197.JPG','IMG_9204.JPG','IMG_9220.JPG'],'凌晨房內照片歸入第一晚住宿延續；主頁挑選早上公共空間與餐點。'),
('10/9','埔里｜早餐、逛街與甜點','日月町',9222,9282,['IMG_9257.JPG','IMG_9240.JPG','IMG_9277.JPG'],'12:44–13:44；建築、商場、飲品與戶外合照。'),
('10/9','埔里｜早餐、逛街與甜點','埔里酒廠',9283,9330,['IMG_9284.JPG','IMG_9290.JPG','IMG_9312.JPG'],'14:23–14:55；入口與酒甕展示區。'),
('10/9','埔里｜早餐、逛街與甜點','Feeling18 LAB',9331,9342,['IMG_9338.JPG','IMG_9336.JPG','IMG_9335.JPG'],'16:22–17:01；照片招牌可辨識，列作下午茶。'),
('10/9','埔里｜早餐、逛街與甜點','好客食事処',9343,9361,['IMG_9347.JPG','IMG_9343.JPG','IMG_9353.JPG'],'17:27–18:24；收據與店外招牌可辨識。'),
('10/10','日月潭 → 清境｜從湖邊到山上','日月潭湖景住宿（名稱待確認）',9364,9422,['IMG_9364.JPG','IMG_9419.JPG','IMG_9421.JPG'],'07:31–11:02；GPS 在水社一帶，與原頁米洛克地點不一致，暫不沿用原住宿名稱。'),
('10/10','日月潭 → 清境｜從湖邊到山上','伊達邵：早午餐與碼頭',9423,9433,['IMG_9423.JPG','IMG_9428.JPG','IMG_9432.JPG'],'11:35–13:02；餐廳店名待確認。收據只作內部辨識依據。'),
('10/10','日月潭 → 清境｜從湖邊到山上','遊湖：伊達邵 → 水社 → 玄光 → 伊達邵',9434,9476,['IMG_9441.JPG','IMG_9447.JPG','IMG_9468.JPG','IMG_9471.JPG'],'13:02–15:26；依照片、GPS 與碼頭外觀推定分段；中間碼頭名稱與下船情形待確認。'),
('10/10','日月潭 → 清境｜從湖邊到山上','向山遊客中心',9477,9524,['IMG_9484.JPG','IMG_9479.JPG','IMG_9504.JPG','IMG_9522.JPG'],'16:03–16:25；清水模、水池倒影與合照。'),
('10/10','日月潭 → 清境｜從湖邊到山上','日月老茶廠',9525,9557,['IMG_9550.JPG','IMG_9537.JPG','IMG_9548.JPG'],'16:46–17:07；外觀招牌與製茶設備可辨識。'),
('10/10','日月潭 → 清境｜從湖邊到山上','清境晚餐（暫對照雲南十八怪）',9558,9563,['IMG_9562.JPG','IMG_9563.JPG'],'18:52–19:09；依原規畫與地理位置暫對照，餐廳名稱待確認。'),
('10/10','日月潭 → 清境｜從湖邊到山上','清境樹屋與夜景（暫對照雲南風情）',9564,9608,['IMG_9566.JPG','IMG_9583.JPG','IMG_9575.JPG'],'晚間至翌日 01:40；以住宿晚次歸組，精確房型與星空照片品質需再確認。'),
('10/11','清境 → 下山｜樹屋、草原與綿羊','樹屋早晨',9609,9675,['IMG_9609.JPG','IMG_9626.JPG','IMG_9649.JPG'],'10:35–11:07；陽台山景、房內與建築外觀。'),
('10/11','清境 → 下山｜樹屋、草原與綿羊','清境商場與 MOS',9676,9679,['IMG_9679.JPG','IMG_9676.JPG'],'11:25–11:42；招牌可辨識，無餐點照片，不寫已吃特定餐點。'),
('10/11','清境 → 下山｜樹屋、草原與綿羊','清境農場：青青草原',9681,9761,['IMG_9686.JPG','IMG_9697.JPG','IMG_9719.JPG','IMG_9760.JPG'],'12:27–14:04；綿羊互動、風車與草原步道。不推定觀看表演。'),
('10/11','清境 → 下山｜樹屋、草原與綿羊','下山後停留（地點待確認）',9762,9766,['IMG_9764.JPG','IMG_9765.JPG'],'15:49–16:11；有 GPS 與戶外照片，尚無可靠店名；不推定到家時間。')]
rows=json.loads((out/'photos.json').read_text(encoding='utf-8'))
assigned=[];assets=out/'preview-assets';assets.mkdir(exist_ok=True)
cards=[];current=''
for idx,(day,title,place,lo,hi,picks,note) in enumerate(groups):
    members=[r for r in rows if lo<=int(r['file'][4:8])<=hi]
    for r in members:assigned.append(dict(**r,travel_day=day,stop_order=idx+1,place=place))
    if day!=current:
        cards.append(f'<h2 id="day{day[-1]}">{day} <span>{title}</span></h2>');current=day
    imgs=[]
    for name in picks:
        target=assets/(Path(name).stem+'.webp')
        if not target.exists():
            im=ImageOps.exif_transpose(Image.open(src/name));im.thumbnail((1000,1000));im.convert('RGB').save(target,quality=80)
        imgs.append(f'<figure><img src="preview-assets/{target.name}" alt="{html.escape(place)}照片" loading="lazy"><figcaption>{name}</figcaption></figure>')
    cards.append(f'<article><div class="label">{idx+1:02} / {day}</div><h3>{place}</h3><p>{note}</p><div class="photos">'+''.join(imgs)+'</div></article>')
with (out/'sorted-photos.csv').open('w',encoding='utf-8-sig',newline='') as f:
    w=csv.DictWriter(f,fieldnames=assigned[0].keys());w.writeheader();w.writerows(assigned)
(out/'stops.json').write_text(json.dumps([dict(day=g[0],title=g[1],place=g[2],range=[g[3],g[4]],picks=g[5],note=g[6]) for g in groups],ensure_ascii=False,indent=2),encoding='utf-8')
page='''<!doctype html><html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>南投旅行紀錄｜呈現提案</title><style>
*{box-sizing:border-box}body{margin:0;background:#f7f5ed;color:#25473e;font-family:system-ui,"Microsoft JhengHei",sans-serif;line-height:1.7}header{padding:64px max(24px,calc((100vw - 1100px)/2));background:#25473e;color:white}h1{font-size:clamp(30px,5vw,54px);line-height:1.3;margin:15px 0}header p{max-width:660px}.eyebrow{letter-spacing:.16em;font-size:13px}nav{display:flex;flex-wrap:wrap;gap:12px;position:sticky;top:0;background:#f7f5ed;padding:14px 24px;border-bottom:1px solid #cdd5cb;z-index:2}a{color:inherit;padding:9px 15px;border:1px solid #b5c1b7;border-radius:30px;text-decoration:none}a:focus-visible{outline:3px solid #ad7929}main{max-width:1150px;margin:auto;padding:24px}h2{margin:60px 0 20px;font-size:30px;scroll-margin-top:100px}h2 span{display:block;font-size:17px;font-weight:400}article{background:#fffdf8;border:1px solid #d9dfd3;padding:24px;margin:20px 0;border-radius:16px}.label{font-size:12px;letter-spacing:.1em}h3{font-size:25px;margin:4px 0}p{max-width:800px}.photos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}figure{margin:0}img{width:100%;height:260px;object-fit:contain;background:#edece5;display:block}figcaption{font-size:12px;color:#54675d;padding:6px}aside{padding:20px;border-left:4px solid #b18644;background:#eeeadd}footer{padding:32px;text-align:center}@media(max-width:650px){.photos{grid-template-columns:1fr 1fr}figure:first-child{grid-column:1/-1}img{height:200px}figure:first-child img{height:320px}article{padding:16px}nav{gap:8px;padding:8px}nav a{padding:8px 11px}h2{font-size:26px}}html{scroll-behavior:smooth}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
</style><header><div class="eyebrow">2026.10.08 — 10.11 / LOCAL DESIGN PROPOSAL</div><h1>南投四天三夜<br>從城堡、湖邊，到清境樹屋。</h1><p>照片版呈現提案：依拍攝順序分成四天、17 段旅程。照片時間代表拍攝時間，地點待確認項目保留標示。</p></header><nav aria-label="日期"><a href="#day8">10/8 城堡</a><a href="#day9">10/9 埔里</a><a href="#day0">10/10 湖邊上山</a><a href="#day1">10/11 草原下山</a></nav><main><aside>本機預覽，尚未修改正式頁面。這裡呈現各站候選照片；正式版每站以一張主圖搭配精選相簿。未附旅行者心得，不代寫當次感受。原行前規畫建議收進頁尾。</aside>'''+''.join(cards)+'''</main><footer>旅程照片由使用者提供 · 未確認名稱僅作整理用途</footer></html>'''
(out/'preview.html').write_text(page,encoding='utf-8')
assert len(assigned)==len(rows), (len(assigned),len(rows))
print(f'Grouped {len(assigned)} photographs into {len(groups)} stops; preview built.')
