import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../../../Button/Button";



export type MessageFormDataType = {
    message: string

}

export const SenderMessageForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return <form onSubmit={props.handleSubmit}>
        <Field placeholder={'type a message'} name={'message'} component={'textarea'}/>
        <Button name={'send a message'}/>

    </form>
}


export const SenderMessageFormContainer = reduxForm<MessageFormDataType>({
    form: 'senderMessageForm'
})(SenderMessageForm)