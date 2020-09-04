import React from 'react';
import SpeedReview from "./SpeedReview";
import {Component} from "react";
import {text} from "@fortawesome/fontawesome-svg-core";


export default class ShrinkingAlgorithm extends Component {
    constructor(props) {
        super(props);


    }

    useAlgorithm = () => {

        const textToProcess = [this.props.typedText]
        this.props.result = textToProcess
    }

    render() {
        return <h1>Hello</h1>
    }


}

const shrinkingAlgorithm = new ShrinkingAlgorithm;



