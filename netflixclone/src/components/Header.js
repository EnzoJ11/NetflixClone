import React from "react";
import "./Header.css";

export default ({black}) =>{
    return (
        <header className={black ? 'bar' : ''}>
            <div className="header--logo">
                <a href="/"></a>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuario"></img>
                </a>
            </div>
        </header>
    )
}


