import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    commonActionProfileTypes,
    MyPost
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {State} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts: MyPost[]
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void;
}

export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: State):mapStateToPropsType => {
    return{
        posts: state.profile!.posts
    }
}

const mapDispatchToProps = (dispatch: (action: commonActionProfileTypes) => void): mapDispatchToPropsType => {
    return {
        addPost: (text: string) => dispatch(addPostActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps )(MyPosts)
