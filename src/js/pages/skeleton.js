// Skeleton page: the interactive selector in the Combat/Interaction section
// Phase selector
const D={"Sunlight": ["It burns", "A skeleton in daylight catches fire and takes damage until it is in shade or water."], "Wolf nearby": ["It flees", "Skeletons run away from wolves, so a tamed wolf is a good guard."], "Shield": ["Arrow blocked", "A shield blocks most arrows. Hold it up while approaching."], "Close range": ["It backs off", "At close range a skeleton tries to keep away and keeps shooting."]};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Sunlight');
