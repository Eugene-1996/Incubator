import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}


export const pureAddUser = (name: string, setError: (value: React.SetStateAction<string>) => void, setName: (value: React.SetStateAction<string>) => void, addUserCallback: (name:string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name.trim() === ''){
        return setError('Ошибка! Введите имя!')
    }
    else {
       addUserCallback(name)
      
    }
    setName('')
}

export const pureOnBlur = (name: string, setError: (value: React.SetStateAction<string>) => void) => { // если имя пустое - показать ошибку
    if (name.trim() === ''){
        return setError('Ошибка! Введите имя!') 
    }
}

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    e.key === 'Enter' && addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // const nameNew = e.currentTarget.value
        setName(e.currentTarget.value) // need to fix

        error && setError('')
        console.log(setName)
    }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }
    let totalUsers = users.length // need to fix
    const lastUserName = name // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
