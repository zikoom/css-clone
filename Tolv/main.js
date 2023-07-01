

document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');

  setScrollEvent();

})


function setScrollEvent () {

  window.addEventListener('scroll', () => {
    if(window.scrollY === 0) {
      headerScrollToggleHandler(false);
    } else {
      headerScrollToggleHandler(true);
    }
  })


}


/**
 * 
 * @param {boolean} state true 시 shadow class 부착
 */
function headerScrollToggleHandler(state){
  
  const headerElement = document.getElementById('header');

  if(typeof state !== 'boolean') {
    console.log('state is not boolean');
    return;
  }
  if(!headerElement) {
    console.log('unvalid headerElement: ', headerElement);
    return;
  }

  if(state) {
    headerElement.classList.add('box-shadow')
    headerElement.classList.add('white-back')
  } else {
    headerElement.classList.remove('box-shadow')
    headerElement.classList.remove('white-back')
  }

}