const toggleStateMaker = () => {
  let state = true;
  return function (input = null) {
    console.log('input, state', input, state);
    state = input === null ? !state : input;
    console.log('input, state', input, state);
    return state
  }
}

console.log('hello world!');

const headerDropdownItem = document.querySelector('.header-nav-button.dropdown');
const headerDropdownWrapper = document.getElementById('header-nav-button-dropdown');
const headerDropdownNav = document.getElementById('header-dropdown-nav');
console.log(headerDropdownItem, headerDropdownWrapper, headerDropdownNav);


const headderToggle = toggleStateMaker(false);

if(headerDropdownItem && headerDropdownWrapper && headerDropdownNav) {
  headerDropdownItem.addEventListener('click', () => {
    console.log('nav click event in');
    if(headderToggle()){
      console.log('true');
      headerDropdownWrapper.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg)'
      headerDropdownWrapper.style.transformStyle = 'preserve-3d'
      headerDropdownNav.style.display = 'block';
    } else {
      console.log('false');
      headerDropdownWrapper.style.transform = 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)'
      headerDropdownWrapper.style.transformStyle = 'preserve-3d'
      headerDropdownNav.style.display = 'none';
    }
  })
}