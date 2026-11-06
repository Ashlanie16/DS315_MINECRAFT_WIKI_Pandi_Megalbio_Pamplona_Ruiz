// Villager page: the interactive selector in the Combat/Interaction section
// Profession selector
const D={Farmer:['Workstation: Composter','Buys wheat, carrots, potatoes, and beetroot for emeralds. Sells bread and pumpkin pie.'],Librarian:['Workstation: Lectern','Sells enchanted books and bookshelves. A good source of Mending.'],Armorer:['Workstation: Blast furnace','Sells armor and buys coal and iron.'],Cleric:['Workstation: Brewing stand','Sells redstone, lapis lazuli, and ender pearls.'],Mason:['Workstation: Stonecutter','Sells bricks, terracotta, and polished stone.']};
const opts=document.querySelector('#diff .opts');
function show(k){
  [...opts.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
  
  document.getElementById('hearts').textContent=D[k][0];
  document.getElementById('dtext').textContent=D[k][1];
}
Object.keys(D).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);opts.appendChild(b)});
show('Farmer');
