// script.js — minimal UX helpers (no nested accordions)

// Deep-linking: open top-level section when hash targets content inside it.
(function(){
  function openFromHash(){
    const id = decodeURIComponent(location.hash.replace('#',''));
    if(!id) return;
    const target = document.getElementById(id);
    if(!target) return;

    // Find the nearest top-level <details.section> and open it
    let p = target;
    while(p && !(p.tagName === 'DETAILS' && p.classList.contains('section'))){
      p = p.parentElement;
    }
    if(p) p.open = true;

    // Scroll into view
    setTimeout(()=>target.scrollIntoView({behavior:'smooth', block:'start'}), 80);
  }

  window.addEventListener('hashchange', openFromHash);
  document.addEventListener('DOMContentLoaded', openFromHash);
})();
