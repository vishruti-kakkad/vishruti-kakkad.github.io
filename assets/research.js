(function(){
  const DATA = window.VK_DATA;
  const list = document.getElementById('papers');
  const modal = document.getElementById('modal');
  const mTitle = document.getElementById('mTitle');
  const mSub = document.getElementById('mSub');
  const mBody = document.getElementById('mBody');
  const close = document.getElementById('mClose');
  const back = document.getElementById('mBack');

  if(!list) return;

  const esc = (s)=> (s||"").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  function openPaper(p){
    mTitle.textContent = p.title || "Paper";
    mSub.textContent = p.year ? `Year: ${p.year}` : "Publication";
    mBody.innerHTML = `
      <div class="card" style="margin-top:8px;">
        <div class="pad" style="font-family: var(--mono); font-size: 13px; line-height: 1.7;">
          ${esc(p.raw || "")}
        </div>
      </div>
      <p class="sub" style="margin-top:10px;">Want this to feel like a real archive? Add PDF links / DOI and a one-paragraph abstract per paper.</p>
    `;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }
  close?.addEventListener('click', closeModal);
  back?.addEventListener('click', closeModal);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

  const items = (DATA.papers || []);
  list.innerHTML = "";
  items.forEach((p, i)=>{
    const el = document.createElement('button');
    el.type = "button";
    el.className = "pitem";
    el.innerHTML = `
      <div class="ptop">
        <div class="ptitle">${esc(p.title || "Untitled")}</div>
        <div class="pyear">${esc(p.year || "")}</div>
      </div>
      <div class="psub">${esc((p.raw||"").slice(0, 180))}${(p.raw||"").length>180?"…":""}</div>
    `;
    el.addEventListener('click', ()=> openPaper(p));
    list.appendChild(el);
  });

  if(items.length===0){
    const empty = document.createElement('div');
    empty.className = "card";
    empty.innerHTML = `<div class="pad"><b>No publications found.</b><p class="sub">If you paste titles/DOIs, I can build the library anyway.</p></div>`;
    list.appendChild(empty);
  }
})();
