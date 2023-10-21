import React from 'react';
import '../resgisterFOrm.css';



const RegistrationForm = () => {
  return (
    <div className="register">
      <section className="container_register">
        <header>Loan Application Form</header>
        <form action="#" className="form4">

          <div className="input-box address">
            <div className="input-box">
              <div className="column">
                <input type="text" placeholder="Enter Full Name" required />
                <div className="select-box">
                  <select>
                    <option hidden>select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="input-box">
                <input type="number" placeholder="Enter phone number" required />
              </div>
              <div className="input-box">
                <input type="date" placeholder="Enter birth date" required />
              </div>
            </div>

            <div className="input-box">
              <input type="text" placeholder="Enter email address" required />
            </div>

          </div>

          <div className="gender-box">
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" defaultChecked />
                <label htmlFor="check-male">Single</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female">Married</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Divorced</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Widowed</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Other</label>
              </div>
            </div>
          </div>

          <div className="input-box address">
            <div className="column">
              <input type="text" placeholder="ID Number" required />
              <input type="text" placeholder="ID Issue Date" required />
              <input type="text" placeholder="ID Issue Authority" required />
            </div>

            <div className="column">
              <input type="text" placeholder="Province" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Number of Building" required />
            </div>

            <div className="column">
              <input type="number" placeholder="Loan Amount" required />
              <div className="select-box">
                <select>
                  <option hidden>select</option>
                  <option>Guarantor</option>
                  <option>Mortgage</option>
                </select>
              </div>
              <div className="select-box">
                <select>
                  <option hidden>select</option>
                  <option hidden>AL Janoob</option>
                  <option>TBI</option>
                  <option>AL Taif</option>
                  <option>IDB</option>
                </select>
              </div>
            </div>


            <div className="column">
              <input type="text" placeholder="Guarantor Name" />
              <input type="text" placeholder="Mortgage Address" />
            </div>

          </div>

          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default RegistrationForm;
