  // toggle icon navbar
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  }

  // scroll sections
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  let animationsPlayed = {}; // Objekt pro sledování stavu animací

  window.onscroll = () => {
      let currentSection = null; // Inicializujeme aktuální sekci na null

      sections.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 650;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset && top < offset + height) {
              // Uložíme aktuální sekci
              currentSection = id;

              sec.classList.add('show-animate');
              animationsPlayed[id] = true;
          } else if (!animationsPlayed[id]) {
              sec.classList.remove('show-animate');
          }
      });

      // Aktualizovat aktivní třídy v navigačním menu
    /*  navLinks.forEach(link => {
          link.classList.remove('active');
      });

      if (currentSection) {
          document.querySelector('header nav a[href*=' + currentSection + ']').classList.add('active');
      }*/

      // sticky header
      let header = document.querySelector('header');

      header.classList.toggle('sticky', window.scrollY > 100);

      // remove toggle icon and navbar when click navbar links (scroll)
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');

      // animation footer on scroll
      let footer = document.querySelector('footer');
      let scrollable = document.documentElement.scrollHeight - window.innerHeight;
      let scrolled = window.scrollY;
      footer.classList.add('show-animate');
      /*if (Math.ceil(scrolled) === scrollable) {
          footer.classList.add('show-animate');
      }
      else {
          footer.classList.remove('show-animate');
      }*/

      const buyButtons = document.querySelectorAll('.price-card .btn.buy-now');
      const featureLists = document.querySelectorAll('.price-card .price-content .features');
    
      buyButtons.forEach((button, index) => {
        button.addEventListener('mouseenter', () => {
          featureLists[index].querySelectorAll('li').forEach((listItem) => {
            listItem.style.color = '#232328';
            listItem.style.fontWeight = 'bold'; // Přidáno pro změnu na tučný text
          });
        });
    
        button.addEventListener('mouseleave', () => {
          featureLists[index].querySelectorAll('li').forEach((listItem) => {
            listItem.style.color = 'var(--text-color)';
            listItem.style.fontWeight = 'normal'; // Přidáno pro změnu na tučný text
          });
        });
      });
  }





document.getElementById('switch-to-register').addEventListener('click', function (e) {
    e.preventDefault();
    
    // Skryj formulář pro přihlášení a zobraz formulář pro registraci
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function (e) {
    e.preventDefault();

    // Skryj formulář pro registraci a zobraz formulář pro přihlášení
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');

    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});
