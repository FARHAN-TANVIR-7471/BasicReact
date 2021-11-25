import React from 'react';

function DoThis(){
    alert('Button click');
}
function Hello(props){
    return (
        <div>
            <button onClick={DoThis}>Primary</button>
            <h1>Hello, I am from functional component and my name is: {props.name}</h1>
        </div>
        
    );
}

export default Hello;