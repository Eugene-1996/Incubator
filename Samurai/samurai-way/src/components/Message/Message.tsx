import classes from './Message-style.module.css'
import { MessageType } from '../../render'


const Message = (props: MessageType) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message