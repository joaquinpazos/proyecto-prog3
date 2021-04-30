import React, {Component} from 'react';
import Tarjetas from "./Tarjeta"

class Container extends Component{

      
  constructor(props){
    super(props);
    this.state={
      items:[],

    }
  }


  componentDidMount(){
      fetch("https://randomuser.me/api/?results=20")
        .then(result => result.json())
        .then((data)=>{
          this.setState({items: data.results})
        })
        .catch((e)=>{console.log(e)})
}


  render(){
    return (            
       
      <article id="contenedor-flex">
          <div class="center">
     

      {
                  this.state.items.map((user)=>{
                    return(
                        <Tarjetas 
                          name={ user.name.first }
                          lastname= { user.name.last }
                          img={ user.picture.large }
                          email= {user.email}
                          id= {user.uuid}
                          cumple={user.dob.date}
                          edad= {user.dob.age}
                          direccion= {user.location}
                          register={user.registered.date}
                          telefono= {user.phone}
                        />,
                        <Tarjetas 
                          name={ user.name.first }
                          lastname= { user.name.last }
                          img={ user.picture.large }
                          email= {user.email}
                          id= {user.uuid}
                          edad= {user.dob.age}
                          direccion= {user.location}
                          register={user.registered.date}
                          telefono= {user.phone}
                        />,
                        <Tarjetas 
                          name={ user.name.first }
                          lastname= { user.name.last }
                          img={ user.picture.large }
                          email= {user.email}
                          id= {user.uuid}
                          edad= {user.dob.age}
                          direccion= {user.location}
                          register={user.registered.date}
                          telefono= {user.phone}
                        />
                        
                    )
                  })
                }
              </div>
              </article>
    );
  }
}

export default Container;