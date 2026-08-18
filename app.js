document.addEventListener('DOMContentLoaded',()=>{
  const input=document.querySelector('[data-search-input]');
  const items=[...document.querySelectorAll('[data-search-item]')];
  const empty=document.querySelector('[data-search-empty]');
  if(input&&items.length){
    input.addEventListener('input',()=>{
      const q=input.value.trim().toLowerCase();
      let visible=0;
      items.forEach(item=>{
        const hay=(item.dataset.search||item.textContent).toLowerCase();
        const show=!q||hay.includes(q);
        item.classList.toggle('hidden',!show);
        if(show) visible++;
      });
      if(empty) empty.classList.toggle('show',visible===0);
    });
  }
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
