import React from "react";
import './Footer.css';

type FooterProps = {
    note: string;
}

function Footer(props: FooterProps) {
    return (
        <div className="App-footer">
            <h1>{props.note}</h1>
        </div>
    );
}
export default Footer;