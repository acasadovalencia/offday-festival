'use strict'

//Selección de elementos del HTML
const iconsLis = document.querySelectorAll('.Icons-li')
const ticketsSvgs = document.querySelectorAll('.Tickets-svg')
const descriptionLis = document.querySelectorAll('.Description-li')

//Añadir listener para cada elemento con interacción
iconsLis.forEach((each , i) => {
    iconsLis[i].addEventListener('click' , () =>{
        iconsLis.forEach((each, i)=>{                           //Limpiar todas las clases isActive
            iconsLis[i].classList.remove('isActive')
            descriptionLis[i].classList.remove('isActive')
            ticketsSvgs[i].classList.remove('isActive')
        })
        iconsLis[i].classList.add('isActive')                   //Añadir la clase isActive solo al elemento pulsado
        ticketsSvgs[i].classList.add('isActive')
        descriptionLis[i].classList.add('isActive')
    })
})