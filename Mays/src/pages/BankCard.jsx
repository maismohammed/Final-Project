import Header from "../components/Header";
import '../index.css'
import { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function BankCard() {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");

  return (
    <div >


      <div className="top">
        <div className="payment">
          <Cards
            number={number}
            name={name}
            expiry={date}
            cvc={cvc}
            focused={focus}
          />
        </div>


        <form>
          <div className="row">
            <div className="col-sm-11 col-lg-6">
              <label for="name">Card Number</label>
              <input
                type="text"
                className="form-control"
                value={number}
                name="number"
                onChange={(e) => {
                  SetNumber(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-sm-11 col-lg-6">
              <label for="name">Card Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <label for="name">Expiration Date</label>
              <input
                type="text"
                name="expiry"
                className="form-control"
                value={date}
                onChange={(e) => {
                  SetDate(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
            <div className="col-sm-5">
              <label for="name">CVV</label>
              <input
                type="tel"
                name="cvc"
                className="card"
                value={cvc}
                onChange={(e) => {
                  SetCvc(e.target.value);
                }}
                onFocus={(e) => SetFocus(e.target.name)}
              ></input>
            </div>
          </div>

        </form>
      </div>


    </div>
  )
}