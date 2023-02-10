import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Dialogs from './pages/Dialogs/Dialogs';
import Profile from './pages/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './pages/News/News';
import Music from './pages/Music/Music';
import Settings from './pages/Settings/Settings';
import Friends from './pages/Friends/Friends';
import { AppStateTypes, StatePropsType } from './render';
import { updateNewPostText } from './redux/state';



export type AppStateTypes2 = {
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
  updateNewPostText: (newText: string) => void 
}

// NewPostText={props.state.ProfilePage.NewPostText}

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

function App (props: AppStateTypes2 ) {
  console.log(props.state.ProfilePage.newPostText)

  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile PostsData={props.state.ProfilePage.PostsData} newPostText={props.state.ProfilePage.newPostText} addPost={props.addPost} updateNewPostText={updateNewPostText} />} />
          <Route path='/dialogs' render={() => <Dialogs DialogsData={props.state.MessagePage.DialogsData} MessagesData={props.state.MessagePage.MessagesData}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' component={Friends} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;



