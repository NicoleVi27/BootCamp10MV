<template>
  <div>
    <!-- Título de la lista de Tareas e Issues -->
    <h1>Lista de Tareas e Issues</h1>
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
      <!-- Componente TodoItem para cada issue -->
      <TodoItem
        v-for="(issue, index) in issues"
        :key="issue.id"
        :issue="issue.title"
        :index="index"
        @closeIssue="closeIssue(index)"
      />
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'; // Importar axios para realizar solicitudes HTTP
import TodoItem from '@/components/TodoItem'; // Importar el componente TodoItem

// Crear una instancia de axios con configuración predeterminada
const client = axios.create({
  baseURL: process.env.VUE_APP_GITHUB_ENDPOINT,
  headers: {
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
});

export default {
  name: 'TodosIssues', // Nombre del componente
  components: {
    TodoItem // Registrar el componente TodoItem
  },
  data() {
    return {
      todo: '', // String para almacenar la nueva tarea
      todos: [], // Array para almacenar las tareas
      issues: [] // Array para almacenar las issues obtenidas de GitHub
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
    // Método para cerrar una issue en GitHub
    closeIssue(index) {
      const target = this.issues[index]; // Obtener la issue objetivo usando el índice
      client.patch(`/issues/${target.number}`, { state: 'closed' })
        .then(() => {
          this.issues.splice(index, 1); // Eliminar la issue del array
        })
        .catch((error) => {
          console.error('Error al cerrar la issue:', error); // Manejar errores
        });
    },
    // Método para obtener las issues de GitHub
    getIssues() {
      client.get('issues')
        .then((res) => {
          this.issues = res.data; // Almacenar las issues obtenidas en el array
        })
        .catch((error) => {
          console.error('Error al obtener issues:', error); // Manejar errores
        });
    }
  },
  created() {
    this.getIssues(); // Obtener las issues al crear el componente
  }
};
</script>
