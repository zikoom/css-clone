const _OpenClassName = '--open';

window.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');

  //constant variable
  funcLogger(setNavToggleEvent);

})



//이벤트 함수


/**
 * 햄버거 메뉴 클릭 이벤트 설정 함수
 */
function setNavToggleEvent() {
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
}

// util function


/**
 * 
 * @param {HTMLElement} HTMLElement
 * @returns {boolean}
 */
function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;  
}

/**
 * 
 * @param {function} Function 
 */
function funcLogger (func) {
  if( func instanceof Function) {
    const funcName = func.name || 'arrow-func';
    console.log(`funcLogger: ${funcName} in`)
    func();
    console.log(`funcLogger: ${funcName} out`)

  } else {
    console.log('funcLogger: func is not instance of Function. param: ', func);
  }
}