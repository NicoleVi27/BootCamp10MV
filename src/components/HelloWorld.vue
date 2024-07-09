<template>
  <div class="hello">
    <!-- Mensaje de bienvenida -->
    <h1>{{ msg }}</h1>
    <p>
      Para una guía y recetas sobre cómo configurar/personalizar este proyecto,<br>
      consulta la
      <!-- Enlace a la documentación de vue-cli -->
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">documentación de vue-cli</a>.
    </p>
    <!-- Título de los plugins de CLI instalados -->
    <h3>Plugins de CLI Instalados</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <!-- Título de los enlaces esenciales -->
    <h3>Enlaces Esenciales</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Documentación Principal</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Foro</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Chat de la Comunidad</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">Noticias</a></li>
    </ul>
    <!-- Título del ecosistema -->
    <h3>Ecosistema</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld', // Nombre del componente
  props: {
    msg: String // Propiedad que recibe un mensaje de tipo String
  }
}
</script>

<!-- Agregar el atributo "scoped" para limitar el CSS solo a este componente -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
