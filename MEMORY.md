# 專案工作記憶

更新日期：2026-10-14（Asia/Taipei）。

## 最新完成：南投旅行頁住宿與照片修正

- 使用者更正 10/9 第二晚住宿為原計畫的「米洛克景觀飯店」；已更新 PLACES 地圖搜尋、10/9 住宿敘述、10/10 早晨行程、住宿卡、路線總覽與首頁旅行地圖節點。公開地址參考中正路 3 號；座標維持與當次住宿照片 GPS 相符的水社概略座標。
- 10/10 日嶼早午餐加入使用者提供的餐點截圖 `sunisle-breakfast.webp`，並保留店家參考照片；來源圖在 OneDrive Screenshots，不屬於私密素材資料夾。
- 向山遊客中心新增 `record-9478-cropped.webp`。照片下方人群已透過裁切完全移除，遵守公開頁排除使用者與女友人物照的要求；原始照片未修改。
- 10/10 晚餐明確標示「雲南十八怪景觀餐廳」，第三晚改為雲南風情景觀山莊「僾伲樹屋」（官方採用此字形）。更新兩張深夜星空照 `record-9607.webp`、`record-9608.webp` 與第三晚住宿卡。照片和其他新增圖片皆以 WebP 儲存並清除 EXIF/GPS；星空照沒有可辨識人物。
- 保留樹屋外觀照。餐廳與住宿在同一山莊；行程文字記錄使用者提供的屋頂觀景台與當晚滿天星空體驗。雲南風情官方網站描述樹屋觀景設施。
- 修改路線圖日期標記的 SVG 互動：底色矩形可能攔截空白區點擊；已設定背景不接收指標事件，互動標籤正常。原先為裝飾用途的 SVG 角色改為 group。
- 私人 QA 腳本 `planning/nantou-202610/qa-update.cjs` 驗證通過：米洛克飯店資料、早餐與向山及星空圖資存在、地圖連結可切換行程、390／768／1280px 無水平溢出、沒有頁面 JavaScript 錯誤。
- 2026-10-14 已部署 Cloudflare Workers，Version ID：`9c05fe66-adde-4332-8274-f6639cc1bb8e`。正式頁 https://traveling.musicallanding.workers.dev/2026-nantou-double-ten/；確認頁面／資料 HTTP 200，四張新增 WebP 均 HTTP 200、Content-Type image/webp。
- 最近 Git commits：`a66c65e`（重繪南投四日路線圖）、`82d1ca9`（住宿與實拍更新）。**尚未推送至 origin/main**；遠端仍停在 `fd67a3b`，但 Cloudflare 線上版本已部署最新內容。重開專案後留意同步 Git 遠端。
- `MEMORY.md` 和 `planning/` 都是本機未追蹤資料；不可將整個 `planning/` 推送，因裡面有私人照片分析／預覽。網站公開素材僅在 `public/`。
- 已核准照片 manifest `planning/nantou-202610/published-photo-manifest.json` 更新為 38 張；其中 4 張是本次新增核可圖。原始旅行照片均保留不動。

## 下次 RESUME

先讀取本檔，使用繁體中文提供簡短 BRIEF，交代已完成工作、Git／部署狀態與待辦事項，再接續使用者的新指示。使用者明確要求下次 RESUME 後進行繁體中文 BRIEF。

以下為 10/8 原工作歷史紀錄，部署與節點數以本節為準。

## 下次 RESUME

先讀取本檔，使用繁體中文提供簡短 BRIEF，交代已完成工作、Git／部署狀態與待辦事項，再接續使用者的新指示。使用者明確要求下次 RESUME 後進行繁體中文 BRIEF。

## 專案與正式環境

