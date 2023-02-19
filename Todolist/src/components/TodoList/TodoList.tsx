import React, { ChangeEvent, createRef, FC, RefObject, useRef, useState } from 'react';
import { FilterValueType } from '../../App';
import TasksList from '../TasksList/TasksList';


type TodoListPropsType = {
    title: string 
    tasks: Array<TaskType>  // TaskType[]
    changeFilterValue: (filter: FilterValueType) => void 
    removeTask: (taskId: string) => void
    addTask: (title:string) => void 
}

export type TaskType = {
    id: string
    title: string 
    isDone: boolean 

}

const TodoList: FC<TodoListPropsType> = (props:TodoListPropsType) => {

    // const addTaskInput: RefObject<HTMLInputElement> = useRef(null)

    // const addTask = () => {
    //     if (addTaskInput.current){
    //         props.addTask(addTaskInput.current.value)
    //         addTaskInput.current.value = ''
    //     } 
    // }

    const [title, setTitle] = useState<string>('')
    const addTask = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle){
            props.addTask(title)
        }
        setTitle('') 
}
    const changeLocalTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const setAllFilterValur = () => props.changeFilterValue('all')
    const setActiveFilterValur = () => props.changeFilterValue('active')
    const setComletedFilterValur = () => props.changeFilterValue('completed')
    const setByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {e.key === 'Enter' && addTask()}

    return (
        <div className={"todolist"}>
                
                <h3>{ props.title }</h3>
                <div>
                    <input 
                    value={title}
                    onChange={changeLocalTitle}
                    onKeyDown={setByEnter}
                    />
                    <button disabled = {title.trim().length === 0} onClick={addTask}>+</button>
                    {title.length > 15 && <div style={{color:'red'}}>Task is too long</div>}
                    {/* <input ref={addTaskInput}/>
                    <button onClick={addTask}>+</button> */}
                </div>
                    <TasksList tasks={props.tasks} removeTask={props.removeTask} />
                <div>
                    <button onClick={setAllFilterValur}>All</button>
                    <button onClick={setActiveFilterValur}>Active</button>
                    <button onClick={setComletedFilterValur}>Completed</button>
                </div>
            </div>
    );
};

export default TodoList;