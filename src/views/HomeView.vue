<template>
  <div class="home">
    <!-- Imagen del logo de Vue -->
    <img alt="Logo de Vue" src="../assets/logo.png">
    <!-- Componente HelloWorld con el mensaje de bienvenida -->
    <HelloWorld msg="Bienvenido a tu aplicación Vue.js"/>
  </div>
</template>

<script>
// @ es un alias para /src
import HelloWorld from '@/components/HelloWorld.vue' // Importar el componente HelloWorld

export default {
  name: 'HomeView', // Nombre del componente
  components: {
    HelloWorld // Registrar el componente HelloWorld
  }
}
</script>