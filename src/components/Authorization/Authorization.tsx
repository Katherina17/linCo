import {FormDataType, LoginForm, LoginFormContainer} from "./LoginForm";

export const Authorization = () => {

    const onSubmit = (data: FormDataType) => {

    }

    return <>
        <LoginFormContainer onSubmit={onSubmit}/>
    </>
}