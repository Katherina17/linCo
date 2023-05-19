import img404 from '../../assets/404.svg';
import s from './NotFoundPage.module.css'

export const NotFoundPage = () => {
    return(
        <div className={s.imgContainer}>
            <img src={img404}/>
        </div>
    )
}