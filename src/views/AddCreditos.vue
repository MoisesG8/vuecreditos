<template>
     <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="well well-sm">
                <form class="form-horizontal" method="post" @submit="formSubmit">
                    <fieldset>
                        <legend class="text-center header">Agregar Informacion del Credito</legend>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese la fecha de inicio del prestamo</label>
                                <input id="fechainicio" v-model="fechainicio" name="fechainicio" type="text" class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese la fecha en la que finaliza el credito</label>
                                <input id="fechafin" v-model="fechafin" name="fechafin" type="text"  class="form-control">
                            </div>
                        </div>

                         <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese el id del cliente al que se dara el credito</label>
                                <input id="id_cliente" name="id_cliente" v-model="id_cliente" type="text"  class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese el estado actual del credito</label>
                                <input id="estado" v-model="estado" name="estado" type="text" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese la cantidad pagada por el cliente</label>
                                <input id="pagado" name="pagado" v-model="pagado" type="number" class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese la cantidad neta del prestamo</label>
                                <input id="prestamo" name="prestamo" v-model="prestamo" type="number"  class="form-control">
                            </div>
                        </div>

                        <div class="form-group">
                            <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                            <div class="col-md-8">
                                <label>Ingrese el porcentaje de interes</label>
                                <input type="number" id="porcentajeinteres" v-model="porcentajeinteres" name="porcentajeinteres"  class="form-control">
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
  data(){
    return {
        fechainicio: '',
        fechafin: '',
        id_cliente: '',
        estado: '',
        pagado: '',
        prestamo: '',
        porcentajeinteres: '',
    };
  },
  methods: {
    formSubmit(e){
        e.preventDefault();
        let currentObj = this;
        this.axios.post('http://localhost:8080/Restmicrocreditos/webresources/user/addcredito', {
            fechainicio: this.fechainicio,
            fechafin: this.fechafin,
            id_cliente: this.id_cliente,
            estado: this.estado,
            pagado: this.pagado,
            prestamo: this.prestamo,
            porcentajeinteres: this.porcentajeinteres 
        })
        .then(function(response){
            currentObj.output = response.data;
        })
        .catch(function(error){
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