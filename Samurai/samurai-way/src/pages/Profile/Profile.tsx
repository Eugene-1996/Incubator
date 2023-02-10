import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import classes from './profile-style.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { MyPostsTypes } from '../../render';





const Profile = (props: MyPostsTypes) => {



    return (
        <>
            <div>
                <ProfileInfo />
                <MyPosts newPostText={props.newPostText} PostsData={props.PostsData} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </div>
        </>
    );
};

export default Profile;