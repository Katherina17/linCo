import s from './Post.module.css';

type PostPropsType ={
    message: string,
    like: number,
    id: string,
    imgSrc: string
    userName: string | null
}

const Post = (props: PostPropsType) => {
    return(
        <div className={s.post_container}>
            <div className={s.name_userImage}>
                <div className={s.image_container}>
                    <img src={props.imgSrc}
                         alt={'user image'}/>
                </div>
                <span> {props.userName}</span>
            </div>
            <span className={s.post_item}> {props.message}</span>
            <span className={s.post_item}> {props.like}</span>
        </div>
    )
}

export default Post;