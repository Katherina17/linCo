import TextField from "@mui/material/TextField";
import * as React from "react";

export const MUField = (props: any) => {
    let { input, label, type, meta: { touched, error, warning } } = props;
    console.log(touched && error)
    let hasError = touched && error ? true : false
    return (
       <TextField
            margin="normal"
            required
            fullWidth
            name={input.name}
            label={input.name}
            type={input.name}
            id={input.name}
            error={hasError}
          />
    )
}