import React from 'react';
import { MyDialogsMessagesTypes } from '../..';
import DialogItem from '../../components/DialogItem/DialogItem';
import Message from '../../components/Message/Message';
import classes from './dialogs-style.module.css'




const Dialogs = (props: MyDialogsMessagesTypes) => {


    let dialogsElements = (props.DialogsData).map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = (props.MessagesData).map(m => <Message message={m.message} id={m.id} />)


    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        let text = newMessageElement.current!.value
        alert(text)
    }


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}>Text</textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
                <div>
                    <button >Remove Message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;