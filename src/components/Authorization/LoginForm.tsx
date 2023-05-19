import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {email, required} from "../../utils/validators/validators";
import {MUField} from "./MUField";

const theme = createTheme();

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}

type FormAdditionalPropsType = {
    captcha: null | string
}

export const LoginForm = (props: InjectedFormProps<FormDataType, FormAdditionalPropsType> & FormAdditionalPropsType) => {
    const {error, handleSubmit, captcha} = props;
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <Field name='login' type={'email'} label={'login'} required component={MUField}
                               validate={[required, email]}/>
                        <Field name='password' type={'password'} label={'password'} required component={MUField}
                               validate={[required]}/>
                        <Field name='rememberMe' component={() => <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />}/>

                        {captcha !== null &&
                            <div>
                                <img src={captcha}/>
                                <Field name='captcha' type={'text'} label={'captcha'} required component={MUField}/>
                            </div>}
                        {error && <p style={{color: 'red'}}> {error} </p>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}


export const LoginFormContainer = reduxForm<FormDataType, FormAdditionalPropsType>({
    form: 'logInOrLigOut',

})(LoginForm)

