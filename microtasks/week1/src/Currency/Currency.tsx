import React, { useState } from 'react';
import ButtonCurrency from '../ButtonCurrency/ButtonCurrency';


type FilterPropsType = 'All' | 'Dollars' | 'RUBLS'


const Currency = () => {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    let [filter, setFilter] = useState<FilterPropsType>('All')

    let currentMoney = money
    
    if (filter === 'RUBLS'){
         currentMoney = money.filter(filtered => filtered.banknots === 'RUBLS')
    }
    if (filter === 'Dollars'){
        currentMoney = money.filter(filtered => filtered.banknots === 'Dollars')
   }

   let onClickFilterHandler = (nameButton:FilterPropsType) => {
    setFilter(nameButton)
}

    return (
        <>
            <ul>
                {currentMoney.map((m) => {
                    return (

                        <li>
                            <p>{m.banknots}</p>
                            <p>{m.value}</p>
                            <p>{m.number}</p>
                        </li>
                    )
                })}
            </ul>
            <div>
                {/* <ButtonCurrency callback={onClickFilterHandler}/> */}
                {/* <ButtonCurrency callback={onClickFilterHandler} nameButton={'All'}/>
                <ButtonCurrency callback={onClickFilterHandler} nameButton={'Dollars'}/>
                <ButtonCurrency callback={onClickFilterHandler} nameButton={'RUBLS'}/> */}

                <ButtonCurrency callback={() => onClickFilterHandler('All')} nameButton={'All'}/>
                <ButtonCurrency callback={() => onClickFilterHandler('Dollars')} nameButton={'Dollars'}/>
                <ButtonCurrency callback={() => onClickFilterHandler('RUBLS')} nameButton={'RUBLS'}/>



                {/* <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>Rubls</button> */}
            </div>
        </>
    );
};

export default Currency;