import React,{Component} from 'react';


class Welcome extends Component {
    doThis(){
        alert('Button click me from class component');
    }
    render(){
       return <div>
                <button onClick={this.doThis}>Click me from class componet</button>
                <h1>Hello, I am from class component and my name is: {this.props.name}</h1>
           </div>
    }
}

export default Welcome;