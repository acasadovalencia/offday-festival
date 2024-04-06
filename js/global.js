'use strict'

const menuBtn = document.querySelector('.Menu-btn')
const btnClose = document.querySelector('.Btn-close')
const headerNav = document.querySelector('.Header-nav')
const btnTickets = document.querySelector('.Btn-tickets')
const navUl = document.querySelector('.Nav-ul')

menuBtn.addEventListener('click' ,() => {
    menuBtn.classList.remove('isActive')
    btnTickets.classList.remove('isActive')
    headerNav.classList.add('isOpen')
    btnClose.classList.add('isActive')
    navUl.classList.add('isActive')
})
btnClose.addEventListener('click' , () => {
    menuBtn.classList.add('isActive')
    btnTickets.classList.add('isActive')
    headerNav.classList.remove('isOpen')
    btnClose.classList.remove('isActive')
    navUl.classList.remove('isActive')
})
