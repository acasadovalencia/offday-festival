(function(){
    'use strict'
    //Seleccionar los elementos con funciones
    const iconDown = document.querySelectorAll('.Icon-svg--down')
    const iconUp = document.querySelectorAll('.Icon-svg--up')
    const servicesParagraph = document.querySelectorAll('.Services-paragraph')
    const servicesH3s = document.querySelectorAll('.Services-h3')

    //Añadir listener a cada .Icon-svg--down para que al hacer click realice:
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
    //Añadir listener a cada .Icon-svg--down para que al hacer click realice:
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

    //Añadir listener a cada .Services-h3 para que al hacer click:
    servicesH3s.forEach((each , i) => {
        servicesH3s[i].addEventListener('click' , () =>{
            if(servicesParagraph[i].classList.contains('isActive')){    // Si al hacer click, .Services-paragraph está activo
                servicesParagraph[i].classList.remove('isActive')       // Elimina la clase .isActive de .Services-paragraph
                iconDown[i].classList.add('isActive')                   // Añade la clase .isActive de .Icon-svg--down
                iconUp[i].classList.remove('isActive')                  // Elimina la clase .isActive de .Icon-svg--up
            } else {                                                    // Si no:
                servicesParagraph.forEach((each , i) => {
                    servicesParagraph[i].classList.remove('isActive')   // Elimina la clase .isActive de todos los párrafos
                    iconDown[i].classList.add('isActive')               // Añade la clase .isActive de todos los .Icon-svg--down
                    iconUp[i].classList.remove('isActive')              // Elimina la clase .isActive de todos los .Icon-svg--up
        
                })
            servicesParagraph[i].classList.add('isActive')          // Añade la clase .isActive a .Services-paragraph
            iconDown[i].classList.remove('isActive')                // Elimina la clase .isActive a .Icon-svg--down
            iconUp[i].classList.add('isActive')                     // Añade la clase .isActive a .Icon-svg--up
        }})
    })
})()