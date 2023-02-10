import React, { FC } from 'react';
import { FilterValueType } from '../../App';
import TasksList from '../TasksList/TasksList';


type TodoListPropsType = {
    title: string 
    tasks: Array<TaskType>  // TaskType[]
    changeFilterValue: (filter: FilterValueType) => void 
    removeTask: (taskId: number) => void
}

export type TaskType = {
    id: number
    title: string 
    isDone: boolean 

}

const TodoList: FC<TodoListPropsType> = (props:TodoListPropsType) => {
    return (
        <div className={"todolist"}>
                
                <h3>{ props.title }</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                    <TasksList tasks={props.tasks} removeTask={props.removeTask} />
                <div>
                    <button onClick={() => props.changeFilterValue('all')}>All</button>
                    <button onClick={() => props.changeFilterValue('active')}>Active</button>
                    <button onClick={() => props.changeFilterValue('completed')}>Completed</button>
                </div>
            </div>
    );
};

export default TodoList;