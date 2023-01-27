import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    commonActionProfileTypes,
    MyPost,
    updatePostTextActionCreator
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {State} from "../../../redux/redux-store";

type mapStateToPropsType = {
    newPostText: string;
    posts: MyPost[]
}

type mapDispatchToPropsType = {
    updatePostText: (text: string) => void;
    addPost: () => void;
}

export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: State):mapStateToPropsType => {
    return{
        newPostText: state.profile!.newPostText,
        posts: state.profile!.posts
    }
}

const mapDispatchToProps = (dispatch: (action: commonActionProfileTypes) => void): mapDispatchToPropsType => {
    return {
        updatePostText: (text: string) => dispatch(updatePostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps )(MyPosts)
