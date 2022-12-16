import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return(
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <textarea placeholder={'Write a new post'} className={s.textarea}></textarea>
                <button className={s.button}> Add </button>
            </div>
            <Post/>
        </div>
    )
}

export default MyPosts;