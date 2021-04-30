import React, { Component } from 'react';


class Tarjetas extends Component {

    constructor(props){
        super(props);
            this.state ={
                color: this.props.color
        }
    }

    cambiarColor(){
        alert("CAMBIASTE EL COLOR CAPO! BIEN AHÍ CRACK...");
    }

    componentDidMount(){
        console.log("Se creo la tarjeta "+ this.props.id);
      }
    
      componentDidUpdate(prevProps, prevStates){
        console.log("Se actualizo la tarjeta "+ this.props.id);
        console.log(prevProps);
        console.log(prevStates)
    
      }
    
      componentWillUnmount(){
        console.log("Se borro la tarjeta "+ this.props.id);
      }

    render(){
        return(
            <div class="card green" onClick={this.cambiarColor} >

                    <div className='buttonBorrarTarjeta'>
                        <button className='borrarTarjeta' onClick={this.props.onBorrar.bind(this, this.props.id)}>X</button>
                    </div>

                <div class="general" >

                    <img src={this.props.img} class='imagen' alt="hola"></img>
                    <h3>NOMBRE: { this.props.name }</h3>
                    <h3>APELLIDO: { this.props.lastname }</h3>
                    <h3>EMAIL: {this.props.email}</h3>
                    {/* <h3>{this.props.id}, {this.props.cumple}</h3> */}
                    <h3>FECHA DE NACIMIENTO: {this.props.cumple} ({this.props.edad})</h3>
                </div>

                    
                    

            </div>
        )
    };

}
export default Tarjetas;