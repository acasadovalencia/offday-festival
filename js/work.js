(function(){
'use strict'

//Selección de elementos del HTML
const modalTickets = document.querySelector('.Modal-tickets')
const modalBtn = document.querySelector('.Modal-btn')
const workForm = document.querySelector('.Work-form')

//Crear función común
const closeModal = () =>{
    modalTickets.classList.remove('isOpen')
}

//Añadir al btn de submit un listener
workForm.addEventListener('submit' , (e) => {       //Submit al formulario que es quien devuelve el estado del form
        e.preventDefault()                          //Para evitar que el formulario se envíe y de error de página
        modalTickets.classList.add('isOpen')
        console.log(e)
    })

modalBtn.addEventListener('click' , () =>{      //Cerrar el modal con el boton de cierre
        closeModal()
})

//Cerrar el modal tambien con la tecla Esc
document.addEventListener('keydown' , (e) => {
    if(e.key === 'Escape'){
        closeModal()
    }
})
})()