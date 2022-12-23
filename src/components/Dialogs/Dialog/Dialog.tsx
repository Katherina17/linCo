import {HeaderDialogs} from "./HeaderDialogs/HeaderDialogs";
import s from './Dialog.module.css';

type DialogPropsType = {
    name: string;
    imgSrc: string;
    message: string;
}

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.Dialog_container}>
            <HeaderDialogs name={props.name} imgSrc={props.imgSrc}/>
            <p> {props.message}</p>
        </div>
    )
}

