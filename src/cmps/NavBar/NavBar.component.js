import React, { Component } from 'react';
import './NavBar.component.scss';

class NavBar extends Component {

    render() {
        return (
            <header className="app-header">
                <nav>
                    <ul>
                        <li>
                            <a href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#blog">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar;