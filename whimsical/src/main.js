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


/**
 * header opacity 변경을 위한 body scroll event
 */
// document.addEventListener('scroll', () => {
//   const headerWrapper = document.querySelector('.header-wrapper');
//   console.log('scroll event in. headerWrapper document.body.scrollTo: ', headerWrapper, document.body.scrollTop);
//   if(!headerWrapper) return;

//   if(document.scrollTop === 0){
//     headerWrapper.style.backgroundColor = 'rgba(255, 255, 255, 0)';
//   } else {
//     headerWrapper.style.backgroundColor = 'rgba(255, 255, 255, 100)';
//   }

// })