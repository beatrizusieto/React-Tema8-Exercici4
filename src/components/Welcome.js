import React, { Component } from 'react';
import {Pagina} from './index.js';

class Welcome extends Component
{
    render() { return( <Pagina
                        weather="" 
                        titulo="Bienvenido a la web de chistes"
                        joke=""
                        funcion={this.props.irChistes}
                        tituloBoton="Accede a la web de chistes"/>) }
}

export default Welcome
