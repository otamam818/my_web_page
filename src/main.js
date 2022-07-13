import React from 'react';
import Navbar from './components/navbar.js';
import Home from './components/home.js';

let NAME = "Tahmin Ahmed";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: window.location.href,
        };
    }

    render() {
        // The element to represent what is in the page
        let elem = this.state.url.includes("/blog") ? <p>Hello</p> :
                   <Home />;

        return (
            <>
                <Navbar name={NAME}/>
                {elem}
            </>
        )
    }
}

export default Main;

