import React, { useState } from 'react';

type ButtonProps = {
    // onClickHadler = () => void
    // addMessage: (title:string) => void
    // title: string
    // setTitle: (title:string) => void
    callBack : () => void
}

 


const Button = (props:ButtonProps) => {

    const onClickButtonHadler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHadler}>+</button>
    );
};

export default Button;