import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {

    render(){
        return (
            <div className="nav-bar">
                <div>
                    <a className="nav-link" href="#home">Home</a>
                </div>
                <div>
                    <a className="nav-link" href="#gallery">Gallery</a>
                </div>
                <div>
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default Navigation;
