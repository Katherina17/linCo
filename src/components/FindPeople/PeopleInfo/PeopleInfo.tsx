import s from './PeopleInfo.module.css';
import userImg from '../../../assets/user.png';
import {NavLink} from "react-router-dom";

type PeopleInfoPropsType = {
    imgSrc: string | null;
    name: string;
    status: string | null;
    id: number
}


export const PeopleInfo = (props: PeopleInfoPropsType) => {
    return(
        <div className={s.imgAndInfo}>
            <NavLink to={`/profile/${props.id}`}>
                <div className={s.image_container}>
                    <img src={props.imgSrc?.small() !== null ? userImg : props.imgSrc?.small()} alt={props.name}/>
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