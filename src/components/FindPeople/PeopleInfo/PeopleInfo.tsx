import s from './PeopleInfo.module.css';
import userImg from '../../../assets/user.png';

type PeopleInfoPropsType = {
    imgSrc: string | null;
    name: string;
    status: string | null;
}


export const PeopleInfo = (props: PeopleInfoPropsType) => {
    return(
        <div className={s.imgAndInfo}>
            <div className={s.image_container}>
                <img src={props.imgSrc?.small() !== null ? userImg : props.imgSrc?.small()} alt={props.name}/>
            </div>
            <div className={s.info}>
                <h2>{props.name}</h2>
                <p> Country:</p>
                <p> City: </p>
                <p>{props.status}</p>
            </div>
        </div>
    )
}