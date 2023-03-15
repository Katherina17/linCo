import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../../../Button/Button";
import {TextArea} from "../../../../TextArea/TextArea";
import {required} from "../../../../../utils/validators/validators";
import s from './SenderMessage.module.css'



export type MessageFormDataType = {
    message: string
}



export const SenderMessageForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return <form onSubmit={props.handleSubmit} className={s.messageForm}>
        <Field placeholder={'type a message'} name={'message'} component={TextArea} validate={[required]}/>
        <Button name={'send'}/>
    </form>
}


export const SenderMessageFormContainer = reduxForm<MessageFormDataType>({
    form: 'senderMessageForm'
})(SenderMessageForm)