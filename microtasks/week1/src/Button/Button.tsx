import React from 'react';

type ButtonPropsType = {
    name: string
    sub: string
    callback: () =>void
}


const Button = (props:ButtonPropsType) => {

    // const onClickHandler = () => {
    //     console.log(props.sub)
    // }
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <>
           <button onClick={onClickHandler}>{props.name}</button>
        </>
    );
};

export default Button;


