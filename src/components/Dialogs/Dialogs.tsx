import {DialogList, DialogsItems} from "./DialogList/DialogList";
import {Dialog} from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import {DialogType} from '../../redux/state';

type DialogsPropsType = {
    dialogues: DialogType[];
}

export const Dialogs = (props: DialogsPropsType) => {
   /* const dialogItemsForChat = props.dialogues.map( d => {
        return(
            <Dialog key={d.id} dialog={d} />
        )
    })*/
    
    return(
        <div className={s.dialogs_container}>
            <DialogList dialogues={props.dialogues}/>
           <Dialog dialog={props.dialogues[0]}/>
        </div>
    )
}