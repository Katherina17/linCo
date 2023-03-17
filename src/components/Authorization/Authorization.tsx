import {FormDataType, LoginForm, LoginFormContainer} from "./LoginForm";

export const Authorization = () => {

    const onSubmit = (data: FormDataType) => {
        console.log(data)
    }

    return <>
        <LoginFormContainer onSubmit={onSubmit}/>
    </>
}