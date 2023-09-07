<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      img(src="@/assets/curso/intro/img01.png", alt="Introducción")
    
    p.mb-5 En este componente formativo se estudiarán los principios básicos sobre los que se fundamenta el proceso de análisis de requisitos desde marcos de desarrollo de #[em software] tradicional y ágiles. También, introduce a diferentes formas (planillas y estándares) para realizar el proceso de documentación de requisitos. El siguiente video expone, de forma genérica lo que se desarrollará de esta temática.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Hmtriz7Af20?si=vXLGQJnAplStjO2r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Análisis y especificación de requisitos
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
