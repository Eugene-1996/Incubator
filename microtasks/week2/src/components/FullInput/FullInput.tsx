import React, { ChangeEvent, FC, useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input /Input';


type FullInputProps = {
    addMessage: (title:string) => void
}

const FullInput:FC<FullInputProps> = (props) => {



   

    return (
        <div>
             {/* <Input  title={title} setTitle={setTitle}/>
            <Button title={title} setTitle={setTitle} addMessage={props.addMessage}/> */}

        </div>
    );
};

export default FullInput;