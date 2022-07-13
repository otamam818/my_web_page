import React from 'react';
import "../styles/homepage.css"

function Home(props) {
    return (
        <div className="homepage">
            <div className="picture-container">
                <img src={require("../pictures/mypic.png")} alt="Profile"/>
            </div>
        </div>
    )
}

export default Home;

