// Zombie page: the interactive selector in the Combat/Interaction section
// Difficulty selector
const D={Easy:[2,'One hit takes 1 heart. Villagers are never converted.'],Normal:[3,'One hit takes 1.5 hearts. Villagers convert about half the time.'],Hard:[4,'One hit takes 2 hearts. Doors can be broken and reinforcements may arrive.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  const hp=D[k][0]/2,full=Math.floor(hp),half=hp%1?1:0;
  document.getElementById('hearts').textContent='♥'.repeat(full)+(half?'♡':'');
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Normal');
