import React from 'react';
import ReactDOM from 'react-dom';
import { addPost, updateNewPostText } from './redux/state';
import './index.css';
import App from './App';




export type AppStateTypes = {
  state: {
    ProfilePage:{
      PostsData: Array<PostType>
      newPostText: string
    }
    MessagePage:{
      DialogsData: Array<DialogType>
      MessagesData: Array<MessageType>
    }
  }
  addPost: () => void 

}


export type MyDialogsMessagesTypes = {
  DialogsData: Array<DialogType>
  MessagesData: Array<MessageType>
}
export type MyPostsTypes = {
  PostsData: Array<PostType>
  newPostText: string
  addPost: () => void 
  updateNewPostText: (newText: string) => void 


  // RefObject<HTMLInputElement>
  
}
export type PostType = {
  id: string 
  message: string
  likesCount: string 

}
 export type DialogType = {
   name: string
   id: string
 }
 export type MessageType = {
   id: string
   message: string
 }



export type StatePropsType = {
      ProfilePage:{
        PostsData: Array<PostType>
        newPostText: string
      }
      MessagePage:{
        DialogsData: Array<DialogType>
        MessagesData: Array<MessageType>
      }
    }
  
  

export let rerenderEntireTree = (state:StatePropsType) => {
  ReactDOM.render(<App state={state}  addPost={addPost} updateNewPostText={updateNewPostText}   />,document.getElementById('root')

  );
}
