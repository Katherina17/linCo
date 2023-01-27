import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import {StoreContext} from "../../../redux/StoreContext";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { store => {
                const updatePostText = (text: string) => {
                    store?.dispatch(updatePostTextActionCreator(text));
                }

                const addPost = () => {
                    store?.dispatch(addPostActionCreator())
                }
                return <MyPosts posts={store?.getState().profile.posts}
                         updatePostText={(text) => updatePostText(text)}
                         newPostText={store?.getState().profile.newPostText}
                         addPost={addPost}
                />
            }

            }
        </StoreContext.Consumer>
    )
}
