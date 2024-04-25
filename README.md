<div align="center">
<h1>OFFDay Festival website project</h1>
<h2>Esta web ha sido creada como proyecto final para el módulo Diseño web con HTML, CSS y JavaScript en la escuela CEI.</h2>

![OFF Day festival](assets/img/meta-logo.png)

![Mockup API Web](assets/static/ui-mockup-web-api.png)

### :zap: Actividad Reciente

<!--START_SECTION:activity-->
1. 🎉 Merged PR [#38](https://github.com/midudev/aprendiendo-react/pull/38) in [midudev/aprendiendo-react](https://github.com/midudev/aprendiendo-react)
2. 🎉 Merged PR [#37](https://github.com/midudev/aprendiendo-react/pull/37) in [midudev/aprendiendo-react](https://github.com/midudev/aprendiendo-react)
3. 🎉 Merged PR [#64](https://github.com/midudev/preguntas-entrevista-react/pull/64) in [midudev/preguntas-entrevista-react](https://github.com/midudev/preguntas-entrevista-react)
4. 🎉 Merged PR [#67](https://github.com/midudev/preguntas-entrevista-react/pull/67) in [midudev/preguntas-entrevista-react](https://github.com/midudev/preguntas-entrevista-react)
5. 🎉 Merged PR [#4](https://github.com/midudev/libros-programacion-gratis/pull/4) in [midudev/libros-programacion-gratis](https://github.com/midudev/libros-programacion-gratis)
<!--END_SECTION:activity-->


<details>
  <summary>Sumario</summary>
  <ol>
    <li>
      <a href="#descripción-del-proyecto">Descripción del proyecto</a>
    </li>
    <li>
      <a href="#tecnologías-usadas">Tecnologías usadas</a>
    </li>
    <li><a href="#api">API</a></li>
    <li><a href="#redes-sociales">Redes sociales</a></li>
		<li><a href="#lighthouse">Lighthouse</a></li>
		<li><a href="#estadísticas-acerca-del-autor">Estadísticas Acerca del Autor</a></li>
  </ol>
</details>



[![English](https://img.shields.io/badge/language-English-blue.svg)](README.en.md)

[![kings league project](https://jordinodejs.vercel.app/api/pin/?username=midudev&repo=kings-league-project&theme=calm&bg_color=ff7b25&title_color=000000&icon_color=d64161&border_color=d64161&text_color=eeeee4)](https://github.com/midudev/kings-league-project)


## Descripción del proyecto

Este proyecto tiene como objetivo crear una API y página web de la [Kings League Infojobs](https://kingsleague.pro) con fines educativos.

La API proporciona acceso a datos de equipos, presidentes, entrenadores, goleadores y asistentes de la Kings League, y la página web ofrece información sobre los equipos, resultados y clasificaciones de la liga.

## Tecnologías usadas

Para recuperar los datos de la API, usamos *Web Scraping*, [Node.js](https://nodejs.org/es/), [Hono](https://honojs.dev/) y el servicio de hosting de APIs [Cloudflare Workers](https://workers.cloudflare.com/) para la construcción y el despliegue.

La página web está desarrollada con el framework [Astro](https://astro.build/) y utilizamos el framework [CSS Tailwind](https://tailwindcss.com/) para estilizar la interfaz de usuario. Además, hemos utilizado la librería [Cheerio](https://github.com/cheeriojs/cheerio) para realizar *Web Scraping* y obtener datos de la **Kings League Infojobs**.

Para probar y validar el funcionamiento de la aplicación, hemos utilizado la librería de pruebas [Vitest](https://vitest.dev/).

Si quieres ayudarnos, por favor toma un momento para leer el archivo [CONTRIBUTING.md](https://github.com/midudev/kings-league-project/blob/main/CONTRIBUTING.md). Allí encontrarás información útil sobre cómo contribuír de manera efectiva y cómo seguir nuestras guías de estilo. ¡Esperamos que disfrutes colaborando con nosotros!

## API

Dirección: https://api.kingsleague.dev/

Los endpoints disponibles son:

- GET `/leaderboard`: Devuelve la clasificación de la Kings League.
- GET `/teams`: Devuelve todos los equipos de la Kings League.
- GET `/teams/:id`: Devuelve un equipo de la Kings League.
- GET `/teams/:id/player-12`: Devuelve un jugador 12 de un equipo de la Kings League.
- GET `/teams/:id/players/:playerId`: Devuelve un jugador de un equipo de la Kings League.
- GET `/presidents`: Devuelve todos los presidentes de la Kings League.
- GET `/presidents/:id`: Devuelve un presidente de un equipo de la Kings League.
- GET `/coaches`: Devuelve todos los entrenadores de la Kings League.
- GET `/coaches/:teamId`: Devuelve el entrenador de un equipo de la Kings League.
- GET `/top-scorers`: Devuelve los goleadores más destacados de la Kings League.
- GET `/top-scorers/:rank`: Devuelve el goleador más destacado de acuerdo a su posición en el ranking de la Kings League.
- GET `/top-assists`: Devuelve los asistentes más destacados de la Kings League.
- GET `/top-assists/:rank`: Devuelve el asistente más destacado de acuerdo a su posición en el ranking de la Kings League.
- GET `/mvp`: Devuelve los MVPs de la Kings League.
- GET `/schedule`: Devuelve el calendario de partidos de la Kings League y el resultado de los partidos jugados.
- GET `/players-12`: Devuelve los jugadores 12 de la Kings League.

## Redes Sociales

¡Síguenos en nuestro canal de Twitch para ver cómo avanzamos en el desarrollo del proyecto o síguenos en Youtube para más contenido acerca de desarrollo fullstack!

- [Twitch](https://twitch.tv/midudev)
- [YouTube](https://www.youtube.com/c/midudev)

o únete a la comunidad en [Discord](https://discord.gg/midudev)

## LightHouse

[![Lighthouse Performance Badge](./test_results/lighthouse_performance.svg)](https://github.com/midudev/kings-league-project)
[![Lighthouse Accessibility Badge](./test_results/lighthouse_accessibility.svg)](https://github.com/midudev/kings-league-project)
[![Lighthouse Best Practices Badge](./test_results/lighthouse_best-practices.svg)](https://github.com/midudev/kings-league-project)
[![Lighthouse SEO Badge](./test_results/lighthouse_seo.svg)](https://github.com/midudev/kings-league-project)

## Estadísticas Acerca del Autor

<p>&nbsp;<img align="center" src="https://jordinodejs.vercel.app/api?username=midudev&show_icons=true&locale=es&theme=calm" alt="midudev" /></p>

<p><img align="left" src="https://jordinodejs.vercel.app/api/top-langs?username=midudev&show_icons=true&locale=es&layout=compact&theme=calm&langs_count=8&hide=php,coffeescript" alt="midudev" /></p>





<h1 align="center">Hola, soy Antonio Casado Valencia</h1>
<h3 align="center">Website realizado como trabajo final del curso Diseño We, HTML, CSS y JS en la escuela CEI.</h3>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>



# offday-festival
 Final proyect for CEI School.
