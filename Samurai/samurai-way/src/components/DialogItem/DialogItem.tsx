import { NavLink } from 'react-router-dom'
import classes from './DialogItem-style.module.css'
import { DialogType } from '../../render'





const DialogItem = (props: DialogType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={classes.dialog}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    )
}

export default DialogItem