import React, { ChangeEvent, useState } from 'react';

type InputProps = {
    title : string
    // onChangeInputHandler:(e: ChangeEvent<HTMLInputElement>) => void
    setTitle: (title:string) => void
}
const Input = (props: InputProps) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const changeInput = e.currentTarget.value
        props.setTitle(changeInput)
        

    }
    

    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};

export default Input;