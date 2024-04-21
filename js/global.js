(function(){
    'use strict'
    //Seleccion de elementos de HTML
    const menuBtn = document.querySelector('.Menu-btn')
    const btnClose = document.querySelector('.Btn-close')
    const headerNav = document.querySelector('.Header-nav')
    const btnTickets = document.querySelector('.Btn-tickets')
    const navLis = document.querySelectorAll('.Nav-li')
    const modalTickets = document.querySelector('.Modal-tickets')
    const modalBtn = document.querySelector('.Modal-btn')
    const footerForm = document.querySelector('.Footer-form')

    //Funcion para cerrar el menú
    const closeMenu = function(){
        navLis.forEach((each , i) => {                     //Primero se inicia la recogida del menú.
            navLis[i].classList.remove('navUp')
            navLis[i].classList.remove('navDown')
            navLis[i].classList.add('navDown')

        })
        setTimeout(() => {                                //Retardo para iniciar el retoque de clases del header para que suceda una vez retirado el menú.
            headerNav.classList.remove('isOpen')
            menuBtn.classList.add('isActive')
            btnTickets.classList.add('isActive')
            btnClose.classList.remove('isActive')
        }, 800)
    }

    //Función para abrir el menú
    const openMenu = function(){                    //Primero se inician el desplegado de menú y ajuste de botones 
        menuBtn.classList.remove('isActive')
        btnTickets.classList.remove('isActive')
        // navUl.classList.remove('navUp')
        headerNav.classList.add('isOpen')
        btnClose.classList.add('isActive')
        setTimeout(() => {                          //Retardo para que las animaciones de cierre de menú sucedan una vez el menú esté desplegado
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
    }

    //Crear función común cerrar modal
    const closeModal = () =>{
        modalTickets.classList.remove('isOpen')
    }

    menuBtn.addEventListener('click' , openMenu)    //Se ejecuta la funcion abrir menú al pulsar sobre el botón menú
    btnClose.addEventListener('click' , closeMenu)  //Se ejecuta la funcion cerrar menú al pulsar sobre el botón de cerrar

    //Cerrar el menú tambien con la tecla Esc
    document.addEventListener('keydown' , (e) => {
        if(e.key === 'Escape'){
            closeMenu()
        }
    })

    //Añadir a cada Btn de compra un listener
    footerForm.addEventListener('submit' , (e) => {
        e.preventDefault()
        modalTickets.classList.add('isOpen')
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