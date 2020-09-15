import React, {Component, useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/SaveRounded"
import ReviewSlider from "./ReviewSlider";
import NoteGallery from "./NoteGallery";


export default class SpeedReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: [],
            processedValue: '',
            keywords: [],
            display: 'none',
            buttonDisplay: 'none',

        };
    }

    handleTextChange = (e) => {
        let tmp = e.target.value.split(/\. /g);
        tmp = tmp.map(el => `${el}.`);
        this.setState({
            textValue: tmp,
        })


    }
    handleKeywordsChange = (e) => {

        this.setState({
            keywords: e.target.value.split(','),
        })


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
        console.log(this.state.textValue + 'textValue')
        console.log(arrayOfImportance + 'arrayOf');
        //--------------------------------DATES----------------------------------------------
        let result;
        afterDates = [...arrayOfImportance];
        if (arrayOfImportance.length !== 0 && arrayOfImportance.length < necessaryText) {
            console.log(arrayOfImportance.length+'length');
            const regexp = /\d{4} /
            result = this.state.textValue.filter(element => {
                return regexp.test(element)

            })

            afterDates = [...arrayOfImportance, ...result];

        }
        else if(arrayOfImportance.length===0){
            console.log(arrayOfImportance.length+'length');
            console.log('stillhere');
            result = this.state.textValue;
            afterDates = [...arrayOfImportance, ...result];
        }


        shrinkedByWidth = afterDates.slice(0, necessaryText)

        this.setState({
            processedValue: shrinkedByWidth,
            display: 'flex',
        })


    }
    handleClear = () => {
        this.setState({
            display: 'none',
            processedValue: '',
        })
    }
    handleMinimize = () => {

        if (this.state.display === 'flex' && this.state.processedValue !== '') {
            this.setState({
                display: 'none',
                buttonDisplay: 'flex',
            });
        } else if (this.state.display === 'none' && this.state.processedValue !== '') {
            this.setState({
                display: 'flex',
                buttonDisplay: 'none',
            })
        }
    }

    render() {
        return <div className="review-container">
            <NoteGallery/>
            <Button
                href="/#/CreateNew"
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon/>}
            >
                Note writing screen
            </Button>
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
            <div className="button-group-review">
                <Button
                    onClick={this.handleProcessing}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon/>}
                >
                    Process
                </Button>
                <Button
                    onClick={this.handleMinimize}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon/>}
                    style={{
                        display: this.state.buttonDisplay,
                    }}
                >
                    Maximize
                </Button>
            </div>

            <Container fixed maxWidth="sm">

                <Typography component="div" className="result" style={{
                    display: this.state.display,
                }}>
                    {this.state.processedValue}
                    <div className="button-group">
                        <Button
                            onClick={this.handleMinimize}
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon/>}
                        >
                            Minimize
                        </Button>
                        <Button
                            onClick={this.handleClear}
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<SaveIcon/>}
                        >
                            Clear
                        </Button>
                    </div>
                </Typography>
            </Container>

        </div>

    }
}