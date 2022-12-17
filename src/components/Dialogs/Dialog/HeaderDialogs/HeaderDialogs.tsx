import s from './HeaderDialogs.module.css';

type HeaderProps ={
    name: string,
    imgSrc: string
}

export const HeaderDialogs = (props: HeaderProps) => {
    return(
        <div className={s.HeaderDialogs_container}>
            <div className={s.image_container}>
                <img src={props.imgSrc} alt={props.name}/>
            </div>
            <p>{props.name}</p>
        </div>
    )
}