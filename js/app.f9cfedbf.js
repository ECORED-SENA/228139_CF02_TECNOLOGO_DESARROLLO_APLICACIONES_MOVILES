(function(e){function n(n){for(var o,i,c=n[0],s=n[1],d=n[2],u=0,l=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,i=1;i<a.length;i++){var c=a[i];0!==t[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"9c3c9b68","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"0c169fb2",creditos:"e0a862ca",glosario:"1214d4fe",intro:"85e34da9",referencias:"79fa00cd",sintesis:"d2098d94",tema1:"dda6793f",tema2:"914529d8",tema3:"525ac3df"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"737cdd94","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a2111a1c","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"d2e0a021","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"e9b1fdd0",creditos:"4716f163",glosario:"6aa168b5",intro:"31d6cfe0",referencias:"806e7011",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===t))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),a(r)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}t[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),u=d.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");l["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),k=(a("a3a0"),{global:{componenteFormativo:"Análisis y especificación de requisitos",descripcionCurso:"En este componente formativo se abordan el análisis de requisitos (priorización, descomposición funcional, matriz de trazabilidad) y estándares, y/o guías existentes para la especificación formal de los mismos dependiendo del tipo de marco de trabajo usado (tradición o ágil).",imagenBannerPrincipal:a("9128"),fondoBannerPrincipal:a("ce7c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Técnicas de análisis de requisitos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Priorización de requisitos",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Matriz de trazabilidad",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Descomposición funcional",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Especificación de requisitos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Estándar IEEE 830",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Estándar IEEE 29148:2018",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"La especificación de requisitos a través de marcos de trabajo ágiles",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Scrum y la especificación de requisitos",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Kanban y la especificación de requisitos",hash:"t_2_5"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/228139_CF02_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Especificación de requisitos",referencia:"UMNG. (2019). Elementos de la norma IEEE 830. [Archivo de Video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=LjBOTZdd_iE&feature=youtu.be"},{tema:"Especificación de requisitos",referencia:"IEEE Xplore.(2009). 830-1998 - IEEE Recommended Practice for Software Requirements Specifications",tipo:"Página web",link:"https://ieeexplore.ieee.org/document/720574"},{tema:"2.1 Estándar IEEE 830",referencia:"Torres, M., Villegas, J. & Martínez, J. (2010). Especificación de Requerimientos de Software.",tipo:"PDF",link:"https://www.alemana.cl/aac/cur/pdf/SRS+SIA.pdf"},{tema:"2.1 Estándar IEEE 83",referencia:"Ulloa, M., Ulloa, R. & Lucero, J. (s.f.) Sistema de estacionamiento tarifado. Especificación de Requerimientos de Software SRS",tipo:"Documento",link:"https://es.slideshare.net/JuAnJoShL/srs-ejemplo-sistema-tarifado-de-transito"}],glosario:[{termino:"Estándar",significado:"referencia, patrón o modelo que es utilizado a nivel general en un determinado ámbito."},{termino:"Marcos de trabajo ágiles",significado:"conjunto de estándares, metodologías, técnicas, <em>frameworks</em> o guías que rigen un proceso de desarrollo de <em>software</em> basadas en principios y/o valores ágiles como, por ejemplo: Scrum, <em>Lean Software</em>, XP, TDD, entre otros."},{termino:"Marcos de trabajo tradicionales",significado:"conjunto de estándares, metodologías, técnicas, <em>frameworks</em> o guías que rigen un proceso de desarrollo de <em>software</em> basadas en el ciclo de vida tradicional del software como, por ejemplo: RUP, CMMI, ISO 9001, Microsoft Solution Framework, entre otros. "},{termino:"Metodología",significado:"síntesis de un conjunto de técnicas, métodos y procedimientos que se deben seguir durante el desarrollo de un proyecto."},{termino:"Pruebas unitarias",significado:"forma de comprobar el correcto funcionamiento de una unidad de código."},{termino:"Pruebas de integración",significado:"prueba que se ejecuta una vez se aprueban las pruebas unitarias y lo que busca es verificar que el conjunto de fragmentos de código funciona junto de forma correcta. Es una prueba de conjunto."},{termino:"Técnica",significado:"manera en la que un conjunto de procedimientos es aplicado en una tarea específica, con base en un conocimiento para obtener un resultado específico."}],referencias:[{referencia:"830-1998 - IEEE Recommended Practice for Software Requirements Specifications. (1998). IEEE Standard | IEEE Xplore.",link:"https://ieeexplore.ieee.org/document/720574"},{referencia:"Pantaleo, L., y Rinaudo. (2018). Ingeniería de software. Alfaomega.",link:""},{referencia:"Penzenstadler, B. (s. f.). Requirements engineering. CSU Long Beach.",link:"https://teachingopensource.org/Requirements_Engineering,_CSU_Long_Beach,_Penzenstadler"},{referencia:"Porfirio, C. (2021). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades.",link:"https://www.knowmadmood.com/es/blog/tcnicas-de-priorizacin-el-desafo-de-conseguir-un-orden-para-las-funcionalidades"},{referencia:"Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1-29.",link:"https://doi.org/10.22305/ict-unpa.v5i1.66"},{referencia:"Scrum Certification, Agile Certification | Scrum, Agile Training. (n.d.). ScrumStudy.",link:"https://www.scrumstudy.com"},{referencia:"Sommerville I. (2011). Ingeniería del software. Addison-Wesley.",link:""}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Línea de Producción",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jonathan Guerrero Astaiza",cargo:"Expertos temáticos",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Zulema Yidney León Escobar",cargo:"Expertos temáticos",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñadora instruccional",centro:"Centro de Gestión Industrial - Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carlos Julian Ramirez",cargo:"Diseñador de Contenidos Digitales",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollador Fullstack",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Carlos Eduardo Garavito Parada",cargo:"Animador y Producción audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Actividad Didáctica",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruiz Torres",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=k;var v=a("9224");o["a"].prototype.$package=v,new o["a"]({router:b,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9128:function(e,n,a){e.exports=a.p+"img/banner-princiapal.7f994a04.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.0636cf4e.png"}});
//# sourceMappingURL=app.f9cfedbf.js.map