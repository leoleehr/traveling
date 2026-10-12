const PLACES = {
  "banqiao": {
    "name": "板橋出發",
    "q": "板橋車站",
    "latlng": [
      25.014,
      121.463
    ]
  },
  "castle": {
    "name": "藍色城堡・茱諾法式甜點",
    "q": "藍色城堡 茱諾法式甜點 埔里",
    "latlng": [
      23.969,
      120.931
    ]
  },
  "hizuki": {
    "name": "日月町",
    "q": "日月町 複合式商場 埔里",
    "latlng": [
      23.968,
      120.932
    ]
  },
  "brewery": {
    "name": "埔里酒廠",
    "q": "埔里酒廠 中山路三段219號",
    "latlng": [
      23.968,
      120.964
    ]
  },
  "feeling": {
    "name": "Feeling18 LAB 烘研所",
    "q": "Feeling18 LAB 烘研所 埔里",
    "latlng": [
      23.961,
      120.946
    ]
  },
  "dinner": {
    "name": "好客食事処",
    "q": "好客食事処 魚池",
    "latlng": [
      23.902,
      120.934
    ]
  },
  "hotel": {
    "name": "日月潭湖景住宿",
    "q": "日月潭 水社",
    "latlng": [
      23.872,
      120.921
    ],
    "approx": true
  },
  "sunisle": {
    "name": "日嶼早午餐",
    "q": "日嶼早午餐 伊達邵 日月潭",
    "latlng": [
      23.849,
      120.931
    ]
  },
  "ita": {
    "name": "伊達邵碼頭",
    "q": "伊達邵碼頭",
    "latlng": [
      23.849,
      120.929
    ]
  },
  "cruise": {
    "name": "日月潭遊湖",
    "q": "日月潭",
    "latlng": [
      23.857,
      120.923
    ]
  },
  "xiangshan": {
    "name": "向山遊客中心",
    "q": "向山遊客中心",
    "latlng": [
      23.852,
      120.902
    ]
  },
  "oldtea": {
    "name": "日月老茶廠",
    "q": "日月老茶廠 魚池",
    "latlng": [
      23.894,
      120.923
    ]
  },
  "yunnan": {
    "name": "清境晚餐・雲南十八怪",
    "q": "雲南十八怪 景觀餐廳 清境",
    "latlng": [
      24.04,
      121.155
    ]
  },
  "tree": {
    "name": "清境樹屋・雲南風情景觀山莊",
    "q": "雲南風情景觀山莊",
    "latlng": [
      24.04,
      121.155
    ]
  },
  "mos": {
    "name": "清境商場・MOS",
    "q": "摩斯漢堡 清境店 定遠新村26-1號",
    "latlng": [
      24.044,
      121.157
    ]
  },
  "grass": {
    "name": "清境農場・青青草原",
    "q": "清境農場 青青草原",
    "latlng": [
      24.056,
      121.162
    ]
  },
  "dongcaotun": {
    "name": "東草屯休息站",
    "q": "東草屯休息站 玉屏路55-77號",
    "latlng": [
      24.005,
      120.733
    ]
  },
  "home": {
    "name": "北返",
    "q": "新北市",
    "latlng": [
      25.005,
      121.485
    ]
  }
};
const DAYS = [
  {
    "date": "10/8 星期四",
    "title": "夜裡抵達埔里，住進藍色城堡。",
    "direction": "新北 → 埔里。第一晚從城堡的燈光開始。",
    "route": [
      "板橋出發",
      "埔里・藍色城堡"
    ],
    "photo": {
      "file": "record-9184.webp",
      "alt": "夜晚點燈的藍色城堡外觀",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    },
    "stops": [
      {
        "place": "banqiao",
        "time": "出發",
        "title": "從新北往南投",
        "desc": "從板橋出發，到埔里展開四天三夜。出發時間未另補記。",
        "photos": []
      },
      {
        "place": "castle",
        "time": "22:00–23:10",
        "title": "第一晚・藍色城堡",
        "desc": "抵達後留下城堡的夜景。第一晚住在埔里，隔天從城堡開始走。",
        "photos": [
          {
            "file": "record-9184.webp",
            "alt": "藍色城堡夜間外觀",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9139.webp",
            "alt": "城堡入口與夜間燈光",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      }
    ]
  },
  {
    "date": "10/9 星期五",
    "title": "在埔里逛一整天，晚上到魚池。",
    "direction": "藍色城堡 → 日月町 → 埔里酒廠 → Feeling18 LAB → 好客食事処 → 日月潭住宿。",
    "route": [
      "城堡早餐與甜點",
      "日月町",
      "埔里酒廠",
      "Feeling18 LAB",
      "魚池・好客食事処",
      "日月潭湖景住宿"
    ],
    "photo": {
      "file": "record-9257.webp",
      "alt": "日月町白色商場建築",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    },
    "stops": [
      {
        "place": "castle",
        "time": "09:16–11:27",
        "title": "城堡早餐、甜點與公共空間",
        "desc": "早上留在城堡吃早餐與甜點，再出發到埔里。照片選用公共空間與建築。",
        "photos": [
          {
            "file": "record-9197.webp",
            "alt": "城堡木造公共空間",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9200.webp",
            "alt": "白天的藍色城堡外觀",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9202.webp",
            "alt": "城堡室內木造天花板",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "hizuki",
        "time": "12:44–13:44",
        "title": "日月町",
        "desc": "在日月町逛商場、喝飲品，再繼續埔里的下午行程。",
        "photos": [
          {
            "file": "record-9257.webp",
            "alt": "日月町白色建築與戶外廣場",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "brewery",
        "time": "14:23–14:55",
        "title": "埔里酒廠",
        "desc": "到埔里酒廠參觀，照片留下館內酒器展示。",
        "photos": [
          {
            "file": "brewery-space.webp",
            "alt": "埔里酒廠旗艦館展示空間，官方參考照",
            "credit": "台灣菸酒官方",
            "url": "https://event.ttl.com.tw/pl/about/01main.aspx?cateid=248",
            "kind": "reference"
          },
          {
            "file": "record-9289.webp",
            "alt": "埔里酒廠展示的紅色酒器",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "feeling",
        "time": "16:22–17:01",
        "title": "Feeling18 LAB 下午茶",
        "desc": "在 Feeling18 LAB 停留，這一段是咖啡與甜點的時間。",
        "photos": [
          {
            "file": "feelinglab-exterior.webp",
            "alt": "Feeling18 LAB 烘研所外觀，網路參考照",
            "credit": "涼子是也",
            "url": "https://lyes.tw/feeling18-lab/",
            "kind": "reference"
          }
        ]
      },
      {
        "place": "dinner",
        "time": "17:27–18:24",
        "title": "好客食事処晚餐",
        "desc": "離開埔里後到魚池，在好客食事処吃晚餐，接著前往湖景住宿。",
        "photos": [
          {
            "file": "haoke-space.webp",
            "alt": "好客食事処室內空間，官方參考照",
            "credit": "日月潭國家風景區管理處",
            "url": "https://www.sunmoonlake.gov.tw/zh-TW/Shop/Stores?A=45&Id=270&P=2",
            "kind": "reference"
          },
          {
            "file": "record-9361.webp",
            "alt": "好客食事処戶外招牌",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "hotel",
        "time": "第二晚",
        "title": "住在日月潭湖邊",
        "desc": "第二晚的住宿，隔天早晨留下房內湖景。旅宿名稱尚未確認，地圖只標示水社一帶。",
        "photos": [
          {
            "file": "record-9419.webp",
            "alt": "住宿房內窗景與日月潭湖面",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      }
    ]
  },
  {
    "date": "10/10 星期六",
    "title": "從日月潭遊湖，到清境住樹屋。",
    "direction": "湖景住宿 → 日嶼早午餐 → 伊達邵與遊湖 → 向山 → 日月老茶廠 → 清境晚餐與樹屋。",
    "route": [
      "日月潭湖景住宿",
      "日嶼早午餐・伊達邵",
      "日月潭遊湖",
      "向山遊客中心",
      "日月老茶廠",
      "清境・晚餐與樹屋"
    ],
    "photo": {
      "file": "record-9479.webp",
      "alt": "向山遊客中心水池與日月潭景色",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    },
    "stops": [
      {
        "place": "hotel",
        "time": "07:31–11:02",
        "title": "湖景住宿的早晨",
        "desc": "早上從房間望向日月潭，離開住宿後前往伊達邵。",
        "photos": [
          {
            "file": "record-9364.webp",
            "alt": "早晨平靜的日月潭湖面",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9418.webp",
            "alt": "日月潭住宿房間與湖景窗戶",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "sunisle",
        "time": "11:35–12:24",
        "title": "日嶼早午餐",
        "desc": "在伊達邵的日嶼早午餐用餐。照片採店家官方的戶外座位與餐點參考照；餐點照並非當次點餐紀錄。",
        "photos": [
          {
            "file": "sunisle-space.webp",
            "alt": "日嶼戶外木棧板座位，官方參考照",
            "credit": "日嶼官方",
            "url": "https://sunisletw.com/sun-moon-lake-brunch/",
            "kind": "reference"
          },
          {
            "file": "sunisle-food.webp",
            "alt": "日嶼馬告嫩煎雞腿拼盤，官方餐點參考照",
            "credit": "日嶼官方",
            "url": "https://sunisletw.com/sun-moon-lake-brunch/",
            "kind": "reference"
          }
        ]
      },
      {
        "place": "ita",
        "time": "12:51–13:02",
        "title": "伊達邵碼頭",
        "desc": "早午餐後到伊達邵碼頭，接著搭船遊湖。",
        "photos": [
          {
            "file": "ita-0.webp",
            "alt": "伊達邵碼頭八角涼亭與湖景，官方參考照",
            "credit": "日月潭國家風景區管理處",
            "url": "https://www.sunmoonlake.gov.tw/zh-tw/attractions/Attractions?A=20&Id=149",
            "kind": "reference"
          }
        ]
      },
      {
        "place": "cruise",
        "time": "13:02–15:26",
        "title": "搭船遊日月潭",
        "desc": "午後搭船遊湖，照片留下沿途碼頭與湖景。中途碼頭與下船順序尚未完整確認，這裡合併呈現遊湖紀錄。",
        "photos": [
          {
            "file": "record-9444.webp",
            "alt": "遊湖途中碼頭廣場與遠山",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9445.webp",
            "alt": "日月潭碼頭廣場、湖面與山景",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "xiangshan",
        "time": "16:03–16:25",
        "title": "向山遊客中心",
        "desc": "到向山看清水模建築與水池倒影，再前往茶廠。",
        "photos": [
          {
            "file": "record-9479.webp",
            "alt": "向山遊客中心水池倒映山景",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9494.webp",
            "alt": "向山水池與遠方湖面",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "oldtea",
        "time": "16:46–17:07",
        "title": "日月老茶廠",
        "desc": "在日月老茶廠看建築與製茶設備，之後離開湖區往清境。",
        "photos": [
          {
            "file": "record-9550.webp",
            "alt": "日月老茶廠正面外觀",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9537.webp",
            "alt": "日月老茶廠室內製茶設備",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "yunnan",
        "time": "18:52–19:09",
        "title": "清境晚餐",
        "desc": "上山後用晚餐。地點依原行程與照片位置對照雲南十八怪；圖片為餐廳官方外觀參考照。",
        "photos": [
          {
            "file": "yunnan-dinner.webp",
            "alt": "雲南十八怪景觀餐廳外觀，官方參考照",
            "credit": "雲南風情官方",
            "url": "https://www.yunnan.com.tw/",
            "kind": "reference"
          }
        ]
      },
      {
        "place": "tree",
        "time": "第三晚",
        "title": "住進清境樹屋",
        "desc": "第三晚住在清境樹屋。夜間與翌日凌晨的住宿照片歸在同一晚；這裡選用隔天拍攝的建築外觀。",
        "photos": [
          {
            "file": "record-9671.webp",
            "alt": "清境樹屋建築外觀",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      }
    ]
  },
  {
    "date": "10/11 星期日",
    "title": "樹屋早晨、青青草原，再下山北返。",
    "direction": "清境樹屋 → 清境商場與 MOS → 青青草原 → 東草屯休息站 → 北返。",
    "route": [
      "清境樹屋",
      "清境商場・MOS",
      "青青草原",
      "下山・東草屯休息站",
      "北返"
    ],
    "photo": {
      "file": "record-9718.webp",
      "alt": "青青草原與清境山景",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    },
    "stops": [
      {
        "place": "tree",
        "time": "10:35–11:07",
        "title": "樹屋的早晨",
        "desc": "早上在住宿看山景與樹屋，接著前往清境商場。",
        "photos": [
          {
            "file": "record-9609.webp",
            "alt": "樹屋陽台望向層疊山景",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9612.webp",
            "alt": "樹屋陽台與山莊景觀",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9671.webp",
            "alt": "樹屋外觀",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "mos",
        "time": "11:25–11:42",
        "title": "清境商場與 MOS",
        "desc": "在清境商場停留，照片記錄了 MOS 清境店。這裡使用店內點餐區的歷史參考照，並非當次點餐或現行菜單。",
        "photos": [
          {
            "file": "mos-shop.webp",
            "alt": "MOS 清境店點餐區，2015年網路參考照",
            "credit": "PeiGoGo",
            "url": "https://www.peigogo.com/2015/01/mos.html",
            "kind": "reference"
          }
        ]
      },
      {
        "place": "grass",
        "time": "12:27–14:04",
        "title": "青青草原・綿羊與山景",
        "desc": "到清境農場看綿羊、草原與山景，午後再下山。未另記錄表演觀看情形。",
        "photos": [
          {
            "file": "record-9697.webp",
            "alt": "青青草原樹下的綿羊",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9718.webp",
            "alt": "青青草原坡地與清境山景",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "record-9734.webp",
            "alt": "青青草原與遠方山脈",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          }
        ]
      },
      {
        "place": "dongcaotun",
        "time": "15:49–16:11",
        "title": "東草屯休息站",
        "desc": "下山後在國道六號的東草屯休息站休息。以當次站體實拍搭配網路景觀參考照，作為這趟旅程最後一站。",
        "photos": [
          {
            "file": "dongcaotun-scenery.webp",
            "alt": "東草屯休息站建築與山景，網路參考照",
            "credit": "臺北設計獎",
            "url": "https://taipeidaward.taipei/Post/182395",
            "kind": "reference"
          },
          {
            "file": "record-9762.webp",
            "alt": "東草屯休息站戶外建築與山景",
            "credit": "使用者實拍",
            "url": null,
            "kind": "original"
          },
          {
            "file": "dongcaotun-view.webp",
            "alt": "東草屯休息站外觀，新東陽官方參考照",
            "credit": "新東陽官方",
            "url": "https://www.hty.com.tw/location.php?act=view&no=14",
            "kind": "reference"
          }
        ]
      },
      {
        "place": "home",
        "time": "返程",
        "title": "繼續北返",
        "desc": "離開休息站後北返。實際到家時間未補記。",
        "photos": []
      }
    ]
  }
];
const STAYS = [
  {
    "day": 0,
    "place": "castle",
    "date": "10/8・第一晚",
    "title": "埔里・藍色城堡",
    "desc": "城堡夜景，隔天早上再看木造公共空間。",
    "photo": {
      "file": "record-9184.webp",
      "alt": "藍色城堡夜景",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    }
  },
  {
    "day": 1,
    "place": "hotel",
    "date": "10/9・第二晚",
    "title": "日月潭・湖景住宿",
    "desc": "從房內看日月潭。旅宿名稱尚未確認。",
    "photo": {
      "file": "record-9419.webp",
      "alt": "日月潭住宿湖景窗戶",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    }
  },
  {
    "day": 2,
    "place": "tree",
    "date": "10/10・第三晚",
    "title": "清境・樹屋",
    "desc": "依原行程對照雲南風情景觀山莊，選用當次樹屋外觀。",
    "photo": {
      "file": "record-9671.webp",
      "alt": "清境樹屋外觀",
      "credit": "使用者實拍",
      "url": null,
      "kind": "original"
    }
  }
];
const CHECKS = {
  "record": [
    "住宿名稱與房型資料，留作下次旅行參考。",
    "保存交通、住宿與餐廳的原始確認資料。"
  ],
  "pack": [
    "山區保暖外套與雨具。",
    "防滑步行鞋、飲水、常用藥與充電用品。",
    "開車前檢查油量、胎況與雨刷。"
  ]
};
