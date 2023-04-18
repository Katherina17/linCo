import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    commonActionProfileTypes,
    MyPost
} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts: MyPost[]
    imgSrc: string | null
    userName: string | null
}

type mapDispatchToPropsType = {
    addPost: (text: string) => void;
}

export type MyPostPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: RootState):mapStateToPropsType => {
    return{
        posts: state.profile.posts,
        imgSrc: state.profile.user!.photos.small,
        userName: state.profile.user!.fullName

    }
}

const mapDispatchToProps = (dispatch: (action: commonActionProfileTypes) => void): mapDispatchToPropsType => {
    return {
        addPost: (text: string) => dispatch(addPostActionCreator(text))
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps )(MyPosts)
