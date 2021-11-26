import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Welcome(){
    return(
        <div className="m-5">
            <Button className="btn outline-info m-2">Test Bootstrap Button</Button>
            <Button variant="outline-info">Info</Button>
        </div>
    );
}

export default Welcome;