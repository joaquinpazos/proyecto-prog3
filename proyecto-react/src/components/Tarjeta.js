import React, { Component } from 'react';


class Tarjetas extends Component {

    constructor(props){
        super(props);
            this.state ={
                color: this.props.color,
                mostrameDetalle:true
        }
    }

    mostrarDetalle(){
        this.setState({
            mostrameDetalle:!this.state.mostrameDetalle
        })
    }

    render(){
        return(
            <div class="card green" onClick={this.cambiarColor} >
        
                <div class="general" >
                <div className='buttonBorrarTarjeta'>
                            <button className='borrarTarjeta' onClick={()=>this.props.onBorrar.bind(this, this.props.id)}>X</button>
                        </div>
                    <img src={this.props.img} class='imagen' alt="hola"></img>
                    <h3>{ this.props.name }</h3>
                    <h3>{ this.props.lastname }</h3>
                    <h3>{this.props.email}</h3>
                    {/* <h3>{this.props.id}, {this.props.cumple}</h3> */}
                    <h3>{this.props.cumple}({this.props.edad})</h3>
                </div>
                {
                    this.state.mostrameDetalle?
                <div>
                    <h3>{this.props.domicilio}</h3>
                    <h3>{this.props.ciudad}</h3>
                    <h3>{this.props.estado}</h3>
                    <h3>{this.props.pais}</h3>
                    <h3>{this.props.postal}</h3>
                    <h3>{this.props.fechaRegistro}</h3>
                    <h3>{this.props.telefono}</h3>
                </div>
                :null
                }
               
                <button onClick={()=>this.mostrarDetalle()}>Toggle Info</button>

                    
                    {/* aaaaaaaaaaaaa */}

            </div>
        )
    };

}
export default Tarjetas;