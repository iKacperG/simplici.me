import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/SaveRounded"
import ReviewSlider from "./ReviewSlider";


export default class SpeedReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: [],
            processedValue: '',
            keywords: [],

        };
    }

    handleTextChange = (e) => {
        let tmp = e.target.value.split(/\. /g);
        tmp = tmp.map(el => `${el}.`);
        this.setState({
            textValue: tmp,
        })

        console.log(this.state.textValue);

    }
    handleKeywordsChange = (e) => {

        this.setState({
            keywords: e.target.value.split(','),
        })

        console.log(this.state.textValue);

    }


    handleProcessing = () => {

        //-----------------------------Main text length * user pref
        let afterDates;
        let shrinkedByWidth;
        const necessaryText = (Math.ceil(this.state.textValue.length * this.props.convSize / 100));

        //------------------------------KEYWORDS-------------------------------------------------
        const arrayOfImportance = this.state.textValue.filter((element) => {
            return (this.state.keywords.some(r => element.indexOf(r) >= 0))
        })

        //--------------------------------DATES----------------------------------------------

        afterDates = [...arrayOfImportance];
        if (arrayOfImportance.length < necessaryText) {
            const regexp = /\d{4} /
            const result = this.state.textValue.filter(element => {
                return regexp.test(element)

            })

            afterDates = [...arrayOfImportance, ...result]
            console.log(afterDates);
        }

        shrinkedByWidth = afterDates.slice(0, necessaryText)

        this.setState({

            processedValue: shrinkedByWidth


        })
        console.log(shrinkedByWidth);
    }

    render() {
        return <>
            <ReviewSlider name="Converted Size" startValue={this.props.convSize}
                          setStartValue={this.props.setConvSize}/>
            <ReviewSlider name="Keywords Focus" startValue={this.props.keywordsFocus}
                          setStartValue={this.props.setKeywordsFocus}/>

            <form noValidate autoComplete="off">
                <TextField onChange={this.handleTextChange}
                           id="outlined-multiline-static"
                           label="Type your text"
                           multiline
                           rows={15}
                           size="large"
                           variant="outlined"
                           style={{
                               width: `50%`,
                               margin: `2.5%`,
                           }}
                />
            </form>

            <form noValidate autoComplete="off">
                <TextField onChange={this.handleKeywordsChange}
                           id="outlined-multiline-static"
                           label="Type keywords"
                           multiline
                           rows={1}
                           size="large"
                           variant="outlined"
                           style={{
                               width: `50%`,
                               margin: `2.5%`,
                           }}
                />
            </form>
            <Button
                onClick={this.handleProcessing}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon/>}
            >
                Process
            </Button>
            <Container fixed maxWidth="sm">

                <Typography component="div" style={{
                    backgroundColor: '#ac1c32',
                    color: 'white',
                    fontFamily: `'Roboto Mono', monospace`,
                    height: `45vh`,
                    overflow: `auto`,
                    overflowWrap: `break-word`,
                    borderRadius: `1%`,
                    border: `5px solid #ac1c32`
                }}>
                    {this.state.processedValue}</Typography>
            </Container>

        </>

    }
}