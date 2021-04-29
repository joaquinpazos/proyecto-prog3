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

/*
export default class Tarjeta extends Component{

        constructor(props){
        super(props);
        this.state = {
            colorOriginal: this.props.color,
            color: this.props.color
        }
    }

        cambiarColor = (colorNuevo) => { 
            alert("CAMBIASTE EL COLOR CAPO! BIEN AHÍ CRACK...");
            if(this.state.color===this.state.colorOriginal)
            this.setState({ color: colorNuevo})
            else
            this.setState({ color: this.state.colorOriginal})
        console.log("cambio el color a " + this.state.color);
    }

    render(){

        return (
            <div class="card green" 
            onMouseOver={this.cambiarColor.bind(this, "red")} 
            style= {{backgroundColor: this.state.color,}}>
                    <div class="general" >
                        <h1>Hola, {this.props.name} {this.props.apellido} </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Luis_Alberto_Spinetta_en_1976.jpg/220px-Luis_Alberto_Spinetta_en_1976.jpg" alt="Girl in a jacket" width="50" height="60"></img>
                    </div>
                </div>
        );
    };  
}
*/