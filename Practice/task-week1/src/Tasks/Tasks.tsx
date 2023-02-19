import React from 'react';
import { DataType } from '../App'

type TasksPropsType = {
    data: DataType
}

const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <ul>
                <li>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.students.map(student => {
                        return (
                            <p>{student}</p>
                        )
                    })}</p>
                    <span>{props.data.tasks.map(task => {
                        if (task.isDone === true) {
                            return (
                                <ul>
                                    <li>{task.taskId}</li>
                                    <li>{task.title}</li>
                                </ul>
                            )
                        }
                        else {
                            return (
                                <p><b>None None None None None None</b></p>
                            )
                        }
                    })}</span>




                </li>
                <li>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.students.map(student => {
                        return (
                            <p>{student}</p>
                        )
                    })}</p>
                    <span>{props.data.tasks.map(task => {
                        if (task.isDone === true) {
                            return (
                                <ul>
                                    <li>{task.taskId}</li>
                                    <li>{task.title}</li>
                                </ul>
                            )
                        }
                        else {
                            return (
                                <p><b>None None None None None None</b></p>
                            )
                        }
                    })}</span>
                </li>
                <li>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.students.map(student => {
                        return (
                            <p>{student}</p>
                        )
                    })}</p>
                    <span>{props.data.tasks.map(task => {
                        if (task.isDone === true) {
                            return (
                                <ul>
                                    <li>{task.taskId}</li>
                                    <li>{task.title}</li>
                                </ul>
                            )
                        }
                        else {
                            return (
                                <p><b>None None None None None None</b></p>
                            )
                        }
                    })}</span>
                </li>
                <li>
                    <h1>{props.data.title}</h1>
                    <p>{props.data.students.map(student => {
                        return (
                            <p>{student}</p>
                        )
                    })}</p>
                    <span>{props.data.tasks.map(task => {
                        if (task.isDone === true) {
                            return (
                                <ul>
                                    <li>{task.taskId}</li>
                                    <li>{task.title}</li>
                                </ul>
                            )
                        }
                        else {
                            return (
                                <p><b>None None None None None None</b></p>
                            )
                        }
                    })}</span>
                </li>
            </ul>
        </div>
    );
};

export default Tasks;