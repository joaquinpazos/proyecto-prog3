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
  fetch("https://randomuser.me/api/?results=")
      .then(result => result.json())
      .then((newCards => this.setState({items: newCards.results})))
      .catch((e)=>{console.log(e)})
}  

  render(){
    return (            
       
      <article id="contenedor-flex">

              <div class="contenedor-buscador"> 
                  <div id="contenedor-buscador-div">
                      <h1>Buscador de perfiles</h1>
                  </div>
                  <form class="example" action="buscador.html" name="search">
                      <input type="text" placeholder="Buscar por nombre"></input>
                      <button type="submit"><i class="fa fa-search"></i></button>
                      <input type="text" placeholder="Buscar por apellido"></input>
                      <button type="submit"><i class="fa fa-search"></i></button>
                      <input type="text" placeholder="Buscar por edad"></input>
                      <button type="submit"><i class="fa fa-search"></i></button>
                  </form>

                  <div>
              <button class="uk-button uk-button-default uk-button-large" onClick={this.agregarTarjetas}> <a>AGREGAR TARJETAS</a></button>
              </div>
              
              </div>

          <div class="center">
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

