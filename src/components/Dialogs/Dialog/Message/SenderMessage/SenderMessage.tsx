import {TextArea} from "../../../../TextArea/TextArea";
import {Button} from "../../../../Button/Button";
import s from './SenderMessage.module.css'
import {SenderMessagePropsType} from "./SenderMessageContainer";

export const SenderMessage: React.FC<SenderMessagePropsType> = (props) => {
    const{newMessageText, updateValue, sendMessage } = props;
    const onChangeUpdateValue = (newMessage: string) => {
        updateValue(newMessage)
    }

    const sendMessageOnClickHandler = () => {
        sendMessage();
    }

    return(
        <div className={s.senderMessage}>
            <TextArea callBack={(newPostText) =>{onChangeUpdateValue(newPostText)}} placeholder={'type a message'} value={newMessageText}/>
            <Button name={'send'} callBack={sendMessageOnClickHandler}/>
        </div>
    )
}