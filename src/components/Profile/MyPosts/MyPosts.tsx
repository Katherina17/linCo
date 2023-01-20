import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {ActionType, MyPost} from "../../../redux/state";
import {TextArea} from "../../TextArea/TextArea";
import {Button} from "../../Button/Button";


type MyPostProps = {
    posts: MyPost[];
    dispatch: (action: ActionType) => void;
    newPostText: string;
}


const MyPosts = (props: MyPostProps) => {
    let placeholder = 'write a new text';

    const updatePostText = (text: string) => {
        props.dispatch({type: 'UPDATE-POST-TEXT', payload: text})
    }

    const addPost = () => {
        props.dispatch({type: 'ADD-POST', payload: 'newText'})
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