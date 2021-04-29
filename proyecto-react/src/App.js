import React, {Component} from 'react';
import TarjetaContenedor from "./components/TarjetaContenedor"


export default class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      items:[],
    }
  }

  componentDidMount(){

    fetch('https://randomuser.me/api/?results=10&inc=name,login')
    .then(result => result.json())
    .then(data => {
      this.setState({items: data.results});
      console.log(data.results)
    })
   
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
        <div className="contenedor">
        { this.state.items.map((item)=>{
          return <TarjetaContenedor
          key={item.login.uuid}
          informacion={item.name.firts}/>
        })}
        </div>
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

