import React from "react";

import MyPosts from "./MyPosts";
import {EmptyObject, Store} from "redux";
import {commonActionTypes, DialogsType, ProfileType} from "../../../redux/state";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";


type MyPostContainerProps = {
    store: Store<EmptyObject & {profile: ProfileType, dialogs: DialogsType}, commonActionTypes>;
}

export const MyPostsContainer = (props: MyPostContainerProps) => {
    const updatePostText = (text: string) => {
        props.store.dispatch(updatePostTextActionCreator(text));
    }

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    return (
        <MyPosts posts={props.store.getState().profile.posts}
                 updatePostText={(text) => updatePostText(text)}
                 newPostText={props.store.getState().profile.newPostText}
                 addPost={addPost}
        />
    )
}
