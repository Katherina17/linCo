import TextField from "@mui/material/TextField";
import * as React from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";

export const MUField = (props: WrappedFieldProps) => {
    let { meta: { touched, error } } = props;
    let hasError = touched && !!error
    return (
       <TextField
            margin="normal"
            /*required i need to change it*/
            fullWidth
            error={hasError}
            inputProps={props.input}
            {...props}
          />
    )
}