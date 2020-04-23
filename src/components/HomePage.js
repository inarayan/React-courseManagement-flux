import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';
function HomePage(){

    return (
        <div className="jumbotron">
            <h1>Plural Sight Administration</h1>
            <p>React, Flux and React Router for ultra responsive web-apps</p>
            <Link to="/about" component={About} className="btn btn-primary">About</Link>
        </div>
    );
}
    
export default HomePage;