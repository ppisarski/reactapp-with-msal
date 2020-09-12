import React, { Component } from 'react';
import './Layout.css';
import Navigation from '../components/Navigation';

class Layout extends Component {
    render = () => (
        <>
            <Navigation />
            <main className="Content">
                {this.props.children}
            </main>
        </>
    );
};

export default Layout;