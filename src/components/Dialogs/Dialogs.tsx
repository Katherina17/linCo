import {DialogList, DialogsItems} from "./DialogList/DialogList";
import {Dialog} from "./Dialog/Dialog";
import s from './Dialogs.module.css';

type DialogsPropsType = {
    dialogsItemsForChat: DialogsItems[];
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogItemsForDialog = props.dialogsItemsForChat.map( d => {
        return(
            <Dialog name={d.name} imgSrc={d.imgSrc} message={d.message} />
        )
    })
    
    return(
        <div className={s.dialogs_container}>
            <DialogList dialogsItems={props.dialogsItemsForChat}/>
            {dialogItemsForDialog}
        </div>
    )
}