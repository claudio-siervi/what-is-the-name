import React, {useState} from "react";
import './Body.css';
import Button from '../Button/Button'


function Body():JSX.Element {
    let buttonLabel:string = 'APERTE O BOTÃO';
    let buttonColor:string = 'blue'



    const [newLabel, setNewLabel] = useState<string>(buttonLabel)

    const [newColor, setNewColor] = useState<string>(buttonColor)

    const updateBody = (): void => {
        const alphabet:string = "abcdefghijklmnopqrstuvwxyz"
        const randomCharacter:string = alphabet[Math.floor(Math.random() * alphabet.length)]
        setNewLabel(randomCharacter )

        const color:string[] = ['yellow', 'blue','red', 'green', 'black', 'white', 'brown']
        console.log(Math.floor(Math.random() * color.length))
        setNewColor(color[Math.floor(Math.random() * color.length)])
    }

    return (
        <div className="App-body"
             style={{backgroundColor: newColor}}>

            <Button
                border = "none"
                color  ="pink"
                onClick = {() => updateBody()}
                radius = "50%"
                height = "400px"
                width = "400px"
                fontSize = "5rem"
                children = {newLabel.toUpperCase()}
                />
            <br/>
            <br/>
            <br/>
        </div>
    );
}
export default Body;