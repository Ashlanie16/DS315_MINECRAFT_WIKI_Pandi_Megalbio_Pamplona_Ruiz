// Witch page: the interactive selector in the Combat/Interaction section
// Phase selector
const D={"Harming": ["Instant damage", "Deals instant damage when it lands near you."], "Poison": ["Poison", "Slowly drains your health, though it will not kill you."], "Slowness": ["Slowness", "Slows your movement for a short time."], "Weakness": ["Weakness", "Lowers the damage of your attacks."]};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Harming');
