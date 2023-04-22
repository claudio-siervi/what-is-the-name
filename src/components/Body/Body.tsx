import React from "react";
import './Body.css';

type BodyProps = {
    message: string;
}

function Body(props:BodyProps) {
    return (
        <div className="App-body">
            <h1>{props.message}</h1>
            <br/>
            <h1>{props.message}</h1>
            <br/>
        </div>
    );
}
export default Body;