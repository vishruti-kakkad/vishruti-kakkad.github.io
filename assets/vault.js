(function(){
  const list = document.getElementById('vaultList');
  const q = document.getElementById('q');

  const modal = document.getElementById('modal');
  const mTitle = document.getElementById('mTitle');
  const mSub   = document.getElementById('mSub');
  const mBody  = document.getElementById('mBody');
  const close  = document.getElementById('mClose');
  const backdrop = modal ? modal.querySelector('.backdrop') : null;

  const SHOW_CITES = (window.VK_SHOW_CITATIONS === true);

  const esc = (s)=>String(s||"").replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
  }[ch]));

  
  const chipColor = (name)=>{
    const s = String(name||"").toLowerCase();

    // governance / compliance / policy
    const blue = ["nist","iso","soc","gdpr","hipaa","pci","cra","eu","audit","risk","policy","governance","compliance","ssdf","csf","800-53","800-218","privacy","regulatory"];
    if(blue.some(k=>s.includes(k))) return "blue";

    // offensive / red-team leaning
    const red = ["nmap","metasploit","sqlmap","burp","hydra","hashcat","john","aircrack","gobuster","nikto","wfuzz","ffuf","exploit","payload","recon","pentest","kali"];
    if(red.some(k=>s.includes(k))) return "red";

    return "purple"; // build/defense default
  };

