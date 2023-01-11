import {HeaderDialogs} from "./HeaderDialogs/HeaderDialogs";
import s from './Dialog.module.css';
import {DialogType, MessageType} from "../../../redux/state";
import {Message} from "./Message/Message";
import {SenderMessage} from "./Message/SenderMessage/SenderMessage";
type DialogPropsType = {
    dialog: DialogType
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.Dialog_container}>
            <HeaderDialogs name={props.dialog.friendUser.name} imgSrc={props.dialog.friendUser.imgSrc}/>
            <Message imgFriendSrc={props.dialog.friendUser.imgSrc}
                         imgUserSrc={props.dialog.currentUser.imgSrc}
                         id={props.dialog.messages[0].id}
                         senderId={props.dialog.messages[0].senderId}
                         content={props.dialog.messages[0].content}
                         friendUserId={props.dialog.friendUser.id}/>
            <SenderMessage/>
        </div>
    )
}

