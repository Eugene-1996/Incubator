import React from 'react';
import classes from './myposts-style.module.css'
import Post from './Post/Post';
import { MyPostsTypes } from '../../../render';




const MyPosts = (props: MyPostsTypes) => {



    let PostsElements = props.PostsData.map(p => <Post message={p.message} like={p.likesCount} />)


    let newPostElement = React.createRef<HTMLTextAreaElement>();
    // const newPostElement = useRef<HTMLTextAreaElement>(null)

    let addPost = () => {
        // let text = newPostElement.current!.value
        // props.addPost(text)
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)
    }


    return (
        <div className={classes.postsBlock}>
            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div>
                    <button >Remove post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;