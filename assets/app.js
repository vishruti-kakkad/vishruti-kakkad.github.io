window.VK_SHOW_CITATIONS = false;
/* Shared UI: background particles + side drawer + helpers */
(function(){
  const canvas = document.getElementById('fx');
  if(canvas){
    const ctx = canvas.getContext('2d', { alpha:true });
    let W,H,DPR, pts=[], t=0;
    function resize(){
      DPR = Math.min(2, window.devicePixelRatio||1);
      W = canvas.width = Math.floor(window.innerWidth*DPR);
      H = canvas.height = Math.floor(window.innerHeight*DPR);
      canvas.style.width = window.innerWidth+"px";
      canvas.style.height = window.innerHeight+"px";
      pts = [];
      const count = Math.floor((window.innerWidth*window.innerHeight)/19000);
      for(let i=0;i<count;i++){
        pts.push({
          x: Math.random()*W,
          y: Math.random()*H,
          vx:(Math.random()-.5)*.35*DPR,
          vy:(Math.random()-.5)*.35*DPR,
          r:(Math.random()*1.6+.6)*DPR,
          c: Math.random()
        });
      }
    }
    window.addEventListener('resize', resize);
    resize();

    let pulse={x:W*0.5,y:H*0.35,a:0};
    window.addEventListener('pointerdown', (e)=>{
      pulse.x = e.clientX*DPR; pulse.y = e.clientY*DPR; pulse.a=1;
    });

    function draw(){
      t += 0.01;
      ctx.clearRect(0,0,W,H);

      // faint grid
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = 'rgba(140,200,255,0.35)';
      ctx.lineWidth = 1*DPR;
      const step = 76*DPR;
      for(let x=0;x<W;x+=step){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for(let y=0;y<H;y+=step){ ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

      ctx.globalAlpha = 1;
      for(const p of pts){
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
        p.vx += Math.sin(t+p.c*10)*0.002*DPR;
        p.vy += Math.cos(t*1.1+p.c*10)*0.002*DPR;
      }

      for(let i=0;i<pts.length;i++){
        for(let j=i+1;j<pts.length;j++){
          const a=pts[i], b=pts[j];
          const dx=a.x-b.x, dy=a.y-b.y;
          const d2=dx*dx+dy*dy;
          const max=(165*DPR)*(165*DPR);
          if(d2<max){
            const alpha = (1-d2/max)*0.18;
            ctx.strokeStyle = `rgba(122,184,255,${alpha})`;
            ctx.lineWidth = 1*DPR;
            ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
          }
        }
      }

      for(const p of pts){
        const g = 0.55 + 0.45*Math.sin(t+p.c*6);
        const col = (p.c<0.33) ? `rgba(255,91,214,${0.35*g})` :
                    (p.c<0.66) ? `rgba(119,240,209,${0.35*g})` :
                                 `rgba(122,184,255,${0.35*g})`;
        ctx.fillStyle = col;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      }

      if(pulse.a>0){
        pulse.a*=0.93;
        const R=(240*(1-pulse.a)+30)*DPR;
        ctx.strokeStyle = `rgba(119,240,209,${0.20*pulse.a})`;
        ctx.lineWidth = 2*DPR;
        ctx.beginPath(); ctx.arc(pulse.x,pulse.y,R,0,Math.PI*2); ctx.stroke();
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

  // Drawer
  const drawer = document.querySelector('.navdrawer');
  const openBtn = document.querySelector('.burger');
  const closeBtn = document.querySelector('.navdrawer .x');
  const backdrop = document.querySelector('.navdrawer .backdrop');

  function openDrawer(){ if(drawer){ drawer.classList.add('open'); drawer.setAttribute('aria-hidden','false'); } }
  function closeDrawer(){ if(drawer){ drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true'); } }

  function burgerKeyHandler(e){
    if(e.key==='Enter' || e.key===' '){
      e.preventDefault();
      openDrawer();
    }
  }

  if(openBtn){ openBtn.addEventListener('click', openDrawer); openBtn.addEventListener('keydown', burgerKeyHandler);}
  if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if(backdrop) backdrop.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeDrawer(); });

  // Smooth project navigation: store selection for projects page
  window.vkGoProject = function(projectId){
    try{ sessionStorage.setItem('vk_selected_project', projectId); }catch(e){}
    window.location.href = `projects.html?p=${encodeURIComponent(projectId)}`;
  };
})();
