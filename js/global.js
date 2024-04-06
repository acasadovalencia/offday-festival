'use strict'

const menuBtn = document.querySelector('.Menu-btn')
const btnClose = document.querySelector('.Btn-close')
const headerNav = document.querySelector('.Header-nav')
const btnTickets = document.querySelector('.Btn-tickets')
const navUl = document.querySelector('.Nav-ul')

menuBtn.addEventListener('click' ,() => {
    menuBtn.classList.remove('isActive')
    btnTickets.classList.remove('isActive')
    navUl.classList.remove('navUp')
    headerNav.classList.add('isOpen')
    btnClose.classList.add('isActive')
    setTimeout(() => {
        navUl.classList.remove('navDown')
        navUl.classList.add('navUp')
    }, 1000);
})
btnClose.addEventListener('click' , () => {
    setTimeout(() => {
        headerNav.classList.remove('isOpen')
        menuBtn.classList.add('isActive')
        btnTickets.classList.add('isActive')
        btnClose.classList.remove('isActive')
    }, 800);
    navUl.classList.remove('navUp')
    navUl.classList.remove('navDown')
    navUl.classList.add('navDown')
})
