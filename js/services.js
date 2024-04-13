'use strict'

//Seleccionar los elementos con funciones
const iconDown = document.querySelectorAll('.Icon-svg--down')
const iconUp = document.querySelectorAll('.Icon-svg--up')
const servicesParagraph = document.querySelectorAll('.Services-paragraph')

//Añadir listener a .Icon-svg--down para que al hacer click realice:
iconDown.forEach( (each , i) => {
    iconDown[i].addEventListener('click' , () => {
        servicesParagraph.forEach((each , i) => {
            servicesParagraph[i].classList.remove('isActive') //Ocultar todos .Services-paragraph del index del icono pulsado
        })
        iconUp.forEach((each , i) => { //Al pulsar un .Icon-svg--down, poner todos los .Icon-svg-up quedan desactivados y se activan todos los .Icon-svg-down
            iconUp[i].classList.remove('isActive')
            iconDown[i].classList.add('isActive')
        })
        iconDown[i].classList.remove('isActive') //Ocultar .Icon-svg--down pulsado
        iconUp[i].classList.add('isActive') //Mostrar .Icon-svg--up
        servicesParagraph[i].classList.add('isActive') //Mostrar .Services-paragraph del index del icono pulsado
    })
})
iconUp.forEach( (each , i) => {
    iconUp[i].addEventListener('click' , () => { 
        servicesParagraph.forEach((each , i) => {
            servicesParagraph[i].classList.remove('isActive') //Ocultar todos .Services-paragraph del index del icono pulsado
        })
        iconDown.forEach((each , i) => { //Al pulsar un .Icon-svg--up, poner todos los .Icon-svg-down quedan activados
            iconDown[i].classList.add('isActive')
        })
        iconUp[i].classList.remove('isActive') //Ocultar .Icon-svg--up pulsado
        iconDown[i].classList.add('isActive') //Mostrar .Icon-svg--down
        servicesParagraph[i].classList.remove('isActive') //Mostrar .Services-paragraph del index del icono pulsado
    })
})