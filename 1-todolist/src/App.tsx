import React, { useState } from 'react';
import './App.css';
import TodoList, { TaskType } from './components/TodoList/TodoList';


export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    // BLL:
    const todoListTitle: string = "What to learn"
    const [tasks, setTasks] = useState <Array<TaskType>> ([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "ES6 & TS", isDone: true},
        {id: 3, title: "React & Redux", isDone: false }
    ])

    const removeTask = (taskId: number) => {
       const updatedTasks = tasks.filter(t => t.id !== taskId)
       setTasks(updatedTasks)
    }

    const [filter, setFilter] = useState<FilterValueType>('all')

    const changeFilterValue = (filter: FilterValueType) => setFilter(filter)


    // let filter: FilterValueType | undefined 
    let filteredTasks: Array<TaskType> = []

    if(filter === 'all'){
        filteredTasks = tasks
    }
    if(filter === 'active'){
        filteredTasks = tasks.filter(t => t.isDone === false )
    }
    if(filter === 'completed'){
        filteredTasks = tasks.filter(t => t.isDone === true)
    }

    // UI:
    return (
        <div className="App">
            <TodoList 
            title={ todoListTitle } 
            tasks={ filteredTasks }
            changeFilterValue={changeFilterValue}
            removeTask={removeTask}
            />
         
        </div>
    );
}

export default App;
