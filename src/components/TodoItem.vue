<template>
  <div>
    <!-- Contenedor para el ítem de tarea -->
    <el-col :span="12">
      <!-- Tarjeta para mostrar el ítem de tarea con efecto de sombra al pasar el ratón y margen -->
      <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
        <!-- Fila con espacio entre las columnas -->
        <el-row :gutter="12">
          <!-- Columna para mostrar el texto de la tarea o el problema -->
          <el-col :span="21">{{ todo }}{{ issue }}</el-col>
          <!-- Columna para mostrar los botones de acción -->
          <el-col :span="3">
            <!-- Botón para eliminar la tarea si hay una tarea presente, que activa el método removeTodo -->
            <el-button v-if="todo" @click="removeTodo" type="success" icon="el-icon-check" circle></el-button>
            <!-- Botón para cerrar el problema si hay un problema presente, que activa el método closeIssue -->
            <el-button v-if="issue" @click="closeIssue" type="danger" icon="el-icon-check" circle></el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'TodoItem', // Nombre del componente
  props: ['todo', 'issue', 'index'], // Props que se pasan al componente
  methods: {
    // Método para emitir un evento para eliminar un ítem de tarea
    removeTodo() {
      this.$emit('removeToDo');
    },
    // Método para emitir un evento para cerrar un problema, pasando el índice del problema
    closeIssue() {
      this.$emit('closeIssue', this.index);
    }
  },
};
</script>
