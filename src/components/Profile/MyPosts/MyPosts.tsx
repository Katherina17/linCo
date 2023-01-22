import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {
    commonActionTypes,
    MyPost,
} from "../../../redux/state";
import {TextArea} from "../../TextArea/TextArea";
import {Button} from "../../Button/Button";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";


type MyPostProps = {
    posts: MyPost[];
    dispatch: (action: commonActionTypes) => void;
    newPostText: string;
}


const MyPosts = (props: MyPostProps) => {
    let placeholder = 'write a new text';

    const updatePostText = (text: string) => {
        props.dispatch(updatePostTextActionCreator(text))
    }

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <TextArea callBack={(text) => updatePostText(text)} placeholder={placeholder} value={props.newPostText} className={s.textareaPost}/>
                <Button name={'Add Post'} callBack={addPost}/>
            </div>
            {

            }
            {props.posts.map(i => {
                return (
                    <Post key={i.id} message={i.message} like={i.like} id={i.id} imgSrc={i.imgSrc}/>
                )
            })}
        </div>
    )
}

export default MyPosts;