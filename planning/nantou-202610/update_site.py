from pathlib import Path
import json,re
root=Path('public');trip=root/'2026-nantou-double-ten';plan=Path(__file__).parent
for filename in ['index.html','data.js','app.js']:
 backup=plan/('before-record-'+filename)
 if not backup.exists():backup.write_bytes((trip/filename).read_bytes())
audit={r['file']:r for r in json.loads((plan/'public-photo-audit.json').read_text(encoding='utf-8'))}
def photo(file,alt):
 r=audit[file];return dict(file=file,alt=alt,credit=r['source'],url=r['url'],kind='reference' if r['url'] else 'original')
def local(n,alt):return photo(f'record-{n}.webp',alt)
def web(name,alt):return photo(name+'.webp',alt)
places={
'banqiao':('板橋出發','板橋車站',[25.014,121.463]),
'castle':('藍色城堡・茱諾法式甜點','藍色城堡 茱諾法式甜點 埔里',[23.969,120.931]),
'hizuki':('日月町','日月町 複合式商場 埔里',[23.968,120.932]),
'brewery':('埔里酒廠','埔里酒廠 中山路三段219號',[23.968,120.964]),
'feeling':('Feeling18 LAB 烘研所','Feeling18 LAB 烘研所 埔里',[23.961,120.946]),
'dinner':('好客食事処','好客食事処 魚池',[23.902,120.934]),
'hotel':('日月潭湖景住宿','日月潭 水社',[23.872,120.921]),
'sunisle':('日嶼早午餐','日嶼早午餐 伊達邵 日月潭',[23.849,120.931]),
'ita':('伊達邵碼頭','伊達邵碼頭',[23.849,120.929]),
'cruise':('日月潭遊湖','日月潭',[23.857,120.923]),
'xiangshan':('向山遊客中心','向山遊客中心',[23.852,120.902]),
'oldtea':('日月老茶廠','日月老茶廠 魚池',[23.894,120.923]),
'yunnan':('清境晚餐・雲南十八怪','雲南十八怪 景觀餐廳 清境',[24.04,121.155]),
'tree':('清境樹屋・雲南風情景觀山莊','雲南風情景觀山莊',[24.04,121.155]),
'mos':('清境商場・MOS','摩斯漢堡 清境店 定遠新村26-1號',[24.044,121.157]),
'grass':('清境農場・青青草原','清境農場 青青草原',[24.056,121.162]),
'dongcaotun':('東草屯休息站','東草屯休息站 玉屏路55-77號',[24.005,120.733]),
'home':('北返','新北市',[25.005,121.485]),
}
PLACES={k:dict(name=v[0],q=v[1],latlng=v[2]) for k,v in places.items()}
PLACES['hotel']['approx']=True
def stop(place,time,title,desc,photos):return dict(place=place,time=time,title=title,desc=desc,photos=photos)
DAYS=[
dict(date='10/8 星期四',title='夜裡抵達埔里，住進藍色城堡。',direction='新北 → 埔里。第一晚從城堡的燈光開始。',route=['板橋出發','埔里・藍色城堡'],photo=local(9184,'夜晚點燈的藍色城堡外觀'),stops=[
stop('banqiao','出發','從新北往南投','從板橋出發，到埔里展開四天三夜。出發時間未另補記。',[]),
stop('castle','22:00–23:10','第一晚・藍色城堡','抵達後留下城堡的夜景。第一晚住在埔里，隔天從城堡開始走。',[local(9184,'藍色城堡夜間外觀'),local(9139,'城堡入口與夜間燈光')])]),
dict(date='10/9 星期五',title='在埔里逛一整天，晚上到魚池。',direction='藍色城堡 → 日月町 → 埔里酒廠 → Feeling18 LAB → 好客食事処 → 日月潭住宿。',route=['城堡早餐與甜點','日月町','埔里酒廠','Feeling18 LAB','魚池・好客食事処','日月潭湖景住宿'],photo=local(9257,'日月町白色商場建築'),stops=[
stop('castle','09:16–11:27','城堡早餐、甜點與公共空間','早上留在城堡吃早餐與甜點，再出發到埔里。照片選用公共空間與建築。',[local(9197,'城堡木造公共空間'),local(9200,'白天的藍色城堡外觀'),local(9202,'城堡室內木造天花板')]),
stop('hizuki','12:44–13:44','日月町','在日月町逛商場、喝飲品，再繼續埔里的下午行程。',[local(9257,'日月町白色建築與戶外廣場')]),
stop('brewery','14:23–14:55','埔里酒廠','到埔里酒廠參觀，照片留下館內酒器展示。',[web('brewery-space','埔里酒廠旗艦館展示空間，官方參考照'),local(9289,'埔里酒廠展示的紅色酒器')]),
stop('feeling','16:22–17:01','Feeling18 LAB 下午茶','在 Feeling18 LAB 停留，這一段是咖啡與甜點的時間。',[web('feelinglab-exterior','Feeling18 LAB 烘研所外觀，網路參考照')]),
stop('dinner','17:27–18:24','好客食事処晚餐','離開埔里後到魚池，在好客食事処吃晚餐，接著前往湖景住宿。',[web('haoke-space','好客食事処室內空間，官方參考照'),local(9361,'好客食事処戶外招牌')]),
stop('hotel','第二晚','住在日月潭湖邊','第二晚的住宿，隔天早晨留下房內湖景。旅宿名稱尚未確認，地圖只標示水社一帶。',[local(9419,'住宿房內窗景與日月潭湖面')])]),
dict(date='10/10 星期六',title='從日月潭遊湖，到清境住樹屋。',direction='湖景住宿 → 日嶼早午餐 → 伊達邵與遊湖 → 向山 → 日月老茶廠 → 清境晚餐與樹屋。',route=['日月潭湖景住宿','日嶼早午餐・伊達邵','日月潭遊湖','向山遊客中心','日月老茶廠','清境・晚餐與樹屋'],photo=local(9479,'向山遊客中心水池與日月潭景色'),stops=[
stop('hotel','07:31–11:02','湖景住宿的早晨','早上從房間望向日月潭，離開住宿後前往伊達邵。',[local(9364,'早晨平靜的日月潭湖面'),local(9418,'日月潭住宿房間與湖景窗戶')]),
stop('sunisle','11:35–12:24','日嶼早午餐','在伊達邵的日嶼早午餐用餐。照片採店家官方的戶外座位與餐點參考照；餐點照並非當次點餐紀錄。',[web('sunisle-space','日嶼戶外木棧板座位，官方參考照'),web('sunisle-food','日嶼馬告嫩煎雞腿拼盤，官方餐點參考照')]),
stop('ita','12:51–13:02','伊達邵碼頭','早午餐後到伊達邵碼頭，接著搭船遊湖。',[web('ita-0','伊達邵碼頭八角涼亭與湖景，官方參考照')]),
stop('cruise','13:02–15:26','搭船遊日月潭','午後搭船遊湖，照片留下沿途碼頭與湖景。中途碼頭與下船順序尚未完整確認，這裡合併呈現遊湖紀錄。',[local(9444,'遊湖途中碼頭廣場與遠山'),local(9445,'日月潭碼頭廣場、湖面與山景')]),
stop('xiangshan','16:03–16:25','向山遊客中心','到向山看清水模建築與水池倒影，再前往茶廠。',[local(9479,'向山遊客中心水池倒映山景'),local(9494,'向山水池與遠方湖面')]),
stop('oldtea','16:46–17:07','日月老茶廠','在日月老茶廠看建築與製茶設備，之後離開湖區往清境。',[local(9550,'日月老茶廠正面外觀'),local(9537,'日月老茶廠室內製茶設備')]),
stop('yunnan','18:52–19:09','清境晚餐','上山後用晚餐。地點依原行程與照片位置對照雲南十八怪；圖片為餐廳官方外觀參考照。',[web('yunnan-dinner','雲南十八怪景觀餐廳外觀，官方參考照')]),
stop('tree','第三晚','住進清境樹屋','第三晚住在清境樹屋。夜間與翌日凌晨的住宿照片歸在同一晚；這裡選用隔天拍攝的建築外觀。',[local(9671,'清境樹屋建築外觀')])]),
dict(date='10/11 星期日',title='樹屋早晨、青青草原，再下山北返。',direction='清境樹屋 → 清境商場與 MOS → 青青草原 → 東草屯休息站 → 北返。',route=['清境樹屋','清境商場・MOS','青青草原','下山・東草屯休息站','北返'],photo=local(9718,'青青草原與清境山景'),stops=[
stop('tree','10:35–11:07','樹屋的早晨','早上在住宿看山景與樹屋，接著前往清境商場。',[local(9609,'樹屋陽台望向層疊山景'),local(9612,'樹屋陽台與山莊景觀'),local(9671,'樹屋外觀')]),
stop('mos','11:25–11:42','清境商場與 MOS','在清境商場停留，照片記錄了 MOS 清境店。這裡使用店內點餐區的歷史參考照，並非當次點餐或現行菜單。',[web('mos-shop','MOS 清境店點餐區，2015年網路參考照')]),
stop('grass','12:27–14:04','青青草原・綿羊與山景','到清境農場看綿羊、草原與山景，午後再下山。未另記錄表演觀看情形。',[local(9697,'青青草原樹下的綿羊'),local(9718,'青青草原坡地與清境山景'),local(9734,'青青草原與遠方山脈')]),
stop('dongcaotun','15:49–16:11','東草屯休息站','下山後在國道六號的東草屯休息站休息。以當次站體實拍搭配網路景觀參考照，作為這趟旅程最後一站。',[web('dongcaotun-scenery','東草屯休息站建築與山景，網路參考照'),local(9762,'東草屯休息站戶外建築與山景'),web('dongcaotun-view','東草屯休息站外觀，新東陽官方參考照')]),
stop('home','返程','繼續北返','離開休息站後北返。實際到家時間未補記。',[])])]
STAYS=[dict(day=0,place='castle',date='10/8・第一晚',title='埔里・藍色城堡',desc='城堡夜景，隔天早上再看木造公共空間。',photo=local(9184,'藍色城堡夜景')),dict(day=1,place='hotel',date='10/9・第二晚',title='日月潭・湖景住宿',desc='從房內看日月潭。旅宿名稱尚未確認。',photo=local(9419,'日月潭住宿湖景窗戶')),dict(day=2,place='tree',date='10/10・第三晚',title='清境・樹屋',desc='依原行程對照雲南風情景觀山莊，選用當次樹屋外觀。',photo=local(9671,'清境樹屋外觀'))]
CHECKS={'record':['住宿名稱與房型資料，留作下次旅行參考。','保存交通、住宿與餐廳的原始確認資料。'],'pack':['山區保暖外套與雨具。','防滑步行鞋、飲水、常用藥與充電用品。','開車前檢查油量、胎況與雨刷。']}
(trip/'data.js').write_text('const PLACES = '+json.dumps(PLACES,ensure_ascii=False,indent=2)+';\nconst DAYS = '+json.dumps(DAYS,ensure_ascii=False,indent=2)+';\nconst STAYS = '+json.dumps(STAYS,ensure_ascii=False,indent=2)+';\nconst CHECKS = '+json.dumps(CHECKS,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
nodes_text=(root/'travel-map-data.js').read_text(encoding='utf-8');nodes=json.loads(nodes_text[nodes_text.index('['):nodes_text.rindex(']')+1]);others=[n for n in nodes if n['trip']!='2026-nantou-double-ten']
nodes=[]
for day,d in enumerate(DAYS):
 for s in d['stops']:
  p=PLACES[s['place']]
  nodes.append(dict(trip='2026-nantou-double-ten',name=s['title'],latlng=p['latlng'],href=f'./2026-nantou-double-ten/?day={day}&place={s["place"]}#journey',note='旅行紀錄；區域概略位置'+('，住宿名稱未確認' if s['place']=='hotel' else '，非道路或遊船航跡')))
(root/'travel-map-data.js').write_text('// Coordinates show approximate areas, not exact shop locations or recorded ship positions.\nconst TRAVEL_NODES = '+json.dumps(nodes+others,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
t=(root/'travel-map.js').read_text(encoding='utf-8')
t=t.replace("land.filter(n=>n.latlng[0]>=24&&n.latlng[0]<24.8)","land.filter(n=>n.trip==='2026-nantou-double-ten'&&n.latlng[0]>=24&&n.latlng[0]<24.8&&n.latlng[1]>121)")
region="['東草屯休息站',[24.005,120.733],land.filter(n=>n.trip==='2026-nantou-double-ten'&&n.latlng[0]>=24&&n.latlng[0]<24.8&&n.latlng[1]<=121),'#254c43'],"
t=t.replace(region,'').replace("['清境',[24.045,121.157]",region+"['清境',[24.045,121.157]")
(root/'travel-map.js').write_text(t,encoding='utf-8')
t=(root/'index.html').read_text(encoding='utf-8').replace('南投 · 已規劃','南投 · 旅行紀錄').replace('2026-nantou-double-ten/assets/lake.jpg','2026-nantou-double-ten/assets/record-9479.webp').replace('2026-nantou-double-ten/assets/treeview.jpg','2026-nantou-double-ten/assets/record-9609.webp').replace('清境雲南風情山莊的山景與樹屋景觀','清境樹屋陽台望向山景的當次實拍').replace('第一晚住城堡，第二晚看湖，<br>第三晚到山上住樹屋。','埔里逛街、日月潭遊湖，<br>最後到清境住樹屋、看綿羊。').replace('雙十旅行地圖','雙十旅行紀錄').replace('首頁照片：日月潭向山、清境雲南風情。','首頁照片：當次日月潭向山、清境山景實拍。')
(root/'index.html').write_text(t,encoding='utf-8')
# Only reviewed, referenced assets can be deployed. All other candidates are removed.
used={p['file'] for d in DAYS for s in d['stops'] for p in s['photos']}|{d['photo']['file'] for d in DAYS}|{s['photo']['file'] for s in STAYS}|{'record-9609.webp'}
review=[]
for r in audit.values():
 if r['file'] in used:review.append(dict(**r,review='目視檢查，未見旅行者兩人；僅選用景物／空間／餐點'))
 elif (trip/'assets'/r['file']).exists():(trip/'assets'/r['file']).unlink()
(plan/'published-photo-manifest.json').write_text(json.dumps(review,ensure_ascii=False,indent=2),encoding='utf-8')
print('Updated actual journey:',len(nodes),'map nodes;',len(used),'approved photographs.')
