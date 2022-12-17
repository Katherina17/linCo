import {DialogsItems} from "../DialogList";
import s from './DialogItemList.module.css';
import {NavLink} from "react-router-dom";

export const DialogItemList = (props: DialogsItems) => {
    return(
        <NavLink to={'/dialogs/'+ props.id} className={s.dialogsItemList_container}>
            <div className={s.image_container}>
                <img src={props.imgSrc} alt={props.name}/>
            </div>
            <div className={s.Name_text}>
                <span>{props.name}</span>
                <p>{props.message}</p>
            </div>
        </NavLink>
    )
}