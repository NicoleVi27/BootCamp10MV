<template>
  <div id="app">
    <!-- Navegación -->
    <nav>
      <!-- Enlaces de navegación -->
      <router-link to="/">Inicio</router-link> |
      <router-link to="/todo-list">Lista de Tareas</router-link> |
      <router-link to="/issue-list">Lista de Issues</router-link> |
      <router-link to="/todos-issues">Tareas e Issues</router-link>
    </nav>
    <!-- Vista del enrutador -->
    <router-view />
  </div>
</template>

<style>
/* Estilo para el contenedor principal */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Estilo para la navegación */
nav {
  padding: 30px;
}

/* Estilo para los enlaces de navegación */
nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* Estilo para el enlace activo */
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
