<template>
 <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post" @submit="formSubmit">
                    <fieldset>
                        <div id="alert">

                        </div>
                        <legend class="text-center header">Informacion del Cliente</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="nombre" v-model="nombre" name="nombre" type="text" placeholder="Ingrese sus nombres" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="apellidos" v-model="apellidos" name="apellidos" type="text" placeholder="Ingrese sus apellidos" class="form-control">
                            </div>
                        </div>

                         <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="dpi" name="dpi" v-model="dpi" type="text" placeholder="Ingrese su dpi" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="direccion" v-model="direccion" name="direccion" type="text" placeholder="Ingrese su direccion" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="telefono" name="telefono" v-model="telefono" type="text" placeholder="Ingrese su numero de telefono" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <input id="edad" name="edad" v-model="edad" type="number" placeholder="Ingrese su edad" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <input type="email" id="email" v-model="email" name="email" placeholder="Ingrese su correo electronico" class="form-control">
                            </div>
                        </div>


                       <!--<div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" name="message" placeholder="Enter your massage for us here. We will get back to you within 2 business days." rows="7"></textarea>
                            </div>
                        </div>-->

                        <div class="form-group">
                            <div class="col-md-12 text-center">
                                
                                <button type="submit" class="btn btn-primary btn-lg">Enviar</button>
                            </div>
                            <div class="col-md-18 text-center">
                              <button type="reset" class="btn btn-danger">Limpiar campos</button>
                            </div>
                            <div class="col-md-12 text-left">
                                <router-link to="/AddCreditos">Agregar informacion del credito</router-link> 
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
    console.log('Componente en marcha.')
  },
  data() {
    return {
      nombre: '',
      apellidos: '',
      dpi: '',
      direccion: '',
      telefono: '',
      edad: '',
      email: '',
    };
  },
  methods: {
    formSubmit(e) {
       e.preventDefault();
       let currentObj = this;
       this.axios.post('http://localhost:8080/Restmicrocreditos/webresources/user/add', {
         nombre: this.nombre,
         apellidos: this.apellidos,
         dpi: this.dpi,
         direccion: this.direccion,
         telefono: this.telefono,
         edad: this.edad,
         email: this.email,
       })
       .then(function (response){
         currentObj.output = response.data;
         
       })
       .catch(function (error) {
         currentObj.output = error;
       });
    }
  }
}
</script>
<style>
.header {
    color: #36A0FF;
    font-size: 27px;
    padding: 10px;
}

.bigicon {
    font-size: 35px;
    color: #36A0FF;
}
</style>