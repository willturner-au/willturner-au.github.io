/* Will Turner — Simplexity | Main JS */
(function(){
  // Mobile nav toggle
  var b=document.getElementById('navToggle'),
      o=document.getElementById('navOverlay'),
      m=document.getElementById('navMobile');
  if(!b) return;
  function t(x){
    b.classList.toggle('open',x);
    o.classList.toggle('open',x);
    m.classList.toggle('open',x);
    b.setAttribute('aria-expanded',x);
    document.body.style.overflow=x?'hidden':'';
  }
  b.addEventListener('click',function(){t(!o.classList.contains('open'));});
  o.addEventListener('click',function(){t(false);});
  m.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){t(false);});
  });

  // Hero image loader (WebP with JPEG fallback)
  var heroImg=document.getElementById('heroImg');
  if(heroImg){
    var img=new Image();
    img.onload=function(){heroImg.style.backgroundImage='url(hero-will-turner-keynote.webp)';};
    img.onerror=function(){heroImg.style.backgroundImage='url(hero-will-turner-keynote.jpg)';};
    img.src='hero-will-turner-keynote.webp';
  }
})();
