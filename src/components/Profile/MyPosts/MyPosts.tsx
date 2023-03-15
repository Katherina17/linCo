import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {MyPostPropsType} from "./MyPostsContainer";
import {PostFormContainer, PostFormDataType} from "./PostForm";
import {reset} from "redux-form";

const MyPosts = (props: MyPostPropsType) => {
    const onSubmitHandler = (data: PostFormDataType) => {
        props.addPost(data.post);
    }

    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
               {/* <TextArea callBack={(text) => onChangeUpdatePostText(text)} placeholder={placeholder} value={props.newPostText} className={s.textareaPost}/>
                <Button name={'Add Post'} callBack={addPostOnClickHandler}/>*/}

                <PostFormContainer onSubmit={onSubmitHandler}/>
            </div>
            {props.posts?.map(i => {
                return (
                    <Post key={i.id} message={i.message} like={i.like} id={i.id} imgSrc={i.imgSrc}/>
                )
            })}
        </div>
    )
}

export default MyPosts;