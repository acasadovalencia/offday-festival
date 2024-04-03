'use strict'

const lineupLis = document.querySelectorAll('.Lineup-li')
const lineupImgs = document.querySelectorAll('.Lineup-img')
const marqueeUl = document.querySelector('.Marquee-ul')

lineupLis.forEach( (each , i)=>{
    lineupLis[i].addEventListener('mouseover' , ()=>{
        lineupLis[i].classList.add('isActive')
        lineupImgs[i].classList.add('isActive')
    })

    lineupLis[i].addEventListener('mouseout' , ()=>{
        lineupLis[i].classList.remove('isActive')
        lineupImgs[i].classList.remove('isActive')

    })
})

marqueeUl.addEventListener('mouseover' , ()=> marqueeUl.classList.remove('isMoving'))
marqueeUl.addEventListener('mouseout' , ()=> marqueeUl.classList.add('isMoving'))