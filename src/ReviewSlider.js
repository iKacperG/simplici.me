import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import React, {Component} from "react";

export default class ReviewSlider extends Component {

    handleSliderChange = (e,value) => {
        this.props.setStartValue(value)
    }
    render() {
        return <>
            <Container style={{display: `flex`, justifyContent: `center`}}><Typography id="discrete-slider-always"
                                                                                       gutterBottom
                                                                                       style={{
                                                                                           display: `flex`,
                                                                                           alignItems: `center`
                                                                                       }}>
                {this.props.name}
            </Typography>
                <Slider onChange={this.handleSliderChange} style={{
                    width: `20%`,
                    margin: `4%`,
                }}
                        defaultValue={this.props.startValue}
                        step={1}

                        valueLabelDisplay="on"
                /></Container>
        </>
    }
}