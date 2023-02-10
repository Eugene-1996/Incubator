import React, { FC } from 'react';
import { TaskType } from '../TodoList/TodoList';


type TasksListPropsType = {
    tasks: TaskType[]
    removeTask: (taskId: number) => void

}


const TasksList: FC<TasksListPropsType> = (props: TasksListPropsType) => {


    const tasksItems: JSX.Element[] | JSX.Element = props.tasks.length
        ? props.tasks.map((task) => {
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone} />
                    <span>{task.title}</span>
                    <button onClick={() => props.removeTask(task.id)}>Remove</button>
                </li>

            )
        })
        : <span>Your tasklist is empty</span>


    return (
        <ul>
            {tasksItems}
        </ul>
    );
};

export default TasksList;