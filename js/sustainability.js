'use strict'

const arrowLeft = document.querySelector('.Slider-arrow--left')
const arrowRight = document.querySelector('.Slider-arrow--right')
const sliderGrid = document.querySelector('.Slider-grid')
const selectorCircles = document.querySelectorAll('.Selector-circle')

let articleIndex = 0

arrowLeft.addEventListener('click' , () =>{
    articleIndex--
    
    if(articleIndex < 0){
        articleIndex = 3;
    }

    sliderGrid.style.transform = `translateX(-${(100 / 4) * articleIndex}%)`

    selectorCircles.forEach( (each , i)=>{
        selectorCircles[i].classList.remove('isActive')
    })

    selectorCircles[articleIndex].classList.add('isActive')

})

arrowRight.addEventListener('click' , ()=>{
    articleIndex++

    if(articleIndex > 3){
        articleIndex = 0
    }

    sliderGrid.style.transform = `translateX(-${(100 / 4) * articleIndex}%)`
    console.log(articleIndex)

    selectorCircles.forEach( (each , i)=>{
        selectorCircles[i].classList.remove('isActive')
    })

    selectorCircles[articleIndex].classList.add('isActive')

})

selectorCircles.forEach((each , i)=>{
    selectorCircles[i].addEventListener('click' , ()=>{
        articleIndex = i
        sliderGrid.style.transform = `translateX(-${(100 / 4) * articleIndex}%)`

        selectorCircles.forEach((each , i) => {
            selectorCircles[i].classList.remove('isActive')
        })

        selectorCircles[articleIndex].classList.add('isActive')
    })
})



