(function(){
 const trips={
  '2026-nantou-double-ten':{name:'南投雙十旅行',color:'#254c43'},
  '2026-jiufen-sunny':{name:'九份山海旅行',color:'#936443'},
  '2026-star-navigator':{name:'探索星號郵輪旅行',color:'#397786'}
 };
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function links(nodes){return nodes.map(n=>`<li><a href="${n.href}">${esc(n.name)} ↗</a><small>${esc(n.note)}</small></li>`).join('');}
 document.getElementById('atlas-nodes').innerHTML=Object.entries(trips).map(([key,trip])=>`<details><summary>${trip.name} · ${TRAVEL_NODES.filter(n=>n.trip===key).length} 個節點</summary><ul class="atlas-node-list">${links(TRAVEL_NODES.filter(n=>n.trip===key))}</ul></details>`).join('');
 const container=document.getElementById('world-map');
 if(!window.L){container.innerHTML='<p class="map-loading">地圖暫時無法載入。可從下方地點清單或旅行卡片開啟各段行程。</p>';return;}
 container.innerHTML='';
 const map=L.map('world-map',{scrollWheelZoom:false,minZoom:0,maxZoom:17,worldCopyJump:true});
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
 const markers=L.layerGroup().addTo(map);
 function addMarker(ll,label,nodes,color,permanent=false){
  const icon=L.divIcon({className:'journey-pin',html:`<span style="background:${color}"></span>`,iconSize:[24,30],iconAnchor:[12,28],tooltipAnchor:[14,-20]});
  L.marker(ll,{icon,title:label+'：查看行程節點',alt:label+'旅行節點'})
   .bindTooltip(label+(nodes.length>1?` · ${nodes.length} 個節點`:''),{permanent,direction:'right',className:'map-label'})
   .bindPopup(`<b>${esc(label)}</b><ul class="atlas-node-list">${links(nodes)}</ul>`,{maxWidth:310,maxHeight:260}).addTo(markers);
 }
 function updateMarkers(){
  markers.clearLayers();
  const sea=TRAVEL_NODES.filter(n=>n.latlng[1]>122),land=TRAVEL_NODES.filter(n=>n.latlng[1]<=122);
  if(map.getZoom()<6){addMarker([24.4,121],'台灣 · 3 趟旅行',land,'#254c43',true);addMarker([24.5,122.85],'與那國島附近海域',sea,'#397786',false);return;}
  if(map.getZoom()<10){
   const regions=[['新北出發與返程',[25.005,121.485],land.filter(n=>n.latlng[1]<121.6&&n.latlng[0]>24.8),'#254c43'],['埔里',[23.966,120.967],land.filter(n=>n.latlng[0]<24&&n.latlng[0]>23.94),'#254c43'],['日月潭與魚池',[23.88,120.925],land.filter(n=>n.latlng[0]<23.94),'#254c43'],['清境',[24.045,121.157],land.filter(n=>n.latlng[0]>=24&&n.latlng[0]<24.8),'#254c43'],['九份山城',[25.109,121.845],land.filter(n=>n.trip==='2026-jiufen-sunny'&&n.latlng[1]>=121.8&&n.latlng[1]<121.85),'#936443'],['陰陽海',[25.122,121.863],land.filter(n=>n.trip==='2026-jiufen-sunny'&&n.latlng[1]===121.863),'#936443'],['金沙灣海濱公園',[25.034,121.923],land.filter(n=>n.trip==='2026-jiufen-sunny'&&n.latlng[1]===121.923),'#936443'],['基隆港 · 郵輪',[25.155,121.75],land.filter(n=>n.trip==='2026-star-navigator'&&n.latlng[1]>121.6),'#397786']];
   regions.forEach(([label,ll,nodes,color])=>{if(nodes.length)addMarker(ll,label,nodes,color);});
  }else{
   const grouped=new Map();
   land.forEach(n=>{const key=n.latlng.join(',');if(!grouped.has(key))grouped.set(key,[]);grouped.get(key).push(n);});
   grouped.forEach(nodes=>addMarker(nodes[0].latlng,nodes.length===1?nodes[0].name:nodes.map(n=>n.name).slice(0,2).join(' / '),nodes,trips[nodes[0].trip].color));
  }
  addMarker([24.5,122.85],'與那國島附近海域 · 巡遊示意',sea,'#397786',true);
 }
 map.on('zoomend',updateMarkers);
 document.getElementById('world-view').onclick=()=>map.fitWorld({padding:[15,15]});
 function fit(nodes){map.fitBounds(L.latLngBounds(nodes.map(n=>n.latlng)),{padding:[45,45],maxZoom:12});}
 document.getElementById('taiwan-view').onclick=()=>fit(TRAVEL_NODES);
 document.getElementById('nantou-view').onclick=()=>fit(TRAVEL_NODES.filter(n=>n.trip==='2026-nantou-double-ten'&&n.latlng[0]<24.8));
 document.getElementById('jiufen-view').onclick=()=>fit(TRAVEL_NODES.filter(n=>n.trip==='2026-jiufen-sunny'&&n.latlng[1]>121.8));
 document.getElementById('cruise-view').onclick=()=>fit(TRAVEL_NODES.filter(n=>n.trip==='2026-star-navigator'));
 document.getElementById('taiwan-view').click();updateMarkers();
})();
