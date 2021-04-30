import React, { Component } from 'react';


class Tarjetas extends Component {

    constructor(props){
        super(props);
            this.state ={
                color: this.props.color,
                mostrameDetalle:false,
                volveNormal:true,
        }
    }

    volverNormal(){
        this.setState({
            volveNormal:!this.state.volveNormal
        })
    }

    mostrarDetalle(){
        this.setState({
            mostrameDetalle:!this.state.mostrameDetalle
        })
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
            <div class="card green" >

                    <div className='buttonBorrarTarjeta'>
                        <button className='borrarTarjeta' onClick={this.props.onBorrar.bind(this, this.props.id)}>X</button>
                    </div>

                  {
                      this.state.volveNormal?
                  
                <div class="general" >

                    <img src={this.props.img} class='imagen' alt="hola"></img>
                    <h3>NOMBRE: { this.props.name }</h3>
                    <h3>APELLIDO: { this.props.lastname }</h3>
                    <h3>EMAIL: {this.props.email}</h3>
                    <h3>FECHA DE NACIMIENTO: {this.props.cumple} ({this.props.edad})</h3>
                </div>
                
                :null
            }
                               
                {
                    this.state.mostrameDetalle?
                <div class="general">
                    <h3>DOMICILIO:{this.props.calle} {this.props.numero}</h3>
                    <h3>ESTADO:{this.props.estado}</h3>
                    <h3>PAÍS:{this.props.pais}</h3>
                    <h3>CÓDIGO POSTAL:{this.props.postal}</h3>
                    <h3>FECHA DE REGISTRO:{this.props.fechaRegistro}</h3>
                    <h3>TELÉFONO:{this.props.telefono}</h3>
                </div>
                :null
                }
               
                <button
                    onClick = {() => {
                        this.mostrarDetalle();
                        this.volverNormal();
                }}>Toggle Detalle</button>

            </div>
        )
    };

}
export default Tarjetas;