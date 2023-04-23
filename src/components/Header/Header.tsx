import React from "react";
import './Header.css';

const headerText ={
    title:"Aperte o Botão para gerar um nome",
    subtitle:"Por enquanto só gera letras"
}

function Header() {
    return (
        <div className="App-header">
            <h1>{headerText.title}</h1>
            <p>{headerText.subtitle}</p>
        </div>
    );
}
export default Header;
