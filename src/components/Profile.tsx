import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return(
        <div className={s.main_container}>
            <img src="https://cdn1.epicgames.com/ue/product/Screenshot/1-1920x1080-dab564274b400e044d6641ad755ee628.jpg?resize=1&w=1920" alt="landscape"/>
            <p>Ava + description</p>
            <p>My posts</p>
            <p>New post</p>
            <p>post1</p>
            <p>post2</p>
        </div>
    )
}

export default Profile;