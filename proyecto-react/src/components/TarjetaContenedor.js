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


// agregarTarjetas(){
//   fetch("https://randomuser.me/api/?results=6")
//   .then(result => result.json())
//   .then(data => {
//     {data.results.map((nuevaTarjeta) =>{
//       this.state.datos.push(nuevaTarjeta)
//   })}
//   this.setState({items:this.state.items});
//   console.log("se agregaron las nuevas tarjetas")
//   })
// }

  render(){
    return (            
       
      <article id="contenedor-flex">
          <div class="center">
          {/* <button className="buttonAgregarTarjetas" onClick={this.agregarTarjetas.bind(this)} > AGREGAR TARJETAS </button> */}

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
                          domicilio= {user.location.street.number.name}
                          fechaRegistro={user.registered.date}
                          telefono={user.phone}
                          pais={user.country}
                          ciudad={user.city}
                          estado={user.state}
                          postal={user.postcode}
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

