import s from './DialogList.module.css';
import {DialogItemList} from "./DialogItemList/DialogItemList";
import {DialogType} from "../../../redux/dialogsReducer";

export type DialogPropsList = {
    dialogues: DialogType[];
}

export type DialogsItems = {
    id: string,
    imgSrc: string,
    name: string,
    message: string[]
}

export const DialogList = (props: DialogPropsList) => {
    return(
        <div className={s.dialogList_container}>
            {props.dialogues.map(dialogsItemsForChat => {
                return(
                    <DialogItemList key={dialogsItemsForChat.id}
                                    imgSrc={dialogsItemsForChat.friendUser.imgSrc}
                                    name={dialogsItemsForChat.friendUser.name}
                                    message={dialogsItemsForChat.messages.map(m => m.content)}
                                    id={dialogsItemsForChat.friendUser.id}/>
                )
            })}
        </div>
    )
}