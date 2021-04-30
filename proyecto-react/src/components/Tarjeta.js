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

    render(){
        return(
            <div class="card green" onClick={this.cambiarColor} >
        
                <div class="general" >
                    <img src={this.props.img} class='imagen' alt="hola"></img>
                    <h3>{ this.props.name }</h3>
                    <h3>{ this.props.lastname }</h3>
                    <p>{this.props.email}</p>
                    <p>{this.props.id}({this.props.edad})</p>
                </div>

            </div>
        )
    };

}
export default Tarjetas;