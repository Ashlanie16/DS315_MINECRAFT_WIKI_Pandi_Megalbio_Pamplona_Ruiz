// Creeper page: the interactive selector in the Combat/Interaction section
// Phase selector
const D={"Approaching": ["Creeper: 20 health (10 hearts)", "It walks quietly toward you and stops about 3 blocks away to start the fuse."], "Fuse lit": ["Fuse: about 1.5 seconds", "It swells up and flashes white. Back away or hit it to cancel the explosion."], "Charged": ["Charged creeper", "Hit by lightning, it explodes with a much larger blast. Stay far away."], "Shot by skeleton": ["Music disc", "If a skeleton kills a creeper with an arrow, it drops a music disc."]};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Approaching');
