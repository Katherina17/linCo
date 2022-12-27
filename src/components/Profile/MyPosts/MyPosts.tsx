import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {MyPost} from "../../../redux/state";


type MyPostProps = {
    posts: MyPost[];
}


const MyPosts = (props: MyPostProps) => {
    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <textarea placeholder={'Write a new post'} className={s.textarea}></textarea>
                <button className={s.button}> Add</button>
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