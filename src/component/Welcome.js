import React,{Component} from 'react';

class Welcome extends Component {
    render(){
       return <h1>Hello, I am from class component and my name is: {this.props.name}</h1>
    }
}

export default Welcome;