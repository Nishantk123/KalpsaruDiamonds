import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const Customer = () => {
  const [customer_name, setCustomerName] = useState("");
  const [alias, setalias] = useState("");
  const [annexure, setAnnexure] = useState("");
  const [active, setActive] = useState(false);
  const [internal, setInternal] = useState(false);
  const [kyc, setKyc] = useState(false);
  const [related_account, setRelated_account] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setUserState] = useState("");
  const [type, setType] = useState("");
  const [debit_limit, setDebitLimit] = useState("");
  const [percentage, setPercentage] = useState("");
  const [value, setValue] = useState("");
  const [interest, setInterest] = useState("");
  const [lead, setLead] = useState("");
  const [sales_man, setSaleMan] = useState([]);
  const [terms, setTerms] = useState([]);
  const [broker, setBroker] = useState("");
  const [assign_to, setAssign] = useState([]);
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [customer_profile, setCustomerProfile] = useState("");
  const [customer_list, setCustomerList] = useState([]);

  const customerOption = [
    { value: "Jiten", label: "Jiten" },
    { value: "Jiten", label: "Jiten" },
    { value: "Dhiraj sales", label: "Dhiraj sales" },
  ];

  const termOption = [
    { value: "30", label: "30" },
    { value: "90", label: "90" },
    { value: "120", label: "120" },
    { value: "150", label: "150" },
    { value: "180", label: "180" },
    { value: "120 DA", label: "120 DA" },
    { value: "Cash", label: "Cash" },
  ];

  const handleAssignGroup = (e) => {};

  const onSubmit = () => {
    const selesMan = sales_man.length>0&&sales_man.map((d,index)=>{
      return d.value;
    })
    const termData =terms.length>0 && terms.map((d,index)=>{
      return d.value;
    })
    const assignee_data = assign_to.length>0 && assign_to.map((d,index)=>{
      return d.value;
    })
    let data = {
      account_name: customer_name,
      alias: alias,
      annexure: annexure,
      active: active,
      internal: internal,
      kyc: kyc,
      related_account: related_account,
      country: country,
      state: state,
      city: city,
      type: type,
      debit_limit: debit_limit,
      percentage: percentage,
      value: value,
      interest: interest,
      lead: lead,
      sales_man: selesMan,
      terms: termData,
      broker: broker,
      assign_to_group: assignee_data,
      date: date,
      notes: note,
      user_image: "",
    };
    fetch("http://localhost:9001/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
          getCustomer();
      });
  };
  useEffect(() => {
    getCustomer()
  }, []);

  const getCustomer = () =>{
    axios.get("http://localhost:9001/customer").then((res) => {
      console.log(res.data);
      if (res.data) {
        setCustomerList(res.data);
      }
    });
  }

  const handleSalesman = (selectedOption)=>{
    console.log(selectedOption)
    setSaleMan(selectedOption)
  }
  const handleTerms = (selectedOption) =>{
    setTerms(selectedOption)
  }
  const handleAssignToGroup = (selectedOption) =>{
    setAssign(selectedOption)
  }
  return (
    <>
      <div>
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">
            Master <small> Customer Account </small>{" "}
          </h1>
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-primary">
                Customer Account (New){" "}
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="row mb-3">
                    <label
                      for="colFormLabel"
                      className="col-sm-4 col-form-label"
                    >
                      Account Name*
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="colFormLabel"
                        placeholder="Enter Account Name"
                        value={customer_name}
                        onChange={(e) => setCustomerName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row mb-3">
                    <label
                      for="colFormLabel"
                      className="col-sm-4 col-form-label"
                    >
                      Alias
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="colFormLabel"
                        placeholder="alias"
                        value={alias}
                        onChange={(e) => setalias(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row mb-3 ">
                    <label
                      for="colFormLabel"
                      className="col-sm-4 col-form-label"
                    >
                      Annexure
                    </label>
                    <div className="col-sm-8">
                      <div className="input-group">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={annexure}
                          onChange={(e) => setAnnexure(e.target.value)}
                        >
                          <option selected>Sundry Debtors</option>
                        </select>
                        <div className="input-group-text">+</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4"
                      for="defaultCheck1"
                    >
                      Inactive
                    </label>
                    <div className="col-sm-8">
                      <div className="input-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={active}
                            id="defaultCheck1"
                            onChange={(e) => setActive(e.target.checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4"
                      for="defaultCheck2"
                    >
                      Internal
                    </label>
                    <div className="col-sm-8">
                      <div className="input-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={internal}
                            id="defaultCheck2"
                            onChange={(e) => setInternal(e.target.checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row mb-3">
                    <label
                      className="form-check-label col-sm-4"
                      for="defaultCheck3"
                    >
                      KYC
                    </label>
                    <div className="col-sm-8">
                      <div className="input-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={kyc}
                            id="defaultCheck3"
                            onChange={(e) => setKyc(e.target.checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body border-top my-3">
            <div className="row">
              <div className="col-md-2">
                <button
                  className="btn btn-primary w-100"
                  type="button"
                  //   style="width:100%;"
                >
                  Company
                </button>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary w-100"
                  type="button"
                  //   style="width:100%;"
                >
                  Contact Details
                </button>
              </div>
              <div className="col-md-2">
                <button
                  className="btn btn-primary w-100"
                  type="button"
                  //   style="width:100%;"
                >
                  Contact Person
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100" type="button">
                  Tax
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100" type="button">
                  Other
                </button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100" type="button">
                  Reference
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="mb-4 row ">
            <div className="card-body col-md-12 p-3">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Related A/C
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter A/c Number"
                            value={related_account}
                            onChange={(e) => setRelated_account(e.target.value)}
                          />
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Country
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter Country name"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        State
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter State Name"
                            value={state}
                            onChange={(e) => setUserState(e.target.value)}
                          />
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        City
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter City Name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Type
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            onchange={(e) => setType(e.target.value)}
                          >
                            <option selected="">Select</option>
                            <option selected="A1">A1</option>
                            <option selected="A2">A2</option>

                          </select>
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Debit Limit (RS)
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter Debit Limit"
                            onChange={(e) => setDebitLimit(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Per(%)
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter Per(%)"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Value
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            id="colFormLabel"
                            value={value}
                            placeholder="Enter Value"
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Interest (%)
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter Interest"
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Lead
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="number"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter lead"
                            value={lead}
                            onChange={(e) => setLead(e.target.value)}
                          />
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Sales Man
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <Select
                            className="w-100"
                            options={customerOption}
                            isMulti={true}
                            onChange={handleSalesman}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Terms
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <Select
                            className="w-100"
                            options={termOption}
                            isMulti={true}
                            onChange={handleTerms}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Broker
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            id="colFormLabel"
                            placeholder="Enter Broker Name"
                            value={broker}
                            onChange={(e) => setBroker(e.target.value)}
                          />
                          <div className="input-group-text">+</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-md-12">
                    <button
                      className="btn btn-primary"
                      type="button"
                    >
                      Save
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="card-body col-md-12 p-3">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Assign To Group
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <Select
                            className="w-100"
                            options={customerOption}
                            isMulti={true}
                            onChange={handleAssignToGroup}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Date
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="date"
                          className="form-control"
                          id="colFormLabel"
                          placeholder="DD/MM/YYYY"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="row mb-3">
                      <label
                        for="colFormLabel"
                        className="col-sm-4 col-form-label"
                      >
                        Notes
                      </label>
                      <div className="col-sm-8">
                        <div className="input-group">
                          <textarea
                            className="form-control"
                            placeholder="Write a notes here"
                            id="floatingTextarea"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={onSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>





            {/* <div className="card-body col-md-4 p-3">
              <div className="col-md-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Selec File
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className=" col-md-12 upload-image ">
                      <div className="mb-5">
                        <div className="input-group">
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onchange="preview()"
                          />

                          <label for="formFile" className="btn-success">
                            Upload
                          </label>
                        </div>
                      </div>

                      <div className="col-md-12 card">
                        <div className="image-div">
                          <img id="frame" src="" className="img-fluid" />
                        </div>

                        <div className="col-md-12 d-flex justify-content-md-center mt-3 mb-3">
                          <button
                            onclick="clearImage()"
                            className="btn btn-danger "
                            id="clear"
                          >
                            Clear image
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}




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
                    <th>Account Name</th>
                    <th>Realated Account</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {customer_list.map((data, index) => {
                    return (
                      <tr>
                        <td> {data.account_name}</td>
                        <td>{data.related_account} </td>
                        <td>{data.country} </td>
                        <td> {data.city}</td>
                        <td>{data.value} </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
