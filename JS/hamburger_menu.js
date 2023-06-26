export default function hamburgerMenu(toolbarBtn, toolbarMenu, menuLink) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(`${toolbarBtn} *`) || e.target.matches(toolbarBtn)) {
      document.querySelector(toolbarMenu).classList.toggle('toolbar__menu--active');
      document.querySelector(toolbarBtn).classList.toggle('is-active');
    }
    if (e.target.matches(menuLink)) {
      document.querySelector(toolbarMenu).classList.remove('toolbar__menu--active');
      document.querySelector(toolbarBtn).classList.remove('is-active');
    }
  });
}
