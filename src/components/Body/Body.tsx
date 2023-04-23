import React, {useEffect, useState} from "react";
import './Body.css';
import Button from '../Button/Button'
import {getRandomColor, getRandomName, getRandomNumber} from "./Body.utils";
import NameService from "../../services/NameService";


function Body():JSX.Element {
    let buttonLabel:string = 'APERTE O BOTÃO';
    let buttonColor:string = 'blue'

    const [newLabel, setNewLabel] = useState<string>(buttonLabel)
    const [newColor, setNewColor] = useState<string>(buttonColor)
    const [newName, setNewName] = useState<string>('')




    const retrieveName = ():any => {
        NameService.getAll()
            .then((response: any) => {
                // setTutorials(response.data);
                const name = response.data[0].res[getRandomNumber(response.data[0].res.length)].nome
                console.log(name);
                console.log(response.data[0].res)
                setNewName(name)
            })
            .catch((e: Error) => {
                console.log(e);
            })
    };

    useEffect(() => {
        retrieveName();
    }, []);


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
                onClick = {() => retrieveName()}
                radius = "50%"
                height = "400px"
                width = "400px"
                fontSize = "4rem"
                children = {newName.toUpperCase()}
            />
        </div>
    );
}
export default Body;