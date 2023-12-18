import React from "react"
import { Link } from "react-router-dom"
import Dropdown from "react-dropdown"
import { cur } from "./Redux/sliceCurrency";
import { valueRes } from './Redux/sliceValue'
import { useAppDispatch, useAppSelector } from "./hooks"
import { setFromSlice } from "./Redux/sliceFrom";
import "react-dropdown/style.css"
import './main.scss'

function Main() {
    const from = useAppSelector(state => state.fromSlice)
    const dispatch = useAppDispatch() 

    const currency = useAppSelector(state => state.sliceCurrency.item)
    const value = useAppSelector(state => state.sliceValue.value)
    
    React.useMemo(() => dispatch(cur()), [dispatch])
    React.useMemo(() => dispatch(valueRes()), [dispatch])

    let symbol = new Intl.NumberFormat('ru', {
        style: 'currency',
        currency: from,
        minimumFractionDigits: 2,
    })

    return (
        <div className="main">
            <h1 className="main__h1">Список мировых валют</h1>
            <Link className="main__h2" to='/converter'>Конвертер</Link>
            <div className="main__currencies">
                <p>Базовая валюта</p>
                <Dropdown
                    value={from}
                    options={currency}
                    onChange={e => dispatch(setFromSlice(e.value)).payload}
                />
                <button
                    type="button"
                    onClick={() => { dispatch(cur()); dispatch(valueRes()) }}
                >Обновить</button>
            </div>
            <div className="main__list">
                <div className="main__list__left">{currency.map(e => {
                    return <div key={e}>1 {e} составляет</div>
                })}</div>
                <div className="main__list__right">{value.map(e => {
                    return <div key={e + Math.random()}>{symbol.format(1 / e)}</div>
                })}</div>
            </div>
        </div>
    );
}

export default Main