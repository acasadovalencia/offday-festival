'use strict'

//Selección de elementos del HTML
const iconsLis = document.querySelectorAll('.Icons-li')
const ticketsSvgs = document.querySelectorAll('.Tickets-svg')
const descriptionLis = document.querySelectorAll('.Description-li')
const modalTickets = document.querySelector('.Modal-tickets')
const modalBtn = document.querySelector('.Modal-btn')
const ticketsBtns = document.querySelectorAll('.Tickets-btn--checkout')

//Crear función común
const closeModal = () =>{
    modalTickets.classList.remove('isOpen')
}

const autoClose = (time) =>{                    //Utilizar el parametro time para introducir el tiempo en cada iteraccion
    setTimeout( () => {                         //Cerrar el modal pasado un tiempo aunque no se pulse el btn de cierre
        closeModal()
}, time)
}


//Añadir listener para cada elemento con interacción
iconsLis.forEach((each , i) => {
    iconsLis[i].addEventListener('click' , () =>{
        iconsLis.forEach((each, i)=>{                           //Limpiar todas las clases isActive
            iconsLis[i].classList.remove('isActive')
            descriptionLis[i].classList.remove('isActive')
            ticketsSvgs[i].classList.remove('isActive')
        })
        iconsLis[i].classList.add('isActive')                   //Añadir la clase isActive solo al elemento pulsado y al .Description-li que tenga el mismo índice.
        ticketsSvgs[i].classList.add('isActive')
        descriptionLis[i].classList.add('isActive')
    })
})
//Añadir a cada Btn de compra un listener
ticketsBtns.forEach((each , i) => {
    ticketsBtns[i].addEventListener('click' , () => {
        modalTickets.classList.add('isOpen')
        autoClose(6000)                                         //Llamar la función timeout si no se cierra el modal
    })
})

modalBtn.addEventListener('click' , () =>{      //Cerrar el modal con el boton de cierre
        closeModal()
        autoClose(0)                            //Resetear el timeout utilizando el argumento para que no se siga ejecutando por "detras" y quede limpio para el siguiente click
})

//Cerrar el modal tambien con la tecla Esc
document.addEventListener('keydown' , (e) => {
    if(e.key === 'Escape'){
        closeModal()
        autoClose(0)                            //Resetear el timeout utilizando el argumento para que no se siga ejecutando por "detras" y quede limpio para el siguiente click
    }
})