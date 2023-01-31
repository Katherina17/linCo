import s from './PeopleInfo.module.css';

type PeopleInfoPropsType = {
    imgSrc: string;
    fullName: string;
    country: string;
    city: string;
    status: string;
}


export const PeopleInfo = (props: PeopleInfoPropsType) => {
    return(
        <div className={s.imgAndInfo}>
            <div className={s.image_container}>
                <img src={props.imgSrc} alt={props.fullName}/>
            </div>
            <div className={s.info}>
                <h2>{props.fullName}</h2>
                <p> Country: {props.country}</p>
                <p> City: {props.city}</p>
                <p>{props.status}</p>
            </div>
        </div>
    )
}