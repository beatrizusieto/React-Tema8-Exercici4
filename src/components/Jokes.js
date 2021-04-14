import React, { Component } from 'react';
import {Weather, Joke, Pagina} from './index.js';

class Jokes extends Component
{
      
render(){
return(  <Pagina
                weather={<Weather />}
                titulo={<div><h5><b>Preparat per riure?</b> &#129315;</h5><br/></div>}
                joke={<Joke />}
                funcion={this.props.irBienvenida}
                tituloBoton="Accede a la web de bienvenida"/>)
  }
}  
export default Jokes
