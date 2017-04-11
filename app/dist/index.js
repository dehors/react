require('./module1.js');
require('./module2.js');

import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component{
	constructor(){
		super();
		this.nombre = "pepito";		
	}
	getName(){
		return 'hi';
	}
    render(){
        return(
            <h1>Hello { this.nombre } { this.getName() }</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);