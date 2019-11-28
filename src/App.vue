<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ListadoClientes">Listado de clientes</router-link> |
      <router-link to="/Agregar">Agregar</router-link> |
      <router-link to="/ListadoCreditos">Listado de los creditos</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Cabecera from './components/Cabecera.vue'
export default {
  name: 'app',
  components:{
    Cabecera
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
