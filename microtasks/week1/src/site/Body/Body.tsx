import React, { useState } from 'react';
import Button from '../../Button/Button';
import Currency from '../../Currency/Currency';


type BodyPropsType = {
    title: string
    topCars: Array<topCarsPropsType>
}

type topCarsPropsType = {
    manufacturer: string,
    model: string
}

// type FilterPropsType = 'All' | 'Dollars' | 'RUBLS'

const Body = (props: BodyPropsType) => {


    let topCar = props.topCars.map((c, index) => {
        return (
            <tr>
                <th key={index}>{c.manufacturer} and {c.model}</th>
            </tr>
        )
    })


    let firstPerson = () => {
        console.log(100200)
    }

    let secondPerson = (number: number) => {
        console.log(number)
    }

    let f1 = () => {
        console.log('I am Vasya')
    }
    let f2 = () => {
        console.log('I am Oleg')
    }

    let [a, setA] = useState(1)

    
    let onClickHandler = () => {
        setA(a + 1)
        console.log(a)
    }
    let onClickHandler2 = () => {
        setA(a = 0)
        console.log(a)
    }



//     const [money, setMoney] = useState([
//         { banknots: 'Dollars', value: 100, number: ' a1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' z1234567890' },
//         { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
//         { banknots: 'Dollars', value: 100, number: ' e1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' c1234567890' },
//         { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
//         { banknots: 'Dollars', value: 50, number: ' x1234567890' },
//         { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
//     ])

//     let [filter, setFilter] = useState<FilterPropsType>('All')

//     let currentMoney = money
    
//     if (filter === 'RUBLS'){
//          currentMoney = money.filter(filtered => filtered.banknots === 'RUBLS')
//     }
//     if (filter === 'Dollars'){
//         currentMoney = money.filter(filtered => filtered.banknots === 'Dollars')
//    }



    // let onClickFilterHandler = (nameButton:FilterPropsType) => {
    //     setFilter(nameButton)
    // }



    return (
        <>
            <div>
                <h2>{props.title}</h2>
                {topCar}
                <button onClick={firstPerson}>YouTube</button>
                <button onClick={() => secondPerson(100200)}>YouTube 2</button>
                <Button name="First button" sub="Vanya" callback={f1} />
                <Button name="Second button" sub="Oleg" callback={f2} />
                <button onClick={onClickHandler}>number {a}</button>
                <button onClick={onClickHandler2}>0</button>

                <p>{a}</p>
                <Currency/>
                {/* <ul>
                    {currentMoney.map((m) => {
                        return (

                            <li>
                                <p>{m.banknots}</p>
                                <p>{m.value}</p>
                                <p>{m.number}</p>
                            </li>
                        ) })}
                </ul>
                <div>
                <button onClick={() => onClickFilterHandler('All')}>All</button>
                <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>Rubls</button>
                </div> */}
            </div>
        </>
    );
};

export default Body;