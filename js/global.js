'use strict'

const menuBtn = document.querySelector('.Menu-btn')
const btnClose = document.querySelector('.Btn-close')
const headerNav = document.querySelector('.Header-nav')
const btnTickets = document.querySelector('.Btn-tickets')
// const navUl = document.querySelector('.Nav-ul')
const navLis = document.querySelectorAll('.Nav-li')

menuBtn.addEventListener('click' ,() => {
    menuBtn.classList.remove('isActive')
    btnTickets.classList.remove('isActive')
    // navUl.classList.remove('navUp')
    headerNav.classList.add('isOpen')
    btnClose.classList.add('isActive')
    setTimeout(() => {
        navLis.forEach( (each , i) => {
            navLis[i].classList.remove('navDown')
            navLis[i].classList.add('navUp')
        })
        navLis.forEach((each , i) => {
            navLis[i].classList.remove('navDown')
        })
        navLis.forEach((each , i) => {
            navLis[i].classList.add('navUp')
        })
    }, 800)
})
btnClose.addEventListener('click' , () => {
    setTimeout(() => {
        headerNav.classList.remove('isOpen')
        menuBtn.classList.add('isActive')
        btnTickets.classList.add('isActive')
        btnClose.classList.remove('isActive')
    }, 800)
    navLis.forEach((each , i) => {
        navLis[i].classList.remove('navUp')
        navLis[i].classList.remove('navDown')
        navLis[i].classList.add('navDown')

    }, 800)
}) 
