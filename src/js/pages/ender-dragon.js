// Ender Dragon page: the interactive selector in the Combat/Interaction section
// Phase selector
const D={Circling:['Phase: Circling','The dragon flies around the island. Shoot it with a bow, but its main focus is healing from crystals.'],Strafing:['Phase: Strafing','It flies at you and spits acid fireballs. Keep moving and use cover.'],Perched:['Phase: Perched','It lands on the exit portal and breathes lingering acid. Hit its head with a sword for extra damage.'],Charging:['Phase: Charging','It dives straight at you and can launch you. Do not stand in its path.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Circling');
