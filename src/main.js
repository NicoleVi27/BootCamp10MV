import Vue from 'vue' // Importar Vue
import App from './App.vue' // Importar el componente principal App
import router from './router' // Importar el enrutador
import ElementUI from 'element-ui'; // Importar ElementUI
import 'element-ui/lib/theme-chalk/index.css'; // Importar los estilos de ElementUI

Vue.config.productionTip = false // Desactivar el mensaje de producción en la consola
Vue.use(ElementUI); // Usar ElementUI como plugin de Vue

// Crear una nueva instancia de Vue
new Vue({
  router, // Incluir el enrutador
  render: h => h(App) // Renderizar el componente principal App
}).$mount('#app') // Montar la instancia de Vue en el elemento con id 'app'
