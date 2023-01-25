import {DialogList} from "./DialogList/DialogList";
import {Dialog} from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import {commonActionTypes, DialogsType, DialogType, ProfileType} from '../../redux/state';
import {EmptyObject, Store} from "redux";

type DialogsPropsType = {
    dialogues: DialogType[];
    store: Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes>;
}

export const Dialogs = (props: DialogsPropsType) => {
    return(
        <div className={s.dialogs_container}>
            <DialogList dialogues={props.dialogues}/>
           <Dialog dialog={props.dialogues[0]} store={props.store}/>
        </div>
    )
}