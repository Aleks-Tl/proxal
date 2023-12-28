//import { disableScroll } from '../functions/disable-scroll';
//import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const inputsChoices = document.querySelectorAll('.hero__select');
  const body = document?.body;

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    overlay?.classList.toggle('overlay--active');
    body?.classList.toggle('lock');
    inputsChoices.forEach(input => {
      input.classList.toggle('index');
    })

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      //disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      //enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    overlay?.classList.remove('overlay--active');
    body?.classList.remove('lock');
    inputsChoices.forEach(input => {
      input.classList.toggle('index');
    })
    //enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      //enableScroll();
    });
  });
})();
