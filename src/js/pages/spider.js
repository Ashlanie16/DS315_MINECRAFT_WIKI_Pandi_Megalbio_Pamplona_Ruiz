// Spider page: the interactive selector in the Combat/Interaction section
// Difficulty selector
const D={Easy:[2,'One bite takes 1 heart. In bright light it stays calm unless you hit it first.'],Normal:[2,'One bite takes 1 heart. In darkness it hunts you; in bright light it ignores you until hit.'],Hard:[3,'One bite takes 1.5 hearts. It may spawn with a random potion effect such as speed or strength.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  const hp=D[k][0]/2,full=Math.floor(hp),half=hp%1?1:0;
  document.getElementById('hearts').textContent='♥'.repeat(full)+(half?'♡':'');
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Normal');
