import React, { Component } from 'react';


class Tarjeta extends Component{

    cambiarColor(){
        alert("CAMBIASTE EL COLOR CAPO! BIEN AHÍ CRACK...");
    }

    render(){

    
        return (
            <div class="card green" onClick={this.cambiarColor} >
        
                    <div class="general" >

                        <h1>{this.props.name} </h1>
                        <h2>{this.props.mail}</h2>
                        <h2>{this.props.cumple}</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Luis_Alberto_Spinetta_en_1976.jpg/220px-Luis_Alberto_Spinetta_en_1976.jpg"  width="50" height="60"></img>
                        <button>Borrar tarjeta</button>
                    </div>

                </div>


        );


    };  
}

export default Tarjeta;