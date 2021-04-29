import React from "react";
import Tarjeta from "./Tarjeta"

export default class TarjetaContenedor{

  constructor(props){
    super(props);
    this.state={
      items: []
    }

  }

  componentDidMount(){
    fetch('https://randomuser.me/api/?results=10')
    .then(result => result.json())
    .then(data => {
      this.setState({items: data.results});
      console.log(data.results)
    })
   
  }
  
    render(){
      return(
  
        <div class="body">         
                  {
                    this.state.items.map((item)=>{
                      return(
                          <Tarjeta 
                            name={ user.name.first }
                            lastname= { user.name.last }
                            img={ user.picture.large }
                            email= {user.email}
                            edad= {user.dob.age}
                          />
                      )
                    })
                  }
          </div>
      );
  }
  


}


/*
function TarjetaContenedor(){

    return(

    <article id="contenedor-flex">

        <div class="center">

                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                <Tarjeta name="Lautaro Ortiz" mail="ortizl@udesa.edu.ar" cumple="12/04/1999"/>
                
                
                

        </div>

    </article>

        

    );
}

export default TarjetaContenedor; 
*/

/*
export default class TarjetaContenedor extends Component {

    constructor(){
        super();
        this.state ={
          datos: [],
        }
     }  

---> funcion de agregar tarjeta

AgregarTarjeta(){
    console.log("se agregaro una nueva tarjeta")
    fetch("https://randomuser.me/api/?results=6")
    .then(result => result.json())
    .then (info => {
        info.results.map((nuevaTarjeta) => {
            this.state.datos.push(nuevaTarjeta)           
        })
        this.setState({datos:this.state.datos});
    })
  }

---> funcion de borrar tarjeta

borrarTarjeta(idTarjeta){
    console.log("Se borro la tarjeta")
    let resultado = this.state.datos.filter( (info) => {
      return info.id !== idTarjeta
    });
    this.setState({datos: resultado});
    console.log("Se borro la tarjeta " + idTarjeta)
 }

      render(){

        return(
                <div className="body">

                    <div className="center"> 

                            <button className="buttonAgregarTarjetas" onClick={this.agregarTarjetas.bind(this)} > AGREGAR TARJETAS </button>
                   
                            <div/>
                
                <div/>
            );
      }

} */

