

window.addEventListener('DOMContentLoaded', () => {
  init();
})



const openMobileToggleMenu = () => {
  const wrapperElem = document.querySelector('.mobile-toggle-set');

  const hambug = document.querySelector('.icon-mobile-menu');
  const close = document.querySelector('.icon-mobile-menu-close');

  if(wrapperElem){
    const classList = wrapperElem.classList
    if(!classList.contains('--open')){
      wrapperElem.classList.add('--open');

      hambug.style.display = 'none';
      close.style.display = 'block'

      document.body.style.overflowY = 'hidden';
    }
  } else {
    return;
  }
}
const closeMobileToggleMenu = () => {
  const wrapperElem = document.querySelector('.mobile-toggle-set');
  const hambug = document.querySelector('.icon-mobile-menu');
  const close = document.querySelector('.icon-mobile-menu-close');
  if(wrapperElem){
    const classList = wrapperElem.classList
    if(classList.contains('--open')){
      wrapperElem.classList.remove('--open');

      close.style.display = 'none';
      hambug.style.display = 'block'
      document.body.style.overflowY = '';
    }
  } else {
    return;
  }
}

const setMobileToggleFunc = () => {
  const hambug = document.querySelector('.icon-mobile-menu');
  const close = document.querySelector('.icon-mobile-menu-close');

  hambug.addEventListener('click', () => {openMobileToggleMenu()})
  close.addEventListener('click', () => {closeMobileToggleMenu()})
}


const test = () => {
  window.openMobileToggleMenu = openMobileToggleMenu;
  window.closeMobileToggleMenu = closeMobileToggleMenu;
}

const init = () => {
  console.log('init in');
  setMobileToggleFunc();
  test();
}