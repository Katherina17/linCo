import s from './Message.module.css';

type MessagePropsType = {
    id: string;
    senderId: string;
    imgFriendSrc: string;
    imgUserSrc: string;
    content: string;
    friendUserId: string;
}

export const Message = (props: MessagePropsType) => {
    return(
        <div className={props.senderId === props.friendUserId ? s.friendMessage : s.message }>
            <div className={ props.senderId === props.friendUserId ?s.friendImageAndText : s.imageAndText}>
                <div className={s.image}>
                    <img
                        alt={'friend photo'}
                        src={props.imgFriendSrc}
                    />
                </div>
                <div className={ props.senderId === props.friendUserId ? s.friendText : s.text }>
                    <pre
                        id={props.id}
                        className={s.friendMessageText}
                    >
                        {props.content}
                    </pre>
                </div>
            </div>
        </div>
    )
}