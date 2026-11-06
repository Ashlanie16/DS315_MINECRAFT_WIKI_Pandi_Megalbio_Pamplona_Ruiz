// Home page: filter buttons, search, picture cards, featured mob
const cats=['All','Hostile','Neutral','Passive','Bosses'];
const grid=document.getElementById('grid'),q=document.getElementById('q'),empty=document.getElementById('empty');
let cat='All';
const href=m=>'pages/'+m.slug+'.html';
function render(){
  const t=q.value.trim().toLowerCase();
  const list=MOBS.filter(m=>(cat==='All'||m.cat===cat)&&(!t||m.name.toLowerCase().includes(t)||m.type.toLowerCase().includes(t)));
  grid.innerHTML=list.map(m=>`<a class="card" href="${href(m)}"><div class="im"><img src="assets/img/${m.slug}.png" alt="${m.name}"></div><div class="tx"><b>${m.name}</b><small>${m.type}</small></div></a>`).join('');
  empty.style.display=list.length?'none':'block';
  document.querySelectorAll('#filters button').forEach(b=>b.classList.toggle('on',b.textContent===cat));
}
const f=document.getElementById('filters');
cats.forEach(c=>{const b=document.createElement('button');b.textContent=c;b.onclick=()=>{cat=c;render()};f.appendChild(b)});
q.addEventListener('input',render);
function feature(){
  const m=MOBS[Math.floor(Math.random()*MOBS.length)];
  const a=document.getElementById('feat');a.href=href(m);
  a.innerHTML=`<div class="im"><img src="assets/img/${m.slug}.png" alt="${m.name}"></div><b>${m.name}</b><br><small>${m.type}</small>`;
}
document.getElementById('rand').onclick=e=>{e.preventDefault();location.href=href(MOBS[Math.floor(Math.random()*MOBS.length)])};
document.getElementById('count').textContent=MOBS.length;
document.getElementById('stats').innerHTML=cats.slice(1).map(c=>`<div class="row"><span>${c}</span><b>${MOBS.filter(m=>m.cat===c).length}</b></div>`).join('')+`<div class="row"><span>Total articles</span><b>${MOBS.length}</b></div>`;
const p=new URLSearchParams(location.search);if(p.get('q'))q.value=p.get('q');
const h=location.hash.slice(1);if(cats.includes(h))cat=h;
window.addEventListener('hashchange',()=>{const x=location.hash.slice(1);if(cats.includes(x)){cat=x;render()}});
feature();render();
