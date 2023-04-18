import React, {useEffect} from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {MyPostPropsType} from "./MyPostsContainer";
import {PostFormContainer, PostFormDataType} from "./PostForm";
import userPhoto from '../../../assets/user.png'

const MyPosts = (props: MyPostPropsType) => {
    const onSubmitHandler = (data: PostFormDataType) => {
        props.addPost(data.post);
    }

    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <PostFormContainer onSubmit={onSubmitHandler}/>
            </div>
            {props.posts?.map(i => {
                return (
                    <Post key={i.id}
                          message={i.message}
                          like={i.like}
                          id={i.id}
                          imgSrc={props.imgSrc !== null ? props.imgSrc : userPhoto}
                          userName={props.userName}
                    />
                )
            })}
        </div>
    )
}

export default MyPosts;