- 工作目錄：`C:\Agent\Traveling`。
- GitHub：`https://github.com/leoleehr/traveling.git`；遠端 `origin`；主分支 `main`。
- 正式網站：`https://traveling.musicallanding.workers.dev/`。
- 網站為靜態檔案，位於 `public/`；Cloudflare Worker 名稱 `traveling`，設定見 `wrangler.jsonc`。
- README 原先描述 Cloudflare Pages，但實際正式環境是上述 Workers 網址。不要將 `traveling.pages.dev` 當成此專案的正式網站。
- 已完成 Cloudflare Wrangler 登入；部署指令：`npx --yes wrangler deploy`。登入是否仍有效需視下一次實際執行結果判斷。

## 已完成工作

依使用者要求，將三趟旅行的地點與活動對應至首頁地圖，並統一旅行頁導覽。

- 首頁提供 49 個節點：南投 18 個、九份 15 個、探索星號郵輪 16 個。
- 補入陰陽海、金沙灣海濱公園與與那國島附近海域等原先缺少的標記。
- 相同區域或座標合併顯示；點選可展開各段行程連結。首頁另有完整節點清單，地圖載入失敗時仍可使用。
- 郵輪海域標明方向示意，非實際航跡或登岸點；船上活動歸入登船、巡遊或回港節點。
- 三趟旅行主選單統一為「地圖指南」、「每日行程」、「行前清單」；原「看懂方向」已更名。
- 南投保留既有清單；九份與郵輪依原行程新增住宿／交通確認、行李與活動準備清單，明確標示為補充建議，不推定當時已完成。
- 新清單勾選結果以 localStorage 分旅行保存，僅限目前裝置與瀏覽器。
- 南投支援 `?day=2&place=tree#journey` 類型的日期與地點連結。
- 已將上述要求補入 `TRAVEL_PAGE_GUIDELINES.md`，後續新增或修改旅行頁時遵循。

## 主要檔案

- `public/index.html`：首頁與地圖工具列、完整節點清單容器。
- `public/travel-map-data.js`：49 個節點資料，概略座標與對應行程連結。
- `public/travel-map.js`：Leaflet 地圖、不同縮放視角、合併標記與彈出清單。
- `public/travel-ui.css`、`public/travel-ui.js`：九份與郵輪的共用清單樣式、勾選保存與進度。
- `public/2026-jiufen-sunny/index.html`、`public/2026-star-navigator/index.html`：導覽、每日行程錨點與新增清單。
- `public/2026-nantou-double-ten/index.html`、`app.js`：導覽名稱與日期／地點連結處理。

## Git 與部署

- 已 commit 並 push 至 `origin/main`：`507a335`，訊息 `Map all travel nodes and unify trip navigation and checklists`。
- 已使用 Wrangler 部署成功；Version ID：`268432ab-2363-4fa4-9105-962156fdecd4`。
- 部署後確認首頁、三個旅行頁、南投 app.js 及四個新增共用檔案均回傳 HTTP 200，內容與本機提交版本一致。
- 部署剛完成時曾短暫讀到舊內容或 404；後續使用新的查詢參數與 no-cache 請求確認全部更新完成。
- `.wrangler/` 是本機產物，已在 `.git/info/exclude` 排除。
- 寫入本記憶前工作目錄乾淨，`main` 與 `origin/main` 同步。本記憶檔僅存於本機，未另行 commit、push 或 deploy。

## 驗證與待辦

- Playwright／Edge headless 驗證通過：49 個節點錨點、全部地圖視角與彈出清單、三頁導覽、清單保存、南投日期／地點連結。
- 390px 手機與 1280px 桌面沒有水平溢出；未出現瀏覽器程式錯誤；`git diff --check` 通過。
- 一次性修改與 QA 腳本已刪除。Playwright 安裝於本機暫存目錄 `traveling-qa`，不屬於 repo。
- 原工作已全部完成，沒有待部署修改。下一步依使用者新指示進行。
- 地圖座標目前刻意使用區域概略位置，不能當作店家精確門牌或真實船位；實際導航使用行程內 Google Maps。
