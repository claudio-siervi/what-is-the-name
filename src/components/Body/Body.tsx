import React from "react";
import './Body.css';
import Button from '../Button/Button'

type BodyProps = {
    message: string;
}

function Body(props:BodyProps) {
    let buttonLabel = 'My Label';
    const updateButtonLabel = (newLabel: string): string => {
        buttonLabel=newLabel
        return newLabel
    }
    return (
        <div className="App-body">

            <h1>Aperte o Botão para gerar um nome</h1>
            <br/>

            <Button
                border="none"
                color="pink"
                height = "200px"
                onClick={() => updateButtonLabel('New Label')}
                radius = "50%"
                width = "200px"
                children = {buttonLabel}
                />
            <br/>
            <br/>
            {/*<h1>{button_label}</h1>*/}
            <br/>

        </div>
    );
}
export default Body;