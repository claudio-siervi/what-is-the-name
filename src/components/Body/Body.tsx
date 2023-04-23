import React, {useState} from "react";
import './Body.css';
import Button from '../Button/Button'
import {getRandomColor, getRandomName} from "./Body.utils";


function Body():JSX.Element {
    let buttonLabel:string = 'APERTE O BOTÃO';
    let buttonColor:string = 'blue'

    const [newLabel, setNewLabel] = useState<string>(buttonLabel)
    const [newColor, setNewColor] = useState<string>(buttonColor)

    return (
        <div className="App-body"
             style={{backgroundColor: newColor}}>
            <br/>
            <br/>
            <br/>
            <Button
                border = "none"
                color  ="pink"
                onClick = {() => getRandomName(3, setNewLabel)}
                radius = "50%"
                height = "400px"
                width = "400px"
                fontSize = "5rem"
                children = {newLabel.toUpperCase()}
                />
            <br/>
            <br/>
            <br/>
            <Button
                border = "none"
                color  ="red"
                onClick = {() => getRandomColor(setNewColor)}
                radius = "50%"
                height = "400px"
                width = "400px"
                fontSize = "4rem"
                children = {newLabel.toUpperCase()}
            />
        </div>
    );
}
export default Body;