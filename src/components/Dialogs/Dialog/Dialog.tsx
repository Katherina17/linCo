import {HeaderDialogs} from "./HeaderDialogs/HeaderDialogs";
import s from './Dialog.module.css';
import {DialogsItems} from "../DialogList/DialogList";

type DialogProps = {
    dialogItems: DialogsItems[];
}

export const Dialog = (props: DialogProps) => {
    return(
        <div className={s.Dialog_container}>
            <HeaderDialogs name={props.dialogItems[0].name} imgSrc={props.dialogItems[0].imgSrc}/>
        <p> {props.dialogItems[0].message}</p>
        </div>
    )
}