const rawItems = Array.isArray(window.VK_VAULT_ITEMS) ? window.VK_VAULT_ITEMS : [];
  const items = rawItems.map(x=>({
    ...x,
    metrics: x.metrics || x.metric || "",
    venue: x.venue || "",
    subtitle: x.subtitle || "",
    preview: x.preview || "",
    tags: Array.isArray(x.tags) ? x.tags : [],
    bullets: Array.isArray(x.bullets) ? x.bullets : [],
    _hay: ((x.title||"")+" "+(x.venue||"")+" "+(x.subtitle||"")+" "+(x.preview||"")+" "+((x.tags||[]).join(" "))).toLowerCase()
  }));

  function render(){
    if(!list) return;
    const term = (q && q.value ? q.value : "").trim().toLowerCase();
    list.innerHTML = "";

    const filtered = term ? items.filter(it => it._hay.includes(term)) : items;

    filtered.forEach(it=>{
      const el = document.createElement('div');
      el.className = 'pitem';

      const citeChip = (SHOW_CITES)
        ? '<span class="metaChip">Citations: <span class="citecount" data-id="'+esc(it.id||"")+'" data-title="'+esc(it.title||"")+'">…</span></span>'
        : '';

      const metricChip = (it.metrics)
        ? '<span class="metaChip">'+esc(it.metrics)+'</span>'
        : '';

      el.innerHTML =
        '<div class="ptop">'
          + '<div class="ptitle">'+esc(it.title||"Untitled")+'</div>'
          + '<div class="pyear">'+esc(it.year||"")+'</div>'
        + '</div>'
        + '<div class="psub">'+esc(it.preview || it.subtitle || it.venue || "")+'</div>'
        + '<div class="pmeta">'+ citeChip + metricChip + '</div>';

      el.addEventListener('click', ()=> openItem(it));
      list.appendChild(el);
    });

    setTimeout(updateCitations, 30);
  }

  function openItem(it){
    if(!modal) return;

    if(mTitle) mTitle.textContent = it.title || "Untitled";
    if(mSub)   mSub.textContent = [it.venue, it.year].filter(Boolean).join(" • ");

    const link = it.url ? '<a class="btn" href="'+esc(it.url)+'" target="_blank" rel="noopener">Open</a>' : "";
    const metrics = it.metrics ? '<div class="kv"><div class="k">Metric</div><div class="v">'+esc(it.metrics)+'</div></div>' : "";
    const chips = Array.isArray(it.chips) ? it.chips : [];
    const chipsHtml = (chips.length)
      ? '<div class="kv"><div class="k">Skills</div><div class="v">'
          + chips.map(c=>'<span class="chip '+chipColor(c)+'" style="margin-right:6px; margin-bottom:6px;">'+esc(c)+'</span>').join("")
        + '</div></div>'
      : "";

    const tagsHtml = (it.tags && it.tags.length)
      ? '<div class="kv"><div class="k">Tags</div><div class="v">' + it.tags.map(t=>'<span class="chip" style="margin-right:6px;">'+esc(t)+'</span>').join("") + '</div></div>'
      : "";
    const bulletsHtml = (it.bullets && it.bullets.length)
      ? '<div class="kv"><div class="k">Details</div><div class="v"><ul class="bullets">' + it.bullets.map(b=>'<li>'+esc(b)+'</li>').join("") + '</ul></div></div>'
      : "";

    if(mBody){
      mBody.innerHTML =
        '<div class="kv"><div class="k">Type</div><div class="v">'+esc(it.subtitle||"")+'</div></div>'
        + '<div class="kv"><div class="k">Summary</div><div class="v">'+esc(it.preview||"")+'</div></div>'
        + chipsHtml
        + tagsHtml
        + bulletsHtml
        + metrics
        + '<div style="margin-top:14px; display:flex; gap:10px;">'+link+'<button class="btn ghost" id="copyLink">Copy link</button></div>';
    }

    const copyBtn = document.getElementById('copyLink');
    if(copyBtn){
      copyBtn.addEventListener('click', (e)=>{
        e.stopPropagation();
        try{
          const u = it.url || window.location.href;
          navigator.clipboard.writeText(u);
          copyBtn.textContent = "Copied";
          setTimeout(()=> copyBtn.textContent="Copy link", 900);
        }catch(_){}
      });
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }

  function closeModal(){
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  function wireModal(){
    if(close) close.addEventListener('click', closeModal);
    if(backdrop) backdrop.addEventListener('click', closeModal);
    window.addEventListener('keydown', (e)=>{ if(e.key === "Escape") closeModal(); });
  }

  async function updateCitations(){
    if(!SHOW_CITES) return;

    const nodes = Array.from(document.querySelectorAll('.citecount[data-title]'));
    if(!nodes.length) return;

    // cached (works even if you open via file://)
    try{
      const cache = window.VK_CITATIONS || { updated:"", items:{} };
      const map = cache.items || {};
      for(const n of nodes){
        const id = (n.getAttribute('data-id')||"").trim();
        if(id && Object.prototype.hasOwnProperty.call(map, id)){
          const v = map[id];
          n.textContent = (v===null || v===undefined || v==="") ? "—" : String(v);
          n.setAttribute('data-done','1');
        }
      }
      const stamp = document.getElementById('citeUpdated');
      if(stamp && cache.updated) stamp.textContent = "Updated: " + cache.updated;
    }catch(_){}

    // live refresh only when hosted
    let canLive = false;
    try{ canLive = (location.protocol === "http:" || location.protocol === "https:"); }catch(_){ canLive = false; }
    if(!canLive) return;

    for(const n of nodes){
      if(n.getAttribute('data-done')) continue;
      const title = (n.getAttribute('data-title')||"").trim();
      if(!title) continue;

      n.textContent = "…";
      try{
        const url = "https://api.semanticscholar.org/graph/v1/paper/search?query="+encodeURIComponent(title)+"&limit=1&fields=citationCount";
        const res = await fetch(url, { headers: { "Accept":"application/json" }});
        if(!res.ok) throw new Error("bad response");
        const j = await res.json();
        const hit = (j.data && j.data[0]) ? j.data[0] : null;
        n.textContent = (hit && typeof hit.citationCount === "number") ? String(hit.citationCount) : "—";
      }catch(_){
        n.textContent = "—";
      }
      n.setAttribute('data-done','1');
      await new Promise(r=>setTimeout(r, 160));
    }
  }

  function boot(){
    wireModal();
    if(q) q.addEventListener('input', render);
    render();
  }

  boot();
})();
