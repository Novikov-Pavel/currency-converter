import React from "react"
import { Link } from "react-router-dom"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import './main.scss'

function Main() {
    const [currency, setCurrency] = React.useState<string[]>([])
    const [currencyValues, setCurrencyValues] = React.useState<number[]>([])
    const [from, setFrom] = React.useState<string>('USD')

    async function convert() {
        try {
            const res = await fetch(`https://v6.exchangerate-api.com/v6/879a721e03d126de4e3112bb/latest/${from}`)
            const data = await res.json()
            setCurrency(Object.keys(data.conversion_rates))
            setCurrencyValues(Object.values(data.conversion_rates))
        } catch (error) {
            console.error(error)
        }
    }
    React.useMemo(() => convert(), [currency])

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
                    placeholder={from}
                    options={currency}
                    onChange={e => setFrom(e.value)}
                />
                <button
                    type="button"
                    onClick={() => convert()}
                >Обновить</button>
            </div>
            <div className="main__list">
                <div className="main__list__left">{currency.map(e => {
                    return <div key={e}>1 {e} составляет</div>
                })}</div>
                <div className="main__list__right">{currencyValues.map(e => {
                    return <div key={e + Math.random()}>{symbol.format(1 / e)}</div>
                })}</div>
            </div>
        </div>
    );
}

export default Main