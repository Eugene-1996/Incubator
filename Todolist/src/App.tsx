import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import TodoList, { TaskType } from './components/TodoList/TodoList';


export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    // BLL:
    const todoListTitle: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: "HTML & CSS", isDone: true },
        { id: v1(), title: "ES6 & TS", isDone: true },
        { id: v1(), title: "React & Redux", isDone: false }
    ])

    const removeTask = (taskId: string) => {
        const updatedTasks = tasks.filter(t => t.id !== taskId)
        setTasks(updatedTasks)
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        const updatedTask: TaskType[] = [newTask, ...tasks]
        setTasks(updatedTask)
    }

    const [filter, setFilter] = useState<FilterValueType>('all')

    const changeFilterValue = (filter: FilterValueType) => setFilter(filter)


    // let filter: FilterValueType | undefined 



    const getFilteredTasks = (tasks: Array<TaskType>, filter: FilterValueType): Array<TaskType> => {
        // let filteredTasks: Array<TaskType> = []

        switch (filter) {
            case 'active':
                return tasks.filter(t => !t.isDone)
            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const filteredTasks: Array<TaskType> = getFilteredTasks(tasks, filter)



    // UI:
    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={filteredTasks}
                changeFilterValue={changeFilterValue}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
