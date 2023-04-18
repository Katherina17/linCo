import s from './PeopleInfo.module.css';
import userImg from '../../../assets/user.png';
import {NavLink} from "react-router-dom";

type PeopleInfoPropsType = {
    img: {small: string | null, large: string | null};
    name: string;
    status: string | null;
    id: number
}


export const PeopleInfo = (props: PeopleInfoPropsType) => {
    return(
        <div className={s.imgAndInfo}>
            <NavLink to={`/profile/${props.id}`}>
                <div className={s.image_container}>
                    <img src={props.img.large !== null ? props.img.large : props.img.small !== null ? props.img.small : userImg} alt={props.name}/>
                </div>
            </NavLink>
            <div className={s.info}>
                <h2>{props.name}</h2>
                <p> Country:</p>
                <p> City: </p>
                <p className={s.status}>{props.status}</p>
            </div>
        </div>
    )
}