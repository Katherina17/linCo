import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {
    MyPost,
} from "../../../redux/state";
import {TextArea} from "../../TextArea/TextArea";
import {Button} from "../../Button/Button";


type MyPostProps = {
    posts: MyPost[];
    updatePostText: (text: string) => void
    newPostText: string;
    addPost: () => void;
}

const MyPosts = (props: MyPostProps) => {
    let placeholder = 'write a new text';

    const onChangeUpdatePostText = (text: string) => {
       props.updatePostText(text)
    }

    const addPostOnClickHandler = () => {
        props.addPost();
    }
    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <TextArea callBack={(text) => onChangeUpdatePostText(text)} placeholder={placeholder} value={props.newPostText} className={s.textareaPost}/>
                <Button name={'Add Post'} callBack={addPostOnClickHandler}/>
            </div>
            {props.posts.map(i => {
                return (
                    <Post key={i.id} message={i.message} like={i.like} id={i.id} imgSrc={i.imgSrc}/>
                )
            })}
        </div>
    )
}

export default MyPosts;