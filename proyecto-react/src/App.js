import React, {Component} from 'react';
import TarjetaContenedor from "./components/TarjetaContenedor"


class Tarjeta extends Component {

  constructor(props){
    super(props);
    this.state= {
      items:[],
    }
  }

  componentDidMount(){

    fetch('https://randomuser.me/api/?results=10&inc=name,email,picture,dob')
    .then(result => result.json())
    .then(data => {
      console.log(data.results);
    })

  }
  render(){
    return(
      <div>
        <TarjetaContenedor/>
      </div>
    )
  }
}
/* function App() {
  return (

       
         <div>
            
            <TarjetaContenedor/>  

         </div>
        
      

  );
} */

export default Tarjeta;
