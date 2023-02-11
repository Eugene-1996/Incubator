import React, { useState } from 'react';


type FilterPropsType = 'All' | 'Dollars' | 'RUBLS'

type ButtonCurrencyPropsType = {
    nameButton: FilterPropsType
    callback: () =>void
    // ocClickFilterHandler: (nameButton:FilterPropsType) => void
    
}

const ButtonCurrency = (props: ButtonCurrencyPropsType) => {


    

    // let onClickFilterHandler = (nameButton:FilterPropsType) => {
    //     setFilter(nameButton)
    // }
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.nameButton}</button>
        </div>
    );
};

export default ButtonCurrency;