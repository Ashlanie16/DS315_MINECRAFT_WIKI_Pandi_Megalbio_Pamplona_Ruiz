// Iron Golem page: the interactive selector in the Combat/Interaction section
// Difficulty selector
const D={Undamaged:[100,'Full health. No cracks. It takes 0 iron ingots to repair.'],'Low damage':[75,'Light cracks appear. 1 iron ingot restores it to full.'],'Medium damage':[50,'Heavy cracks. 2 iron ingots restore it to full.'],'High damage':[25,'Nearly broken. 3 iron ingots restore it to full.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  const full=Math.ceil(D[k][0]/10),half=0;
  document.getElementById('hearts').textContent='♥'.repeat(full)+' '+D[k][0]+' health';
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Undamaged');
