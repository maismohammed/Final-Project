export default function Loan() {
    return (

        <div className="container card_Loan">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card card-body text-center mt-5">
                        <h1 className="heading display pb-3">Loan Calculator App</h1>
                        <form id="loan-form">
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="number" className="form-control" id="amount" placeholder="Loan amount" />
                            </div>
                            <br />
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">%</span>
                                </div>
                                <input type="number" className="form-control" id="interest" placeholder="Interest" />
                            </div>
                            <br />
                            <div className="form-group input-group">
                                <input type="number" className="form-control" id="years" placeholder="Years To Repay" />
                            </div>
                            <br />
                            <div className="form-group">
                                <input type="submit" className="btn btn-block btn-dark" value="Calculate" />
                            </div>
                        </form>



                        <div id="loading">
                            <img src="img/loading.gif" alt="" />
                        </div>


                        <div id="results" className="pt-4">
                            <h5>Results</h5>
                            <div className="form-group input-group">
                                <div className="input-group-append">
                                    <span className="input-group-text">Monthly Payment</span>
                                </div>
                                <input type="number" className="form-control" id="monthly-payment" disabled />
                            </div>
                            <br />
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Total Payment</span>
                                </div>
                                <input type="number" className="form-control" id="total-payment" disabled />
                            </div>
                            <br />
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Total Interest</span>
                                </div>
                                <input type="number" className="form-control" id="total-interest" disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}