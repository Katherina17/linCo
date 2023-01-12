import React, {MouseEvent, createRef, useState, ChangeEvent} from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import { MyPost} from "../../../redux/state";


type MyPostProps = {
    posts: MyPost[];
    addPost: (title: string ) => void;
}


const MyPosts = (props: MyPostProps) => {
    let message = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = () => {
        props.addPost(message.current? message.current?.value : '');
        if(message.current !== null) {
            message.current.value = '';
        }
    }

    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    }

    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <textarea placeholder={'Write a new post'} className={s.textarea} ref={message} onChange={onChangeTextAreaHandler}></textarea>
                <button
                    onClick={addPostHandler}
                    className={s.button}> Add</button>
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