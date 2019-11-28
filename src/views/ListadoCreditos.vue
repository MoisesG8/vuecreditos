<template>
    <div  class="container-fluid" id="App">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <h1 align="center" class="title">CONSULTAR LA INFORMACION DE TODOS LOS CREDITOS</h1>
    <div>
      <tr>
      <th>  
      </th>
      </tr>
    </div>
    <form @submit.prevent="consumirAPI">
      <div class="form-group">
        <div>
          <button type="submit" class="btn btn-success" >Consultar</button>
        </div>
      </div>  
    </form>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Id</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Dpi</th>
          <th>Email</th>
          <th>Prestamo</th>
          <th>Fecha de inicio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key=cliente.id>
          <td>{{cliente.id}}</td>
          <td>{{cliente.nombre}}</td>
          <td>{{cliente.apellidos}}</td>
          <td>{{cliente.dpi}}</td>
          <td>{{cliente.email}}</td>
          <td>{{"Q."+cliente.prestamo}}</td>
          <td>{{cliente.fechainicio}}</td> 
        </tr>
      </tbody>
    </table>  
  </div>
  
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data(){
    return{
      clientes: [],
    }
  },
  created(){
    this.consumirAPI();
  },
  methods:{
    consumirAPI(){
      axios.get('http://localhost:8080/Restmicrocreditos/webresources/user/allcredits', {

        })
        .then(response =>{
          this.clientes = response.data;
        })
        .catch(error =>{
          console.error();
        });
      }, 
    }
  };
</script>
<style>

</style>