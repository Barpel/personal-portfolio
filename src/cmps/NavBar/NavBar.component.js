import React, { Component } from 'react';
import './NavBar.component.scss';

class NavBar extends Component {
    selectedLink = 'home';

    linkClicked(ev, str) {
        console.log(this)
        // selectedLink = ev.target.innerText.toLowerCase()
    }

    render() {
        return (
            <header className="app-header">
                <nav>
                    <ul>
                        <li>
                            <a href="#"
                                className={this.selectedLink === 'home' ? 'selected' : ''}
                                onClick={this.linkClicked}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className={this.selectedLink === 'about' ? 'selected' : ''}
                                onClick={this.linkClicked}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className={this.selectedLink === 'portfolio' ? 'selected' : ''}
                                onClick={this.linkClicked}>
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className={this.selectedLink === 'blog' ? 'selected' : ''}
                                onClick={this.linkClicked}>
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className={this.selectedLink === 'contact' ? 'selected' : ''}
                                onClick={this.linkClicked}>
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