import s from './DialogList.module.css';
import {DialogItemList} from "./DialogItemList/DialogItemList";

export type DialogPropsList = {
    dialogsItems: Array<DialogsItems>;
}

export type DialogsItems = {
    id: number,
    imgSrc: string,
    name: string,
    message: string
}

export const DialogList = (props: DialogPropsList) => {
    return(
        <div className={s.dialogList_container}>
            {props.dialogsItems.map(dialogsItemsForChat => {
                return(
                    <DialogItemList key={dialogsItemsForChat.id}
                                    imgSrc={dialogsItemsForChat.imgSrc}
                                    name={dialogsItemsForChat.name}
                                    message={dialogsItemsForChat.message}
                                    id={dialogsItemsForChat.id}/>
                )
            })}
        </div>
    )
}