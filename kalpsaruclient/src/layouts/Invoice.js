import { useSelect } from "@mui/base";
import React, { useEffect, useState } from "react";
import { getINRPrice } from "../utils/utils";
import axios from "axios";

const Invoice = () => {
  const [invoice_no, setInvoiceNumber] = useState("");
  const [date, setDate] = useState(new Date());
  const [broker, setBroker] = useState("");
  const [customer, setCustomer] = useState("");
  const [due_date, setDueDate] = useState(new Date());
  const [terms, setTerms] = useState("");
  const [cust_type, setCustType] = useState("");
  const [book_type, setBookType] = useState("");
  const [currency, setCurrency] = useState("");
  const [conv_rate, setConvRate] = useState("");
  const [remark, setRemark] = useState("");
  const [ref_invoice_no, setInvoiceNo] = useState("");
  const [gross_amount, setGrossAmount] = useState("");
  const [sgst_amount, setSgstAmount] = useState("");
  const [agst_acc, setAgstAcc] = useState("");
  const [net_amount, setNetAmount] = useState("");
  const [net_sgst_amount, setNetSgstAmount] = useState("");
  const [list_data, setListData] = useState([]);
  // const [net_agst_acc, setNetAgstAcc] = useState("");
  const [curr_doller, setCurrentDoller] = useState("");
  const [qty, setQty] = useState("");

  const onSubmit = () => {
    let doller_price = getINRPrice(1);
    let data = {
      invoice_number: invoice_no,
      date: date,
      broker: broker,
      customer: customer,
      due_date: due_date,
      book_type: book_type,
      currency: currency,
      convt_rate: conv_rate,
      remark: remark,
      ref_invoice_number: ref_invoice_no,
      ggross_amount: gross_amount,
      sgst_amount: sgst_amount,
      sgst_acc: agst_acc,
      net_amount: net_amount,
      bussiness_type: "sale",
      current_doller_price: curr_doller,
      qty:qty
    };
    fetch("http://localhost:9001/invoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setInvoiceNumber("");
        setBroker("");
        setDate(new Date());
        setCustomer("");
        setDueDate(new Date());
        setTerms("");
        setCustType("");
        setBookType("");
        setCurrency("");
        setConvRate("");
        setRemark("");
        setInvoiceNo("");
        setGrossAmount("");
        setSgstAmount("");
        setAgstAcc("");
        setNetAmount("");
        setNetSgstAmount("");
        setQty("")
          getSaleList();
      });
  };
  const getSaleList = () =>{
    axios
    .get("http://localhost:9001/invoice", {
      params: { bussiness_type: "sale" },
    })
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        setListData(res.data);
      }
    });
  }
  useEffect(() => {
    getINRPrice(1).then((res) => {
      console.log(res);
      setCurrentDoller(res);
    });
    getSaleList()


  }, []);
  
  const diamond_clarity = [
    "IF",
    "VVS1",
    "VVS2",
    "VS1",
    "VS2",
    "SI1",
    "SI2",
    "I1",
    "I2",
    "I3",
  ];
  return (
    <div>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">
          Trading <small> Sale Vigat </small>{" "}
        </h1>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-primary">New Invoice </h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Invoice No*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Invoice Number"
                      value={invoice_no}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
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
                  <select
                    className="form-control"
                    value={qty}
                    onChange={(e) =>setQty(e.target.value)}
                  >
                    <option></option>
                    {diamond_clarity.map((d) => {
                      return <option value={d}>{d}</option>;
                    })}
                  </select>
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
                      type="date"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="DD/MM/YYYY"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3 ">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Broker
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Enter Broker Name"
                        value={broker}
                        onChange={(e) => setBroker(e.target.value)}
                      />
                      <div class="input-group-text">+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Customer
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Enter Customer Name"
                        value={customer}
                        onChange={(e) => setCustomer(e.target.value)}
                      />
                      <div class="input-group-text">+</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Due Date*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="date"
                      class="form-control"
                      id="autoSizingInputGroup"
                      placeholder="Enter Customer"
                      value={due_date}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Terms
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Terms"
                      value={terms}
                      onChange={(e) => setTerms(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Cust. Type
                  </label>
                  <div class="col-sm-8">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={cust_type}
                      onChange={(e) => setCustType(e.target.value)}
                    >
                      <option>select</option>
                      <option value="1">A1</option>
                      <option value="2">A2</option>
                      <option value="3">A3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Book Type
                  </label>
                  <div class="col-sm-8">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={book_type}
                      onChange={(e) => setBookType(e.target.value)}
                    >
                      <option>select</option>
                      <option value="1">A1</option>
                      <option value="2">A2</option>
                      <option value="3">A3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Currency*
                  </label>
                  <div class="col-sm-8">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option selected>Select Currency</option>
                      <option value="doller">doller</option>
                      <option value="ruppee">ruppee</option>
                      <option value="euro">euro</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Convt.Rate *
                  </label>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder=""
                      value={conv_rate}
                      onChange={(e) => setConvRate(e.target.value)}
                    />
                  </div>
                  {/* <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder=""
                    />
                  </div> */}
                </div>
              </div>
              <div class="col-md-12">
                <div class="row ">
                  <div class="col-md-6">
                    <div class="row mb-3">
                      <label for="colFormLabel" class="col-sm-3 col-form-label">
                        Remark
                      </label>
                      <div class="col-sm-9">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="autoSizingInputGroup"
                            placeholder="Enter Remark"
                            value={remark}
                            onChange={(e) => setRemark(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="row mb-4 ">
                      <label for="colFormLabel" class="col-sm-3 col-form-label">
                        Ref. Invoice No
                      </label>
                      <div class="col-sm-9">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="autoSizingInputGroup"
                            placeholder="Enter ref invoice no"
                            value={ref_invoice_no}
                            onChange={(e) => setInvoiceNo(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body border-top">
            <div class="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Ggross Amt.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-text">US $</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter gross amt"
                        value={gross_amount}
                        onChange={(e) => setGrossAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    SGST Amt.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-text">US $</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter sgst amt"
                        value={sgst_amount}
                        onChange={(e) => setSgstAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3 ">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    SGST Acc.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Enter sgst acc"
                        value={agst_acc}
                        onChange={(e) => setAgstAcc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Net Amt.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-text">US $</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter net amount"
                        value={net_amount}
                        onChange={(e) => setNetAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    SGST Amt.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-text">US $</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Broker Name"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-md-4">
                <div class="row mb-3 ">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    SGST Acc.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        id="autoSizingInputGroup"
                        placeholder="Enter Broker Name"
                        onChange={(e)=> setNetAmount(e.target.value)}

                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Net Amt.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-text">Rs.₹</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Broker Name"
                        value={net_amount}
                        onChange={(e)=> setNetAmount(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    SGST Amt.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <div class="input-group-text">US $</div>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Broker Name"
                        onChange={(e)=> setNetAmount(e.target.value)}

                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div class="col-md-4">
                <div class="row mb-3 ">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    SGSTnsd Acc.
                  </label>
                  <div class="col-sm-8">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter Broker Name"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div class="card-footer text-center">
            <a href="#" class="btn btn-primary" onClick={onSubmit}>
              Save{" "}
            </a>
          </div>
        </div>

        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Invoice Number</th>
                    <th>Customer</th>
                    <th>Broker</th>
                    <th>Due Date</th>
                    <th>Net Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {list_data.map((data, index) => {
                    return (
                      <tr>
                        <td> {data.invoice_number}</td>
                        <td>{data.customer} </td>
                        <td>{data.broker} </td>
                        <td> {data.due_date}</td>
                        <td>{data.net_amount} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
