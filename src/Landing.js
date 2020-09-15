import React from 'react';
import Button from '@material-ui/core/Button';
import Logo from './images/logo.svg';

import './scss/main.scss'
import Typography from "@material-ui/core/Typography";

const Landing = () => {

    return(
        <div className="landing-container">
            <div className="landing-stop">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kmTECF0JZyQ" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
                    <div className='button-group'>
            <Button className="btn" href="#/login" variant="contained">Log in</Button>
            <Button className="btn" href="#/register" variant="contained">Register</Button>

                    </div>
                <div className="logo-group">
                    <h2 className="logo">simplici</h2>
                    <h2 className="logo-me">.me</h2>
                </div>

                    </div>
            </div>
    )
}

export default Landing;