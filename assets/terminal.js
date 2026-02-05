(function(){
  const screen = document.getElementById('screen');
  const cmd = document.getElementById('cmd');
  const send = document.getElementById('send');
  if(!screen || !cmd || !send) return;

  const DATA = window.VK_DATA || {};
  const C = (DATA.person && DATA.person.contact) || {};

  // Hard rule: keep the public command surface tiny.
  // Visible commands (4): help, whoami, open <field>, game
  const VISIBLE = ["help","whoami","open","game"];

  function esc(s){
    return (s||"").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function line(html){
    const div = document.createElement('div');
    div.innerHTML = html;
    screen.appendChild(div);
    screen.scrollTop = screen.scrollHeight;
  }

  function boot(){
    line(`<span class="prompt">vk@lab:~$</span> <span class="dim">boot</span>`);
    line(`<span class="dim">[ok]</span> terminal online • modules ready`);
    line(`<span class="dim">commands:</span> <b>${VISIBLE.join("</b> • <b>")}</b>`);
  }

  function help(){
    line(`<span class="dim">visible commands (5):</span> <b>${VISIBLE.join("</b> • <b>")}</b>`);
    line(`<span class="dim">game:</span> classic pong-style game`);
  }

  function whoami(){
    line(`${esc(DATA.person?.name || "Vishruti Kakkad")} — <span class="dim">${esc(DATA.person?.headline || "")}</span>`);
    line(`<span class="dim">location:</span> ${esc(C.location || "Houston, Texas")}`);
    line(`<span class="dim">contact:</span> <a href="mailto:${esc(C.email)}">${esc(C.email)}</a> • <a href="${esc(C.linkedin)}" target="_blank" rel="noreferrer">linkedin</a>`);
  }

  function openField(field){
    const id = (field||"").toLowerCase().trim();
    const map = { sentinel: "#field-sentinel", observatory:"#field-observatory", containment:"#field-containment", orchestration:"#field-orchestration", origin:"#origin", terminal:"#terminal-home" };
    if(map[id]){
      window.location.hash = map[id];
      line(`<span class="dim">jump:</span> ${esc(map[id])}`);
    }else{
      line(`<span class="dim">usage:</span> open <b>terminal</b> | <b>origin</b> | <b>sentinel</b> | <b>observatory</b> | <b>containment</b> | <b>orchestration</b>`);
    }
  }

  // GAME: Easter egg pwn screen
  function game(){
    // Create fullscreen overlay
    const overlay = document.createElement('div');
    overlay.id = 'pwn-overlay';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;
      font-family: 'Courier New', monospace;
      animation: glitch 0.3s infinite;
    `;
    
    const banner = document.createElement('div');
    banner.style.cssText = `
      font-size: 72px;
      font-weight: bold;
      color: #0f0;
      text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
      letter-spacing: 8px;
      animation: flicker 1.5s infinite;
    `;
    banner.textContent = 'YOU HAVE BEEN PWND';
    
    const skull = document.createElement('div');
    skull.style.cssText = `
      font-size: 120px;
      color: #f00;
      text-shadow: 0 0 10px #f00, 0 0 20px #f00;
    `;
    skull.textContent = '☠';
    
    const contact = document.createElement('div');
    contact.style.cssText = `
      font-size: 24px;
      color: #0ff;
      text-shadow: 0 0 10px #0ff;
      letter-spacing: 2px;
    `;
    contact.innerHTML = `Contact <span style="color:#ff0;text-decoration:underline">${esc(C.email || 'vkakkad@alumni.cmu.edu')}</span> for help`;
    
    const close = document.createElement('div');
    close.style.cssText = `
      margin-top: 40px;
      font-size: 16px;
      color: #666;
      cursor: pointer;
      padding: 10px 20px;
      border: 1px solid #333;
    `;
    close.textContent = '[ESC to close]';
    close.onclick = () => document.body.removeChild(overlay);
    
    overlay.appendChild(skull);
    overlay.appendChild(banner);
    overlay.appendChild(contact);
    overlay.appendChild(close);
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes flicker {
        0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
        20%, 24%, 55% { opacity: 0.4; }
      }
      @keyframes glitch {
        0%, 100% { transform: translate(0); }
        33% { transform: translate(-2px, 2px); }
        66% { transform: translate(2px, -2px); }
      }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(overlay);
    
    // Close on ESC key
    const handleEsc = (e) => {
      if(e.key === 'Escape' && document.getElementById('pwn-overlay')){
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);
  }

  function run(raw){
    const input = (raw||"").trim();
    if(!input) return;

    line(`<span class="prompt">vk@lab:~$</span> ${esc(input)}`);

    const lower = input.toLowerCase();
    if(lower === "help"){ help(); return; }
    if(lower === "whoami"){ whoami(); return; }
    if(lower === "open"){ 
      line(`<span class="dim">usage:</span> open <b>terminal</b> | <b>origin</b> | <b>sentinel</b> | <b>observatory</b> | <b>containment</b> | <b>orchestration</b>`); 
      return; 
    }
    if(lower.startsWith("open ")){ openField(lower.slice(5)); return; }
    if(lower === "game"){ game(); return; }

    line(`<span class="dim">unknown command.</span> type <b>help</b>.`);
  }

  send.addEventListener('click', ()=>{ run(cmd.value); cmd.value=''; cmd.focus(); });
  cmd.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ run(cmd.value); cmd.value=''; } });

  boot();
})();
