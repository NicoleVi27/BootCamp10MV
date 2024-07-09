<template>
	<div>
	  <!-- Botón para obtener las issues de GitHub -->
	  <el-button type="success" round @click="getIssues()">Obtener Issues</el-button>
	  <!-- Fila con espacio entre columnas -->
	  <el-row :gutter="12">
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
		'Accept': 'application/vnd.github.v3+json',
		'Content-Type': 'application/json',
		'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
	  },
	});
  
	export default {
	  name: 'IssueList', // Nombre del componente
	  components: {
		TodoItem // Registrar el componente TodoItem
	  },
	  data() {
		return {
		  issues: [], // Array para almacenar las issues obtenidas de GitHub
		};
	  },
	  methods: {
		// Método para obtener las issues de GitHub
		getIssues() {
		  client.get('https://api.github.com/repos/diveintocode-corp/vue_seriese_api/issues')
			.then((res) => {
			  this.issues = res.data; // Almacenar las issues obtenidas en el array
			})
			.catch((error) => {
			  console.error('Error al obtener issues:', error); // Manejar errores
			});
		},
		// Método para cerrar una issue en GitHub
		closeIssue(index) {
		  const target = this.issues[index]; // Obtener la issue objetivo usando el índice
		  client.patch(`https://api.github.com/repos/diveintocode-corp/vue_seriese_api/issues/${target.number}`, { state: 'closed' })
			.then(() => {
			  this.issues.splice(index, 1); // Eliminar la issue del array
			})
			.catch((error) => {
			  console.error('Error al cerrar la issue:', error); // Manejar errores
			});
		},
	  },
	};
  </script>
  