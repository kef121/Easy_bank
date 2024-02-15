'use strict'

const menu = document.querySelector('.nav-center-desktop')
const menuImg = document.querySelector('.nav-dropdown-menu')
const closeImg = document.querySelector('.nav-close-menu')

menuImg.addEventListener('click', function() {
  menu.classList.remove('hidden')
  
  menuImg.classList.add('hidden')

  closeImg.classList.remove('hidden')

  document.querySelector('body').style.opacity = 0.8
  document.querySelector('body').style.overflowY = 'hidden'
  document.querySelector('.hero-main').addEventListener('click', function() {
    removeCloseImg()
  })
})


closeImg.addEventListener('click', removeCloseImg)

function removeCloseImg() {
  closeImg.classList.add('hidden')

  menu.classList.add('hidden')

  menuImg.classList.remove('hidden')

  document.querySelector('body').style.opacity = 1
  document.querySelector('body').style.overflowY = 'auto'
}

