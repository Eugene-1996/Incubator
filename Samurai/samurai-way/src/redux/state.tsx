// import { PostType } from "../render"

import { StatePropsType } from ".."



let store = {
  _state: {
    ProfilePage:{
        PostsData: [{
            
            id: '1',
            message: 'It is my first post!',
            likesCount: '23'
          },
          {
            id: '2',
            message: 'Hello, How are you ?',
            likesCount: '333'
          
          },
          {
            id: '3',
            message: '????',
            likesCount: '45'
          },
          {
            id: '4',
            message: 'Hallo',
            likesCount: '100'
          },
          ],
        newPostText: "kamd"
    },

    MessagePage:{
        DialogsData: [{
            id: '1',
            name: 'Sergey'
          },
          {
            id: '2',
            name: 'Gena'
          },
          {
            id: '3',
            name: 'Vadik'
          },
          {
            id: '4',
            name: 'Oleg'
          },
          {
            id: '5',
            name: 'Lexa'
          },
          {
            id: '6',
            name: 'Sveta'
          },
          ],
        MessagesData: [{
            id: '1',
            message: 'Hello!'
          },
          {
            id: '2',
            message: 'How are you ?'
          },
          {
            id: '3',
            message: '!'},
          {
            id: '4',
            message: '!!!!'
          },
          {
            id: '5',
            message: 'dhsahfdsh!'},
          {
            id: '6',
            message: 'Helaaaalo!'},
          ]  
    },  

},
getState() {
  return this._state;
},
rerenderEntireTree(state: StatePropsType) {
  console.log('hello rerender')
},
addPost () {
  let newPost: AddPostType= {
    id: '5',
    message: this._state.ProfilePage.newPostText,
    likesCount: '0'
  };
  this._state.ProfilePage.PostsData.push(newPost)
  this._state.ProfilePage.newPostText = ''
  this.rerenderEntireTree(this._state)
},
updateNewPostText(newText:string) {
  this._state.ProfilePage.newPostText = newText
  this.rerenderEntireTree(this._state)
},
subscribe(observer: (state:StatePropsType) => void) {
  this.rerenderEntireTree = observer    //  pattern
 }
 
}

 




export type AddPostType= {
  
    id: string
    message: string
    likesCount: string
}

// type PostMessageType = {
//   postMessage: string
// }








export default store
// window.store = store;




