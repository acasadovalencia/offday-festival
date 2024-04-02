'use strict'

const lineupLis = document.querySelectorAll('.Lineup-li')
const lineupImgs = document.querySelectorAll('.Lineup-img')

lineupLis.forEach( (each , i)=>{
    lineupLis[i].addEventListener('mouseover' , function(){
        lineupLis[i].classList.add('isActive')
        lineupImgs[i].classList.add('isActive')
    })

    lineupLis[i].addEventListener('mouseout' , function(){
        lineupLis[i].classList.remove('isActive')
        lineupImgs[i].classList.remove('isActive')

    })
})