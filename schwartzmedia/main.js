
//constant value

const _OpenClassName = '--open';


//이벤트 부착 코드
window.addEventListener('DOMContentLoaded', () => {
  console.log('dom content loaded');

  //constant variable
  funcLogger(setNavToggleEvent);
  funcLogger(headerScrollEvent);

})



//이벤트 함수


/**
 * 햄버거 메뉴 클릭 이벤트 설정 함수
 */
function setNavToggleEvent() {
  const navToggleButton = document.getElementById('toggle-wrapper')
  const navContainerTag = document.getElementById('nav-container');
  const overayTag = document.getElementById('overay');

  // nav menu 이벤트
  if(isElement(navToggleButton) && isElement(navContainerTag) && isElement(overayTag)){
    navToggleButton.addEventListener('click', () => {
      const classList = navContainerTag.classList;
      // overayTag
      if(classList.contains(_OpenClassName)){
        classList.remove(_OpenClassName)
        overayTag.classList.remove(_OpenClassName)
      } else {
        classList.add(_OpenClassName);
        overayTag.classList.add(_OpenClassName)
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


function headerScrollEvent () {
  const header = document.getElementById('header');
  console.log('header: ', header);

  if(!isElement(header)){
    console.log('get header fail. header: ', header);
    return;
  }

  window.addEventListener('scroll', (e) => {
    if(window.scrollY === 0) {
      header.classList.remove('box-shadow')
    } else {
      header.classList.add('box-shadow');
    }
  })
}