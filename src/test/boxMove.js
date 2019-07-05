// 2. 用js实现一个可以自由拖动的方块

import _ from 'lodash'


const $squareBox = document.createElement('div')
$squareBox.style.width = '100px'
$squareBox.style.height = '100px'
$squareBox.style.border = '1px solid #000'
$squareBox.style.position = 'absolute'
$squareBox.style.left = 0
$squareBox.style.top = 0
// $squareBox.style.transition = 'all .5s'
document.getElementById('page-container').appendChild($squareBox)

let isMoveStarted = false
let startX, startY
document.addEventListener('mousedown', function(event) {
  // 保存起始的位置方便计算
  if (event.srcElement === $squareBox) {
    if (!startX) {
      startX = event.clientX
      startY = event.clientY
    }
    console.log('1')
    isMoveStarted = true
  }
})

document.addEventListener('mouseup', function(event) {
  console.log('2')
  isMoveStarted = false
})

document.addEventListener('mousemove', _.throttle(function(event) {
  // 每次一修改位置后重置
  if (isMoveStarted && event.srcElement === $squareBox) {
    console.log(event.clientX - startX, event.clientY - startY)

    $squareBox.style.left = event.clientX - startX + 'px'
    $squareBox.style.top = event.clientY - startY + 'px'
  }
}, 10))
