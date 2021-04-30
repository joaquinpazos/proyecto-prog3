import React, {Component} from 'react';
import Tarjetas from "./Tarjeta"

class Container extends Component{

      
  constructor(props){
    super(props);
    this.state={
      items:[],

    }
  }


componentDidMount(){
      fetch("https://randomuser.me/api/?results=20")
        
        .then(result => result.json())
        .then((data)=>{
          this.setState({items: data.results})
          
        })
        .catch((e)=>{console.log(e)})
}

eliminarTarjeta=(key)=>{
  let lasTarjetas=this.state.items.filter((card)=>{
      return card.login.uuid !== key;
  })
  this.setState({items: lasTarjetas })
  console.log(this.state.items)
}


agregarTarjetas=()=>{
  let cantidad = document.querySelector(".numTarjetas").value
  fetch("https://randomuser.me/api/?results=" + cantidad)
      .then(result => result.json())
      .then(datos => {
        datos.results.map((dato)=>{
          this.state.items.push(dato)})
          this.setState({items:this.state.items})
      })
      // .then((newCards => this.setState({items: newCards.results})))
      // .catch((e)=>{console.log(e)})
} 

filtrarTarjetas=()=>{
  let nacionalidadFiltrar = document.querySelector(".nacionalidadFiltro").value
  // let apellidoFiltrar = document.querySelector(".apellidoFiltro").value
  // let edadFiltrar = document.querySelector(".edadFiltrar").value
  fetch("https://radomuser.me/api/?results=20&?nat="+nacionalidadFiltrar)
    .then(result=> result.json())
    .then(data=>{
      this.setState({items:data.results})
    
    // .then(datos =>{
    //   datos.results.map((dato)=>{
    //     this.state.items.push(dato)})
    //     this.setState({items:this.state.items})
    })

}

/* reset(){
  this.setState({items: this.state.reset})
} */
/* filtroTarjeta(usuarios){
  let paramFiltro= this.state.items.filter ((usuario)=>{
    return usuario.name.first.toLowerCase() === usuarios.toLowerCase() ||
    usuario.name.last.toLowerCase() === usuarios.toLowerCase() ||
    parseInt(usuario.dob.ar) === parseInt(usuarios)
  })
  this.setState({
    items: paramFiltro
  })
  console.log(paramFiltro)
} */

  render(){
    return (            
       
      <article id="contenedor-flex">

              <div class="contenedor-buscador"> 
                  <div id="contenedor-buscador-div">
                      <h1>Buscador de perfiles</h1>
                  </div>
                  <form class="example" action="buscador.html" name="search">
                      <input type="text" placeholder="Buscar por nombre" className="nacionalidadFiltro" onClick={this.filtrarTarjetas}></input>
                      <button type="submit"><i class="fa fa-search"></i></button>
                      <input type="text" placeholder="Buscar por apellido" className="apellidoFiltro"></input>
                      <button type="submit"><i class="fa fa-search"></i></button>
                      <input type="text" placeholder="Buscar por edad" className="edadFiltro"></input>
                      <button type="submit"><i class="fa fa-search"></i></button>
                      {/* <button class="uk-button uk-button-default uk-button-large" onClick={this.reset.bind(this)}> <a> Resetear </a> </button> */}
                  </form>

                  <div>
              </div>
              
              </div>

          <div class="center">
              <input className="numTarjetas" type="number" placeholder="Cantidad"></input>
              <button class="uk-button uk-button-default uk-button-large" onClick={this.agregarTarjetas}> <a>AGREGAR TARJETAS</a></button>
                {
                  this.state.items.map((user)=>{
                    return(
                        <Tarjetas 
                          name={ user.name.first }
                          lastname= { user.name.last }
                          img={ user.picture.large }
                          email= {user.email}
                          id= {user.login.uuid}
                          cumple={user.dob.date}
                          edad= {user.dob.age}
                          calle={user.location.street.name}
                          numero={user.location.street.number}
                          fechaRegistro={user.registered.date}
                          telefono={user.phone}
                          pais={user.location.country}
                          estado={user.location.state}
                          postal={user.location.postcode}
                          onBorrar={this.eliminarTarjeta.bind(this)}
                        />
                    )
                  })
                }


              </div>
              </article>
    );
  }
}

export default Container;

