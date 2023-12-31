const swipeBlock = document.querySelector('.swipe')
const swipeZone = document.querySelector('.swipe-zone')

swipeZone.addEventListener('touchstart', touchstartFn)
swipeZone.addEventListener('touchmove', touchmoveFn)
swipeZone.addEventListener('touchend', touchEndFn)

// 130 от края
const initialTopPosition = parseInt(window.getComputedStyle(swipeBlock,null).getPropertyValue("top"));
// console.log('initialTopPosition: ', initialTopPosition);
let yStartPosition = null

function touchstartFn (e) {
  e.preventDefault();
  swipeBlock.classList.remove('free')

  yStartPosition = e.touches[0].clientY.toFixed(0) // где коснулись (150)
  // console.log('yStart: ', yStart);
  swipeZone.style.backgroundColor = '#607c98'
}

function touchmoveFn (e) {
  e.preventDefault();
  const yCurrentPosition = e.touches[0].clientY.toFixed(0) // вниз 200, наверх 100
  // console.log('yCurrent: ', yCurrent);
  const difference =  yCurrentPosition - yStartPosition
  // console.log('diff: ', diff);
  swipeBlock.style.top = `${initialTopPosition + difference}px`
  // console.log(yCurrent);
}

function touchEndFn(e) {
  e.preventDefault();
  console.log(document.documentElement.clientHeight);
  swipeBlock.classList.add('free')
  const finalTopPosition = parseInt(window.getComputedStyle(swipeBlock,null).getPropertyValue("top"))
  // console.log('finalBottomPosition: ', finalTopPosition);
  if (finalTopPosition < initialTopPosition + 50) {
    swipeBlock.style.top = `${initialTopPosition}px`
    swipeZone.style.backgroundColor = 'lightslategray'
  } else {
    const screenHeight = document.documentElement.clientHeight
    swipeBlock.style.top = `${screenHeight + 200}px`
    setTimeout(() => {
      swipeBlock.remove()
    }, 500);
  }
}

// Работает на заданную высоту в css (top)
// const swipeBlock = document.querySelector('.swipe')
// const swipeZone = document.querySelector('.swipe-zone')

// swipeZone.addEventListener('touchstart', touchstartFn)
// swipeZone.addEventListener('touchmove', touchmoveFn)
// swipeZone.addEventListener('touchend', touchEndFn)

// // 100 от края
// const initialTopPosition = parseInt(window.getComputedStyle(swipeBlock,null).getPropertyValue("top"));
// console.log('initialTopPosition: ', initialTopPosition);

// function touchstartFn (e) {
//   e.preventDefault();
//   yStart = e.touches[0].clientY.toFixed(0) // где коснулись (120)
//   console.log('yStart: ', yStart);
//   swipeZone.style.backgroundColor = '#607c98'
// }

// function touchmoveFn (e) {
//   e.preventDefault();
//   let yCurrent = e.touches[0].clientY.toFixed(0) // вниз 130, наверх 100
//   console.log('yCurrent: ', yCurrent);
//   let diff =  yCurrent - yStart
//   console.log('diff: ', diff);
//   swipeBlock.style.top = `${initialTopPosition + diff}px`
//   // console.log(yCurrent);
// }

// function touchEndFn(e) {
//   e.preventDefault();
//   const finalTopPosition = parseInt(window.getComputedStyle(swipeBlock,null).getPropertyValue("top"))
//   console.log('finalBottomPosition: ', finalTopPosition);
//   if (finalTopPosition < 300) {
//     swipeBlock.style.top = `${initialTopPosition}px`
//     swipeZone.style.backgroundColor = 'lightslategray'
//   } else {
//     swipeBlock.style.top = '100%'
//   }
// }