// Enderman page: the interactive selector in the Combat/Interaction section
// Phase selector
const D={"Look at it": ["Angry!", "If you look at its head, it becomes hostile and attacks you."], "Carved pumpkin": ["Calm", "Wearing a carved pumpkin on your head keeps it from being angered by your gaze."], "Water": ["It takes damage", "Water hurts an Enderman, and it will teleport away to avoid it."], "Low ceiling": ["Safe", "A gap two blocks high keeps it out, since it is almost three blocks tall."]};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Look at it');
