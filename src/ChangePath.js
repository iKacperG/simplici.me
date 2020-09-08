import React, {Component} from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import {width} from '@material-ui/system';
import {Fab} from '@material-ui/core';
import './scss/main.scss';

export default class ChangePath extends Component {
    constructor(props) {
        super(props);
        this.user=this.props.user;
        this.setUser=this.props.setUser;
    }

    render() {
        return <div className="changepath-container">
            <div className="changepath-center">
                <Fab
                    color="primary"
                    href="/#/SpeedReview"
                    aria-label="add"
                    size="large"
                    variant="extended"
                    style={{
                    boxSizing: `border-box`,
                    width: `90%`,
                    height: `100%`,

                }}>
                    <MenuBookIcon
                        width={`50%`}
                        style={{width: `50%`, height: `90vh`}}/>
                </Fab>
            </div>
            <div
                className="changepath-center">
                <Fab
                    color="primary"
                    aria-label="add"
                    size="large"
                    href="/#/createnew"
                    variant="extended"
                    style={{
                    boxSizing: `border-box`,
                    width: `90%`,
                    height: `100%`,

                }}>
                    <CreateIcon
                        width={`50%`}
                        style={{width: `50%`, height: `50%`}}/>
                </Fab>
            </div>
        </div>
    }

}