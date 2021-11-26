import React from 'react';

function DoThis(a){
    alert(a);
}
function Hello(props){
    return (
        <div>
            <button onClick={DoThis.bind(this, "Hello, I am from functional component pram...")}>Click me from functional componet</button>
            <h1>Hello, I am from functional component and my name is: {props.name}</h1>
        </div>
        
    );
}

export default Hello;