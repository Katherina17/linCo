import {HeaderDialogs} from "./HeaderDialogs/HeaderDialogs";
import s from './Dialog.module.css';
import {commonActionTypes, DialogsType, DialogType, ProfileType} from "../../../redux/state";
import {Message} from "./Message/Message";
import {EmptyObject, Store} from "redux";
import {SenderMessageContainer} from "./Message/SenderMessage/SenderMessageContainer";
type DialogPropsType = {
    dialog: DialogType;
    store: Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes>;
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.Dialog_container}>
            <HeaderDialogs name={props.dialog.friendUser.name} imgSrc={props.dialog.friendUser.imgSrc}/>
            {props.dialog.messages.map(el => {
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
            <SenderMessageContainer store={props.store}/>
        </div>
    )
}

