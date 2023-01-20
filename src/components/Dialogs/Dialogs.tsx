import {DialogList, DialogsItems} from "./DialogList/DialogList";
import {Dialog} from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import {commonActionTypes, DialogType} from '../../redux/state';

type DialogsPropsType = {
    dialogues: DialogType[];
    newMessageText: string;
    dispatch: (action: commonActionTypes) => void;
}

export const Dialogs = (props: DialogsPropsType) => {
    return(
        <div className={s.dialogs_container}>
            <DialogList dialogues={props.dialogues}/>
           <Dialog dialog={props.dialogues[0]} newMessageText={props.newMessageText} dispatch = {props.dispatch}/>
        </div>
    )
}