import React from 'react';
import styled from 'styled-components';
import { MoneyType } from "./App";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            {/* {props.money.banknotes === 'Dollars'
                ? <BancnotGreen>
                    <div>{props.money.banknotes}</div>
                    <div>{props.money.number}</div>
                    <div>{props.money.value}</div>
                </BancnotGreen>
                : <BancnotBlue>
                    <div>{props.money.banknotes}</div>
                    <div>{props.money.number}</div>
                    <div>{props.money.value}</div>
                </BancnotBlue>} */}
                <Bancnots color={props.money.banknotes === 'Dollars'? 'green' : 'blue'}>
                    <div>{props.money.banknotes}</div>
                    <div>{props.money.number}</div>
                    <div>{props.money.value}</div>
                </Bancnots>
        </>
    );
};

const Bancnots = styled.div`
    background-color: ${props => {
        if(props.color === 'blue')
        return 'blue'
        else {
            return 'green'
        }
    }};
    width: 400px;
    height: 200px;
    margin: 10px;
`
const BancnotGreen = styled.div`
    background-color: green;
    width: 400px;
    height: 200px;
    margin: 10px;
`

const BancnotBlue = styled.div`
    background-color: blue;
    width: 400px;
    height: 200px;
    margin: 10px;
`