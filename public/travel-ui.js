// Each travel journal keeps its own checklist on this browser.
document.querySelectorAll('[data-packing]').forEach(section=>{
 const key='travel-checks-'+section.dataset.packing;
 const inputs=[...section.querySelectorAll('input[type="checkbox"]')];
 let saved={};try{saved=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{}
 inputs.forEach(input=>{input.checked=saved[input.id]===true;});
 function update(){section.querySelector('[data-progress]').textContent=`已完成 ${inputs.filter(input=>input.checked).length} / ${inputs.length}`;}
 section.addEventListener('change',event=>{if(!inputs.includes(event.target))return;saved[event.target.id]=event.target.checked;try{localStorage.setItem(key,JSON.stringify(saved));}catch{}update();});
 update();
});
