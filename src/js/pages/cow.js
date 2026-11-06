// Cow page: the interactive selector in the Combat/Interaction section
// Difficulty selector
const D={Hand:['♥♥♥♥♥','Nothing happens. A cow cannot be ridden or tamed.'],Bucket:['♥♥♥♥♥','The bucket fills with milk and the cow is unharmed. Baby cows cannot be milked.'],Wheat:['♥♥♥♥♥ ❤','The cow enters love mode. Feed two cows and they produce a baby cow.'],Sword:['♥♥','An iron sword hit deals 6 damage, leaving 4 health. The cow runs away in panic.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Hand');
