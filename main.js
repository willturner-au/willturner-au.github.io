/* Will Turner — Simplexity | Main JS */
(function(){

  // ===== MOBILE NAV TOGGLE =====
  var b=document.getElementById('navToggle'),
      o=document.getElementById('navOverlay'),
      m=document.getElementById('navMobile');
  if(b){
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
  }

  // ===== HERO IMAGE LOADER (WebP with JPEG fallback) =====
  var heroImg=document.getElementById('heroImg');
  if(heroImg){
    var img=new Image();
    img.onload=function(){heroImg.style.backgroundImage='url(hero-will-turner-keynote.webp)';};
    img.onerror=function(){heroImg.style.backgroundImage='url(hero-will-turner-keynote.jpg)';};
    img.src='hero-will-turner-keynote.webp';
  }

  // ===== SCROLL REVEAL =====
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if(revealEls.length && 'IntersectionObserver' in window){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el){ observer.observe(el); });
  } else {
    // Fallback: show everything
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  // ===== ACTIVE NAV LINK =====
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === currentPage || (currentPage === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });

  // ===== EMAIL CAPTURE STRIP =====
  var captureForm = document.getElementById('email-capture-form');
  if(captureForm){
    captureForm.addEventListener('submit', function(e){
      e.preventDefault();
      var emailInput = captureForm.querySelector('.email-capture-input');
      var btn = captureForm.querySelector('.email-capture-btn');
      if(!emailInput || !emailInput.value) return;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      // Submit to Kit (ConvertKit) form
      var form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://app.kit.com/forms/9398374/subscriptions';
      form.style.display = 'none';
      var emailField = document.createElement('input');
      emailField.type = 'hidden';
      emailField.name = 'email_address';
      emailField.value = emailInput.value;
      var redirect = document.createElement('input');
      redirect.type = 'hidden';
      redirect.name = 'redirect_to';
      redirect.value = 'https://willturner.au/book-thankyou.html';
      form.appendChild(emailField);
      form.appendChild(redirect);
      document.body.appendChild(form);
      form.submit();
    });
  }

})();
