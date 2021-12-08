import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Alert } from 'bootstrap';

const AlertMe=(a)=>{
    alert(a);
    <Alert >
        This is a {a} alert—check it out!
    </Alert>
}

const Welcome=()=>{
    return(
        <div className="m-5">
            <p className="text-primary m-2" bg="info">Hello I am functional component</p>
            {/* <Button className="btn outline-info m-2" size="sm" block></Button> */}
            <Button onClick={AlertMe.bind(this,"Hello I am from Array function")}  variant="outline-info"  block>Test Bootstrap Button</Button>
        </div>
    );
}

export default Welcome;