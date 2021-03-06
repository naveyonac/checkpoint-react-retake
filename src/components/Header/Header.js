import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Header>
                    <h1>Contacts</h1>
                    <nav>
                    <Link to="/"></Link>
                    <Link to="/new-contact"></Link>
                    </nav>
                </Header>
            </div>
        );
    }
}

export default Header; 