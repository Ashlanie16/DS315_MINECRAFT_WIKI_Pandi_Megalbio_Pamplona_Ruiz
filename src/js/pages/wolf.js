// Wolf page: the interactive selector in the Combat/Interaction section
// Item selector
const D={Hand:['♥♥♥♥','A wild wolf ignores you. A tamed wolf sits down or stands up.'],Bone:['♥♥♥♥ → 20 ♥ once tamed','Each bone has a 1 in 3 chance to tame a wild wolf. A tamed wolf gets a red collar and 40 health.'],Meat:['♥♥♥♥','Heals a tamed wolf. Feed two tamed wolves meat to breed them.'],Dye:['♥♥♥♥','Changes the color of a tamed wolf’s collar.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Hand');
