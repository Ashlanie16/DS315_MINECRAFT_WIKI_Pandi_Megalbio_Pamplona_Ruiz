// Wither page: the interactive selector in the Combat/Interaction section
// Phase selector
const D={Summoning:['Phase: Summoning','The Wither charges up for about 11 seconds and cannot be hurt. Then it explodes. Stay far away.'],Active:['Phase: Active','It flies and fires wither skulls at nearby mobs. Fight it with a sword and a shield.'],Armored:['Phase: Armored (below half health)','It gains armor and takes no arrow damage. You must fight it up close with a sword.'],Defeated:['Phase: Defeated','It drops a nether star, which is used to craft a beacon.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Summoning');
