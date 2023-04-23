import React, {useState} from "react";
import './Body.css';
import Button from '../Button/Button'
import { getRandomName, getRandomNumber} from "./Body.utils";
import NameService from "../../services/NameService";
import randomColor from "randomcolor";

function Body():JSX.Element {
    let randomLabel:string = 'GERE UM NOME ALEATÓRIO';
    let topLabel:string = 'GERE UM NOME TOP';

    const [newRandomName, setNewRandomName] = useState<string>(randomLabel)
    const [newName, setNewName] = useState<string>(topLabel)

    const setTopName = ():any => {
         NameService.getAll()
            .then( (response: any) => {
                const name =  response.data[0].res[getRandomNumber(response.data[0].res.length)].nome
                setNewName(name)
            })
            .catch((e: Error) => {
                console.log(e);
            })
    };

    return (
        <div className="App-body"
             style={{backgroundColor: randomColor()}}>
            <br/>
            <br/>
            <br/>
            <Button
                border = "none"
                color  = {randomColor()}
                onClick = {() => {setNewRandomName(getRandomName(3)); setNewName(topLabel);}}
                radius = "50%"
                height = "400px"
                width = "400px"
                fontSize = "5rem"
                children = {newRandomName.toUpperCase()}
                />
            <br/>
            <br/>
            <br/>
            <Button
                border = "none"
                color  = {randomColor()}
                onClick = {() => {setTopName(); setNewRandomName(randomLabel);}}
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