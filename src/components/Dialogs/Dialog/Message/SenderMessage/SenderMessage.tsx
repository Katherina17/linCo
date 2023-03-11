
import s from './SenderMessage.module.css'
import {SenderMessagePropsType} from "./SenderMessageContainer";
import {MessageFormDataType, SenderMessageFormContainer} from "./SenderMessageForm";

export const SenderMessage: React.FC<SenderMessagePropsType> = (props) => {
    const{sendMessage} = props;

    const onSubmitHandler = (data: MessageFormDataType) => {
        sendMessage(data.message)
    }

    return(
        <div className={s.senderMessage}>
            <SenderMessageFormContainer onSubmit={onSubmitHandler}/>
        </div>
    )
}