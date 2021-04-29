import React, {Component} from 'react';
import TarjetaContenedor from "./components/TarjetaContenedor"


export default class Tarjeta extends Component {

  constructor(props){
    super(props);
    this.state= {
      items:[],
    }
  }

  componentDidMount(){

    fetch('https://randomuser.me/api/?results=20')
    .then(result => result.json())
    .then(data => {
      this.setState({items: data.results});
    })

    .catch((info)=> console.log(info));
  }
  render(){
    return(
      <div className= "body">
        <header className="header">

        </header>
        <div className="addTarjetas">
            
        </div>
        <div className="filtros">

        </div>
        <TarjetaContenedor/>
        {/* <div className="tarjetas">
        {this.setState.items.map((info)=>{
          return  <TarjetaContenedor
          key= {info.id}
          informacion= {info}
          /> })
          }
        </div> */}
        <div className="reset">

        </div>
        <footer className="footer">

        </footer>
      </div>
    )
  }
}

