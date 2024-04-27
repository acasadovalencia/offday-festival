'use strict';
(function(){
    //Selección de elementos del HTML
    const lineupLis = document.querySelectorAll('.Lineup-li')
    const lineupImgs = document.querySelectorAll('.Lineup-img')
    const marqueeUl = document.querySelector('.Marquee-ul')
    const slideUl = document.querySelector('.Slide-ul')
    const countdownDays = document.querySelector('.Countdown-days')
    const countdownHours = document.querySelector('.Countdown-hours')
    const countdownMinutes = document.querySelector('.Countdown-minutes')
    const countdownSeconds = document.querySelector('.Countdown-seconds')
    
    
    //Cuando el mouse entra en .Lineup-li, aplica estilos añadiendo la clase .isActive al .Lineup-li para cambiar su color y a .Lineup-img para volver visible la imagen
    lineupLis.forEach( (each , i)=>{
        lineupLis[i].addEventListener('mouseover' , ()=>{
            lineupLis[i].classList.add('isActive')
            lineupImgs[i].classList.add('isActive')
        })
    //Al salir el mouse remueve las clases aplicadas y vuelve su por defecto.
        lineupLis[i].addEventListener('mouseout' , ()=>{
            lineupLis[i].classList.remove('isActive')
            lineupImgs[i].classList.remove('isActive')
    
        })
    })
    
    //Listener para parar la marquesina .Marquee-ul al entrar con el mouse aplicando una clase CSS que detiene el translate.
    marqueeUl.addEventListener('mouseover' , ()=> marqueeUl.classList.remove('isMoving'))
    marqueeUl.addEventListener('mouseout' , ()=> marqueeUl.classList.add('isMoving'))
    
    //Listener para parar la marquesina .Slide-ul al entrar con el mouse aplicando una clase CSS que detiene el translate.
    slideUl.addEventListener('mouseover' , ()=> slideUl.classList.remove('isMoving'))
    slideUl.addEventListener('mouseout' , ()=> slideUl.classList.add('isMoving'))
    
    //Funcion para realizar una cuenta atras hasta la fecha de inicio
    function countdown(){
        const startDate = new Date('2024-06-16 20:00:00').getTime() //Guardar fecha de inicio del evento
        const actualDate = new Date().getTime() // Guarda la fecha actual
        const timeLeft = startDate - actualDate //Cálculo para obtener el tiempo restante al inicio del evento.
        
        //Extraer los días transformando los ms de timeLeft a días, dividiendolo entre la multiplicación de las horas, minutos y segundos que tiene un día en ms. Resultado en días
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) 
        
        //Extraer las horas obteniendo el producto de timeLeft transformado a ms y se divide entre los minutos que tiene una hora en ms. Resultado horas.
        const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    
        //Extraer los minutos obteniendo el producto de timeLeft transformado a ms y se divide entre los segundos que tiene un minuto en ms. Resultado minutos.
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    
        //Extraer los segundos obteniendo el producto de timeLeft transformado a ms y se divide entre 1000 para transformar los ms restantes a segundos. Resultado segundos.
        const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        //Escribir en el HTML el resultado de cada operación en su .Countdown-span correspondiente
        countdownDays.innerHTML = daysLeft
        countdownHours.innerHTML = hoursLeft
        countdownMinutes.innerHTML = minutesLeft
        countdownSeconds.innerHTML = secondsLeft
    }
    
    //Ejecutar la función countdown cada segundo para que se actualice el HTML en relación al tiempo actual.
    setInterval(countdown, 1000)
    
    
    // const sectionSpecial = document.querySelector('.Section-special')
    // const scrollSlider = document.querySelector('.Scroll-slider')
    
    // window.addEventListener('scroll' , () => {
    //     let pxTop = sectionSpecial.getBoundingClientRect().top
    //     let px = window.scrollY
    //     scrollSlider.style.transform = `translateX(-${pxTop - px}px)`
    //     console.log(pxTop - px)
    // })

})()



