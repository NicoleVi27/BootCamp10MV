<template>
  <div>
    <!-- Título de la lista de tareas -->
    <h1>Lista de Tareas</h1>
    <!-- Formulario para añadir una nueva tarea -->
    <form @submit.prevent="addTodo()">
      <!-- Input para escribir la nueva tarea -->
      <el-input placeholder="Tarea" v-model="todo"></el-input>
    </form>
    <!-- Fila con espacio entre columnas -->
    <el-row :gutter="12">
      <!-- Componente TodoItem para cada tarea -->
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @removeToDo="removeTodo(index)"
      />
    </el-row>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'; // Importar el componente TodoItem

export default {
  name: 'TodoList', // Nombre del componente
  components: {
    TodoItem // Registrar el componente TodoItem
  },
  data() {
    return {
      todo: '', // String para almacenar la nueva tarea
      todos: [], // Array para almacenar las tareas
    };
  },
  methods: {
    // Método para añadir una nueva tarea
    addTodo() {
      this.todos.push(this.todo); // Añadir la nueva tarea al array
      this.todo = ''; // Limpiar el input después de añadir la tarea
    },
    // Método para eliminar una tarea por índice
    removeTodo(index) {
      this.todos.splice(index, 1); // Eliminar la tarea del array
    },
  },
};
</script>
