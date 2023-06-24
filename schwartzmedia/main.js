window.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');

  //constant variable

  const _OpenClassName = '--open';

  const navToggleButton = document.getElementById('toggle-wrapper')
  const navContainerTag = document.getElementById('nav-container');


  // nav menu 이벤트
  if(isElement(navToggleButton) && isElement(navContainerTag)){
    navToggleButton.addEventListener('click', () => {
      const classList = navContainerTag.classList;

      if(classList.contains(_OpenClassName)){
        classList.remove(_OpenClassName)
      } else {
        classList.add(_OpenClassName);
      }
    })
  } else {
    console.error('nav-container click event 설정 실패')
  }

  // util function

  function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;  
  }
})