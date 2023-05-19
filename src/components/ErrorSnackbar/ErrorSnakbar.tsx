import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {connect} from "react-redux";
import {RootState} from "redux/redux-store";
import {setError} from "redux/appReducer";


type PropsType = {
    setError: (error: string | null) => void
} & mapStateToProps

function CustomizedSnackbars(props: PropsType) {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setError(null)
    };

    return (
        <Snackbar  autoHideDuration={3000} onClose={handleClose} open={props.error !== null}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {props.error}
            </Alert>
        </Snackbar>
    );
}

type mapStateToProps = {
    error: null | string
}

const mapStateToProps = (state: RootState):mapStateToProps => {
    return {
        error: state.app.error
    }
}

export const ErrorSnackBar = connect(mapStateToProps, {setError})(CustomizedSnackbars)