
import './index.css';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
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
  
  

let rerenderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
  <App state={state}  addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}   
  />,document.getElementById('root')

  );
}
// type renderPropsType = {
//   state: AppStateTypes['state']
// }



rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// ReactDOM.render(<App PostsData={PostsData} DialogsData={DialogsData} MessagesData={MessagesData}/>,document.getElementById('root')
// );