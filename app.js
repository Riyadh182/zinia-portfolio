'use strict';
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu()});
const sample={daily:{customers:18,values:[9600,7200,4800,3000]},monthly:{customers:426,values:[226000,174000,116000,82000]},yearly:{customers:5112,values:[2712000,2088000,1392000,984000]}};
const names=['Hair','Skin','Make-up','Other'];
const number=n=>Math.round(n).toLocaleString('en-US');
function render(period){const d=sample[period],total=d.values.reduce((a,b)=>a+b,0);document.querySelector('#customers').textContent=number(d.customers);document.querySelector('#earnings').textContent='৳ '+number(total);document.querySelector('#commission').textContent='৳ '+number(total*.2);document.querySelector('#average').textContent='৳ '+number(total/d.customers);const chart=document.querySelector('#chart');chart.replaceChildren();d.values.forEach((value,i)=>{const row=document.createElement('div');row.className='bar-row';const label=document.createElement('span');label.textContent=names[i];const track=document.createElement('div');track.className='bar-track';track.setAttribute('aria-hidden','true');const fill=document.createElement('div');fill.className='bar-fill';fill.style.width=(value/Math.max(...d.values)*100)+'%';track.append(fill);const v=document.createElement('b');v.textContent=number(value);row.append(label,track,v);chart.append(row)});document.querySelectorAll('[data-period]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.period===period)))}
document.querySelectorAll('[data-period]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.period)));render('daily');
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('Ziniya.ta@gmail.com');status.textContent='Email address copied.'}catch{status.textContent='Copy this address: Ziniya.ta@gmail.com'}});
try{const u=new URL(window.PORTFOLIO_CONFIG?.portfolioUrl);if(['https:','http:'].includes(u.protocol))document.querySelectorAll('[data-portfolio-link]').forEach(a=>a.href=u.href)}catch{}
