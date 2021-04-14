import React, {Component} from "react"
import {Welcome, Jokes} from './components/index.js';

class App extends Component {

    constructor() {
        super()
        this.state = {
            welcome: true
        }
        this.irChistes = this.irChistes.bind(this);
        this.irBienvenida = this.irBienvenida.bind(this);
    }
    
    irChistes() { this.setState({welcome: false}) }
    irBienvenida(){ this.setState({welcome: true}) }

    render(){
              const welcome = this.state.welcome
              
              if(welcome) return (<Welcome irChistes={this.irChistes}/>)
              else  return ( <Jokes irBienvenida={this.irBienvenida} />)  
    }
}
export default App