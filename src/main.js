console.log('hello world!');

const headerDropdownItem = document.querySelector('.header-nav-button.dropdown');
const headerDropdownWrapper = document.getElementById('header-nav-button-dropdown');
console.log(headerDropdownItem, headerDropdownWrapper);
if(headerDropdownItem && headerDropdownWrapper) {
  headerDropdownItem.addEventListener('click', (event) => {
    console.log('hihi ', event);
  })
}