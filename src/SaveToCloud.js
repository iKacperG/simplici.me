import React from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SaveButton from "./SaveButton";

const SaveToCloud = (props) => {

    const handleFieldValueChange = (e) => {
        props.setActualNote(e.target.value);
    }

    return( <Typography paragraph>
        <form noValidate autoComplete="off" onChange={handleFieldValueChange}>
            <TextField
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

        <SaveButton user={props.user} actualNote={props.actualNote}/>

    </Typography>)
}

export default SaveToCloud;