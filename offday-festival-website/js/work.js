'use strict';
(function(){
//Selección de elementos del HTML
const modalWork = document.querySelector('.Modal-work')
const modalClose = document.querySelector('.Modal-close')
const workForm = document.querySelector('.Work-form')

//Crear función común
const closeModal = () =>{
    modalWork.classList.remove('isOpen')
}

//Añadir al btn de submit un listener
workForm.addEventListener('submit' , (e) => {       //Submit al formulario que es quien devuelve el estado del form
        e.preventDefault()                          //Para evitar que el formulario se envíe y de error de página
        modalWork.classList.add('isOpen')
    })

modalClose.addEventListener('click' , () =>{      //Cerrar el modal con el boton de cierre
        closeModal()
})

//Cerrar el modal tambien con la tecla Esc
document.addEventListener('keydown' , (e) => {
    if(e.key === 'Escape'){
        closeModal()
    }
})
})()