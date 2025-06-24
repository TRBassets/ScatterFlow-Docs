/* highlight nav + auto‑open panel */
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',()=>{
    document.querySelectorAll('nav a').forEach(l=>l.classList.remove('active'));
    link.classList.add('active');
    const id=link.getAttribute('href').slice(1);
    const panel=document.getElementById(id);
    if(panel && !panel.open) panel.open=true;
  });
});
