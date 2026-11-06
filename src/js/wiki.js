// Contents list is built from the h2 headings on the page
const heads=[...document.querySelectorAll('.body h2')];
const list=document.getElementById('tocList');
list.innerHTML=heads.map(h=>`<li><a href="#${h.id}">${h.textContent}</a></li>`).join('');
const links=[...list.querySelectorAll('a')];
document.getElementById('tocBtn').onclick=e=>{
  const open=list.hidden;list.hidden=!open;
  e.target.textContent=open?'[hide]':'[show]';e.target.setAttribute('aria-expanded',open);
};
// Highlight the section currently being read
const io=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){
  links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+en.target.id));}});},{rootMargin:'0px 0px -70% 0px'});
heads.forEach(h=>io.observe(h));
// Infobox tabs
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.tabs button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.pane').forEach(p=>p.hidden=p.dataset.p!==b.dataset.t);
});
// Search box: send the search to the home page
const si=document.querySelector('header input');
if(si)si.addEventListener('keydown',e=>{if(e.key==='Enter'&&si.value.trim())location.href='../index.html?q='+encodeURIComponent(si.value.trim())});
