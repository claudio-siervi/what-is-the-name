import React from "react";
import './Header.css';

type HeaderProps  ={
    title: string;
    subtitle: string;
}

function Header(props: HeaderProps) {
    return (
        <div className="App-header">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}
export default Header;
