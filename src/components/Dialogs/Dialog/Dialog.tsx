import {HeaderDialogs} from "./HeaderDialogs/HeaderDialogs";
import s from './Dialog.module.css';
import {DialogsItems} from "../DialogList/DialogList";

type DialogProps = {
    dialogItems: DialogsItems[];
}

type DialogPropsType = {
    name: string;
    imgSrc: string;
    message: string;
}

export const Dialog = (props: DialogPropsType) => {
    return(
        <div className={s.Dialog_container}>
            <HeaderDialogs name={props.name} imgSrc={props.imgSrc}/>
        <p> {props.message}</p>
        </div>
    )
}

/*
return(
    <div className={s.Dialog_container}>
        <HeaderDialogs name={props.dialogItems[0].name} imgSrc={props.dialogItems[0].imgSrc}/>
        <p> {props.dialogItems[0].message}</p>
    </div>
)*/
