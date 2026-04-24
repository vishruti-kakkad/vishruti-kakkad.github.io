(function(){
  var btn = document.getElementById('menuToggle');
  var nav = document.getElementById('navMain');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    var isOpen = nav.classList.toggle('open');
    btn.textContent = isOpen ? 'Close' : 'Menu';
  });
  // Close when a link is tapped
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
      btn.textContent = 'Menu';
    });
  });
})();
