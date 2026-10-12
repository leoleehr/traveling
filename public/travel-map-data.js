// Coordinates show approximate areas, not exact shop locations or recorded ship positions.
const TRAVEL_NODES = [
  {
    "trip": "2026-nantou-double-ten",
    "name": "從新北往南投",
    "latlng": [
      25.014,
      121.463
    ],
    "href": "./2026-nantou-double-ten/?day=0&place=banqiao#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "第一晚・藍色城堡",
    "latlng": [
      23.969,
      120.931
    ],
    "href": "./2026-nantou-double-ten/?day=0&place=castle#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "城堡早餐、甜點與公共空間",
    "latlng": [
      23.969,
      120.931
    ],
    "href": "./2026-nantou-double-ten/?day=1&place=castle#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "日月町",
    "latlng": [
      23.968,
      120.932
    ],
    "href": "./2026-nantou-double-ten/?day=1&place=hizuki#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "埔里酒廠",
    "latlng": [
      23.968,
      120.964
    ],
    "href": "./2026-nantou-double-ten/?day=1&place=brewery#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "Feeling18 LAB 下午茶",
    "latlng": [
      23.961,
      120.946
    ],
    "href": "./2026-nantou-double-ten/?day=1&place=feeling#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "好客食事処晚餐",
    "latlng": [
      23.902,
      120.934
    ],
    "href": "./2026-nantou-double-ten/?day=1&place=dinner#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "米洛克景觀飯店",
    "latlng": [
      23.872,
      120.921
    ],
    "href": "./2026-nantou-double-ten/?day=1&place=hotel#journey",
    "note": "旅行紀錄；區域概略位置，住宿：米洛克景觀飯店"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "米洛克景觀飯店的早晨",
    "latlng": [
      23.872,
      120.921
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=hotel#journey",
    "note": "旅行紀錄；區域概略位置，住宿：米洛克景觀飯店"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "日嶼早午餐",
    "latlng": [
      23.849,
      120.931
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=sunisle#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "伊達邵碼頭",
    "latlng": [
      23.849,
      120.929
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=ita#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "搭船遊日月潭",
    "latlng": [
      23.857,
      120.923
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=cruise#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "向山遊客中心",
    "latlng": [
      23.852,
      120.902
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=xiangshan#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "日月老茶廠",
    "latlng": [
      23.894,
      120.923
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=oldtea#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "清境晚餐",
    "latlng": [
      24.04,
      121.155
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=yunnan#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "住進清境樹屋",
    "latlng": [
      24.04,
      121.155
    ],
    "href": "./2026-nantou-double-ten/?day=2&place=tree#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "樹屋的早晨",
    "latlng": [
      24.04,
      121.155
    ],
    "href": "./2026-nantou-double-ten/?day=3&place=tree#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "清境商場與 MOS",
    "latlng": [
      24.044,
      121.157
    ],
    "href": "./2026-nantou-double-ten/?day=3&place=mos#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "青青草原・綿羊與山景",
    "latlng": [
      24.056,
      121.162
    ],
    "href": "./2026-nantou-double-ten/?day=3&place=grass#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "東草屯休息站",
    "latlng": [
      24.005,
      120.733
    ],
    "href": "./2026-nantou-double-ten/?day=3&place=dongcaotun#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-nantou-double-ten",
    "name": "繼續北返",
    "latlng": [
      25.005,
      121.485
    ],
    "href": "./2026-nantou-double-ten/?day=3&place=home#journey",
    "note": "旅行紀錄；區域概略位置，非道路或遊船航跡"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "中和大仁街出發",
    "latlng": [
      25.005,
      121.485
    ],
    "href": "./2026-jiufen-sunny/#stop-1",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "漁鱻生猛海鮮料理",
    "latlng": [
      25.05,
      121.452
    ],
    "href": "./2026-jiufen-sunny/#stop-2",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "入住九份山經",
    "latlng": [
      25.108,
      121.841
    ],
    "href": "./2026-jiufen-sunny/#stop-3",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "微光森林早午餐",
    "latlng": [
      25.11,
      121.844
    ],
    "href": "./2026-jiufen-sunny/#stop-4",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "九份老街",
    "latlng": [
      25.109,
      121.845
    ],
    "href": "./2026-jiufen-sunny/#stop-5",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "九份豆花",
    "latlng": [
      25.109,
      121.846
    ],
    "href": "./2026-jiufen-sunny/#stop-6",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "阿柑姨芋圓",
    "latlng": [
      25.108,
      121.843
    ],
    "href": "./2026-jiufen-sunny/#stop-7",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "老街亂逛",
    "latlng": [
      25.109,
      121.845
    ],
    "href": "./2026-jiufen-sunny/#stop-8",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "年代客棧牛肉麵",
    "latlng": [
      25.108,
      121.844
    ],
    "href": "./2026-jiufen-sunny/#stop-9",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "回到九份山經",
    "latlng": [
      25.108,
      121.841
    ],
    "href": "./2026-jiufen-sunny/#stop-10",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "九份奇喵食光",
    "latlng": [
      25.108,
      121.843
    ],
    "href": "./2026-jiufen-sunny/#stop-11",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "酉時暮光",
    "latlng": [
      25.11,
      121.844
    ],
    "href": "./2026-jiufen-sunny/#stop-12",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "瑞芳陰陽海",
    "latlng": [
      25.122,
      121.863
    ],
    "href": "./2026-jiufen-sunny/#stop-13",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "金沙灣海濱公園",
    "latlng": [
      25.034,
      121.923
    ],
    "href": "./2026-jiufen-sunny/#stop-14",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-jiufen-sunny",
    "name": "回家 · 新店安坑",
    "latlng": [
      24.955,
      121.505
    ],
    "href": "./2026-jiufen-sunny/#stop-15",
    "note": "區域概略位置；精確地址見行程導航"
  },
  {
    "trip": "2026-star-navigator",
    "name": "南京東路搭乘公車前往基隆",
    "latlng": [
      25.052,
      121.533
    ],
    "href": "./2026-star-navigator/#stop-1",
    "note": "南京東路出發區域概略位置"
  },
  {
    "trip": "2026-star-navigator",
    "name": "登船 Check-in · 露臺客房",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-2",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "麗都自助餐廳",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-3",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "開船 · 甲板吹風＋鬼吼鬼叫",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-4",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "棕櫚閣喝小酒看表演",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-5",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "回房間陽台吹海風看海景",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-6",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "星夢餐廳用午餐",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-7",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "羅馬泳池玩水",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-8",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "麗都自助餐廳用晚餐",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-9",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "賭博去",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-10",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "大廳咖啡廳看表演",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-11",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "星夢餐廳看 Party",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-12",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "回房間看夜景",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#stop-13",
    "note": "與那國島附近海域示意；非實際航跡或登岸點"
  },
  {
    "trip": "2026-star-navigator",
    "name": "百味軒用午餐",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-14",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "回房整理行李，準備下船",
    "latlng": [
      25.155,
      121.75
    ],
    "href": "./2026-star-navigator/#stop-15",
    "note": "船上活動歸於登船／回港節點；非活動當時船位"
  },
  {
    "trip": "2026-star-navigator",
    "name": "與那國島附近海域 · 公海巡遊",
    "latlng": [
      24.5,
      122.85
    ],
    "href": "./2026-star-navigator/#day2",
    "note": "海域示意；未安排登岸，非實際航跡"
  }
];
