import React,{Component} from 'react';


class Welcome extends Component {
    doThis(a){
        alert(a);
    }
    render(){
       return <div>
                <button onClick={this.doThis.bind(this, "Hello, I am from class component")}>Click me from class componet</button>
                <h1>Hello, I am from class component and my name is: {this.props.name}</h1>
           </div>
    }
}

export default Welcome;