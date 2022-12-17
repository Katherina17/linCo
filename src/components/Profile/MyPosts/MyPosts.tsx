import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css';


type MyPostPropsType = {
    postData: MyPostType[];
}

export type MyPostType = {
    id: number,
    message: string,
    like: number
}

const MyPosts = (props: MyPostPropsType) => {
    return (
        <div className={s.post}>
            <h2 className={s.h2}>My posts</h2>
            <div className={s.textareaAndButton}>
                <textarea placeholder={'Write a new post'} className={s.textarea}></textarea>
                <button className={s.button}> Add</button>
            </div>
            {

            }
            {props.postData.map(i => {
                return (
                    <Post key={i.id} message={i.message} like={i.like} id={i.id}/>
                )
            })}
        </div>
    )
}

export default MyPosts;