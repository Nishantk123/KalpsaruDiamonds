import React, { useState, useEffect } from "react";
import { getINRPrice } from "../utils/utils";
import axios from "axios";


const LotSale = () => {
  const [party_name, setPartyName] = useState("");
  const [invoice_no, setInvoiceNumber] = useState("");
  const [qty, setQty] = useState("");
  const [date, setDate] = useState(new Date());
  const [proce, setPrice] = useState("");
  const [net_amount, setNetAmount] = useState("");
  const [curr_doller, setCurrentDoller] = useState("");





  const onSubmit = () =>{

  }

  return (
    <div className="">
      <div className="container-fluid p-3">
        <h1 class="h3 mb-2 text-gray-800">
          Lot <small> Sale Details </small>{" "}
        </h1>
        <div className="card shadow mb-4">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-primary">New Lot sale </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Invoice No
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={party_name}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Party name
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={party_name}
                      onChange={(e) => setPartyName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Qty
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={party_name}
                      onChange={(e) => setQty(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Date
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={party_name}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Price
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={party_name}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Amount
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={party_name}
                      onChange={(e) => setNetAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer text-center">
            <a href="#" class="btn btn-primary" onClick={onSubmit}>
              Save{" "}
            </a>
          </div>
        </div>
        <div class="card shadow mb-4 ">

          <div class="card-body">
          <div className="row my-2">
                <div className="col-sm-6 d-flex">
                    <div className="mx-2">
                        lot Name
                    </div>
                    <div>
                        <input className="form-control" />
                    </div>
                    <div className="mx-3">
                        <button className="btn btn-primary">search</button>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>InvoiceNo</th>
                    <th>Party Name</th>
                    <th>Qty</th>
                    <th>Price(us$)</th>
                    <th>Amount(us$)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {list_data.map((data, index) => {
                    return (
                      <tr>
                        <td> {data.invoice_number}</td>
                        <td>{data.customer} </td>
                        <td>{data.broker} </td>
                        <td> {data.due_date}</td>
                        <td>{data.net_amount} </td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotSale;
