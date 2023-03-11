import {DialogList} from "./DialogList/DialogList";
import {Dialog} from "./Dialog/Dialog";
import s from './Dialogs.module.css';
import {DialogType} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {State} from "../../redux/redux-store";



export const Dialogs = (props: mapStateToProps) => {
    return(
        <div className={s.dialogs_container}>
            <DialogList dialogues={props.dialogues}/>
           <Dialog dialog={props.dialogues[0]}/>
        </div>
    )
}

type mapStateToProps = {
    dialogues: DialogType[];

}

const mapStateToProps = (state: State):mapStateToProps => {
    return {
        dialogues: state.dialogs!.dialogs
    }
}


export const DialogsContainer = connect(mapStateToProps)(Dialogs)