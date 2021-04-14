import React, { Component } from 'react';
import {CuadroStyled, BackgroundStyled} from './index.js';

class Pagina extends Component
{
      
render()
{
return(  
    <BackgroundStyled className="col-12" >
    {this.props.weather}
    <div className="container">
        <div className="row"><br></br><br></br><br></br></div>
        <div className="row" >
            <div className="col-3">
            </div>
                <CuadroStyled className="col-6 text-center">    
                <p>{this.props.titulo}</p> 
                   {this.props.joke}
                <br></br> 
                <button type="submit" className="btn btn-info" onClick={this.props.funcion}>
                    {this.props.tituloBoton}
                </button>
                </CuadroStyled>
            <div className="col-3">
            </div>
        </div>
    </div>
    </BackgroundStyled>)
}
}

export default Pagina