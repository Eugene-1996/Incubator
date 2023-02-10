// import React from 'react';
// import ReactDOM from 'react-dom';
// import { addPost } from './redux/state';
import './index.css';
import state from './redux/state';
// import App from './App';
// import state from './redux/state';
import { rerenderEntireTree } from './render';

// type renderPropsType = {
//   state: AppStateTypes['state']
// }

rerenderEntireTree(state)



// ReactDOM.render(<App PostsData={PostsData} DialogsData={DialogsData} MessagesData={MessagesData}/>,document.getElementById('root')
// );