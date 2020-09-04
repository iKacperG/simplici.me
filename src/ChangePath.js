import React, {Component} from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import {width} from '@material-ui/system';
import {Fab} from '@material-ui/core';


export default class ChangePath extends Component {
    render() {
        return <div style={{display: `flex`}}>
            <div style={{
                width: `50%`,
                height: `100%`,
            }}>
                <Fab color="primary" href="/#/SpeedReview" aria-label="add" size="large" variant="extended" style={{
                    boxSizing: `border-box`,
                    width: `90%`,
                    height: `100%`,
                    margin: `5%`,
                }}>
                    <MenuBookIcon width={`50%`} style={{width: `50%`, height: `90vh`}}/>
                </Fab>
            </div>
            <div style={{width: `50%`, height: `50%`,}}>
                <Fab color="primary" aria-label="add" size="large" variant="extended" style={{
                    boxSizing: `border-box`,
                    width: `90%`,
                    height: `100%`,
                    margin: `5%`,
                }}>
                    <CreateIcon width={`50%`} style={{width: `50%`, height: `90vh`}}/>
                </Fab>
            </div>
        </div>
    }

}