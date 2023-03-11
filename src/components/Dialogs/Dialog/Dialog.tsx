import {HeaderDialogs} from "./HeaderDialogs/HeaderDialogs";
import s from './Dialog.module.css';
import {Message} from "./Message/Message";
import SenderMessageContainer from "./Message/SenderMessage/SenderMessageContainer";
import {DialogType} from "../../../redux/dialogsReducer";

type DialogPropsType = {
    dialog: DialogType;
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.Dialog_container}>
            <HeaderDialogs name={props.dialog.friendUser.name} imgSrc={props.dialog.friendUser.imgSrc}/>
            {  props.dialog.messages.map(el => {
                return(
                    <Message key={el.id}
                            imgFriendSrc={props.dialog.friendUser.imgSrc}
                             imgUserSrc={props.dialog.currentUser.imgSrc}
                             id={el.id}
                             senderId={el.senderId}
                             content={el.content}
                             friendUserId={props.dialog.friendUser.id}/>
                )
            })}
            <SenderMessageContainer/>
        </div>
    )
}

