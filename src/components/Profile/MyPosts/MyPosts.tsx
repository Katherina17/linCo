import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {MyPost} from "../../../redux/state";
import {TextArea} from "../../TextArea/TextArea";
import {Button} from "../../Button/Button";


type MyPostProps = {
    posts: MyPost[];
    addPost: () => void;
    updatePostText: (text: string) => void;
    newPostText: string;
}


const MyPosts = (props: MyPostProps) => {
    let placeholder = 'write a new text';
    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <TextArea callBack={props.updatePostText} placeholder={placeholder} value={props.newPostText} className={s.textareaPost}/>
                <Button name={'Add Post'} callBack={props.addPost}/>
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