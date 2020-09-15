import TextField from "@material-ui/core/TextField";
import React from "react";

const CustomTextField = () => {

    return(
    <form noValidate autoComplete="off">
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
    )}

    export default CustomTextField;