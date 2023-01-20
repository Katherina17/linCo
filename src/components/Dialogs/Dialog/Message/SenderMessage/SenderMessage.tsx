import {TextArea} from "../../../../TextArea/TextArea";
import {Button} from "../../../../Button/Button";
import s from './SenderMessage.module.css'
import {addNewMessageActionCreator, commonActionTypes, updateMessageActionCreator} from "../../../../../redux/state";

type SenderMessagePropsType = {
    newMessageText: string;
    dispatch: (action: commonActionTypes) => void;
}

export const SenderMessage: React.FC<SenderMessagePropsType> = (props) => {
    const{newMessageText, dispatch} = props;
    const updateValue = (newMessage: string) => {
        dispatch(updateMessageActionCreator(newMessage))
    }

    const sendMessageOnClickHandler = () => {
        dispatch(addNewMessageActionCreator())
    }

    return(
        <div className={s.senderMessage}>
            <TextArea callBack={(newPostText) =>{updateValue(newPostText)}} placeholder={'type a message'} value={newMessageText}/>
            <Button name={'send'} callBack={sendMessageOnClickHandler}/>
        </div>
    )
}