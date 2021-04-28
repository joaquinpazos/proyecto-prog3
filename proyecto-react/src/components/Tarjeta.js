import React, { Component } from 'react';


class Tarjeta extends Component{

    cambiarColor(){
        alert("CAMBIASTE EL COLOR CAPO! BIEN AHÍ CRACK...");
    }

    render(){

    
        return (
            <div class="card green" onMouseOver={this.cambiarColor} >
        
                    <div class="general" >

                        <h1>Hola, {this.props.name} </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Luis_Alberto_Spinetta_en_1976.jpg/220px-Luis_Alberto_Spinetta_en_1976.jpg" alt="Girl in a jacket" width="50" height="60"></img>
                    </div>

                </div>


        );


    };  
}

export default Tarjeta;