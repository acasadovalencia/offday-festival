'use strict';
(function(){
    //Selección de elementos del HTML
    const arrowLeft = document.querySelector('.Slider-arrow--left')
    const arrowRight = document.querySelector('.Slider-arrow--right')
    const sliderGrid = document.querySelector('.Slider-grid')
    const selectorCircles = document.querySelectorAll('.Selector-circle')

    //Se inicia el índice en el primer item
    let articleIndex = 0

    arrowLeft.addEventListener('click' , () =>{                                     //Listener para el boton izquierdo
        articleIndex--                                                              //Decrementa el índice al pulsarlo

        if(articleIndex < 0){                                                       //Condición para que nunca muestre index negativo. Del item 1, pasa al 4.
            articleIndex = 3;
        }

        sliderGrid.style.transform = `translateX(-${(100 / 4) * articleIndex}%)`    //Desplaza el item para mostrarlo calculando cuanto ocupa respecto a la página y multiplicandolo por el index que ocupe.

        selectorCircles.forEach( (each , i)=>{                                      //Se eliminan todas las clases .isActive de los marcadores del slider
            selectorCircles[i].classList.remove('isActive')
        })

        selectorCircles[articleIndex].classList.add('isActive')                     //Se aplica la clase .isActive sólo al marcador que corresponda con el index del item mostrado 

    })

    arrowRight.addEventListener('click' , ()=>{                                     //Listener para el boton izquierdo
        articleIndex++                                                              // Aumenta el índice al pulsarlo

        if(articleIndex > 3){                                                       //Condición para que nunca exceda del item 4, y vuelva al 1.
            articleIndex = 0
        }

        sliderGrid.style.transform = `translateX(-${(100 / 4) * articleIndex}%)`    //Desplaza el item para mostrarlo calculando cuanto ocupa respecto a la página y multiplicandolo por el index que ocupe.

        selectorCircles.forEach( (each , i)=>{                                      //Se eliminan todas las clases .isActive de los marcadores del slider
            selectorCircles[i].classList.remove('isActive')
        })

        selectorCircles[articleIndex].classList.add('isActive')                     //Se aplica la clase .isActive sólo al marcador que corresponda con el index del item mostrado 

    })

    selectorCircles.forEach((each , i)=>{                                               //Listener para todos los marcadores del slider
        selectorCircles[i].addEventListener('click' , ()=>{
            articleIndex = i                                                            //Al hacer click, asigna el index del item con el del marcador pulsado
            sliderGrid.style.transform = `translateX(-${(100 / 4) * articleIndex}%)`    //Desplaza el slider en relación al tamaño que ocupa cada item por el index del marcador pulsado

            selectorCircles.forEach((each , i) => {                                     //Se eliminan todas las clases .isActive de los marcadores del slider
                selectorCircles[i].classList.remove('isActive')
            })

            selectorCircles[articleIndex].classList.add('isActive')                     //Se aplica la clase .isActive sólo al marcador que corresponda con el index del item mostrado 
        })
    })
})()