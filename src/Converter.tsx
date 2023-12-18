import React from "react"
import { useState } from "react"
import Dropdown from "react-dropdown"
import { HiSwitchHorizontal } from "react-icons/hi"
import { Link } from "react-router-dom"
import "react-dropdown/style.css"
import "./converter.scss"

export default function Converter() {
    const [input, setInput] = useState<number>(1);
    const [from, setFrom] = useState<string>("USD");
    const [to, setTo] = useState<string>("RUB");
    const [output, setOutput] = useState<number>(0);
    const [currency, setCurrency] = React.useState<string[]>([])

    async function convert1() {
        try {
            const res = await fetch(`https://v6.exchangerate-api.com/v6/879a721e03d126de4e3112bb/latest/${from}`)
            const data = await res.json()
            setCurrency(Object.keys(data.conversion_rates))
        } catch (error) {
            console.error(error)
        }
    }

    React.useMemo(() => convert1(), [from])

    let convert = async () => {
        let res = await fetch(`https://v6.exchangerate-api.com/v6/879a721e03d126de4e3112bb/pair/${from}/${to}/${input}`)
        let data = await res.json()
        setOutput(data.conversion_result)
    }
    let flip = () => {
        let temp = to
        setTo(from)
        setFrom(temp)
    }
    return (
        <div className="converter">
            <Link to="/" className="converter__h2">Главная</Link>
            <div className="converter__heading">
                <h1>Конвертер валют</h1>
            </div>
            <div className="converter__container">
                <div className="converter__left">
                    <h3>Величина</h3>
                    <input
                        type="text"
                        placeholder="1"
                        onChange={(e) => setInput(+e.target.value)}
                    />
                </div>
                <div className="converter__middle">
                    <h3>Из</h3>
                    <Dropdown
                        options={currency}
                        onChange={e => setFrom(e.value)}
                        value={from}
                    />
                </div>
                <div className="converter__switch">
                    <HiSwitchHorizontal
                        size="30px"
                        onClick={() => flip()}
                    />
                </div>
                <div className="converter__right">
                    <h3>В</h3>
                    <Dropdown
                        options={currency}
                        onChange={(e) => setTo(e.value)}
                        value={to}
                    />
                </div>
            </div>
            <div className="converter__result">
                <button onClick={() => convert()}>Convert</button>
                <h2>Результат:</h2>
                <p>{`${input} ${from} = ${output.toFixed(2)} ${to}`}</p>
            </div>
        </div>
    );
}