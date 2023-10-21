import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import '../currency.css';
export default function Currency() {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);

  useEffect(() => {
    Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <div className="flex2">
      <section className="container_currency">
        <header><h1>Currency converter </h1></header>

        <form action="#" className="form">
          <div className="input-box address">
            <div className="column">

              <input className='amount'
                type="text"
                placeholder="Enter the amount"
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="select-box">
                <div className='from'>
                  <Dropdown options={options} onChange={(e) => setFrom(e.value)} value={from} placeholder="From" />
                </div>
              </div>

              <div className="select-box">
                <div className="switch">
                  <HiSwitchHorizontal size="30px" onClick={() => flip()} />
                </div>
              </div>

              <div className="select-box">
                <div className='to'>
                  <Dropdown options={options} onChange={(e) => setTo(e.value)} value={to} placeholder="To" />
                </div>
              </div>

            </div>
          </div>

          <button onClick={() => convert()}>Convert</button>
          <p className='result'>
            {input + ' ' + from + ' = ' + output.toFixed(2) + ' ' + to}
          </p>
        </form>

      </section>
    </div>
  );
}