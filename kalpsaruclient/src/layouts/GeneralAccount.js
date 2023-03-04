import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";


const GeneralAccount = () => {
  const [account_name, setAccountName] = useState("");
  const [alias, setalias] = useState("");
  const [annexure, setAnnexure] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [main_party, setMainParty] = useState("");
  const [phone_no1, setPhoneNo1] = useState("");
  const [phone_no2, setPhoneNo2] = useState("");
  const [fax_no, setFaxNo] = useState("");
  const [website, setWebsite] = useState("");
  const [email_id, setEmailId] = useState("");
  const [opening_balance, setOpeningBalance] = useState("");
  const [assign_to, setAssign] = useState([]);

  const customerOption = [
    { value: "Jiten", label: "Jiten" },
    { value: "Jiten", label: "Jiten" },
    { value: "Dhiraj sales", label: "Dhiraj sales" },
  ];
  const handleAssignToGroup = (selectedOption) => {
    setAssign(selectedOption);
  };
  const onSubmit = () =>{
    const assignee_data = assign_to.length>0 && assign_to.map((d,index)=>{
      return d.value;
    })
    let data = {
      account_name: account_name,
      alias: alias,
      annexure: annexure,
      address:address,
      country: country,
      type: type,
      main_party:main_party,
      city: city,
      phone_1: phone_no1,
      phone_2: phone_no2,
      fax_no: fax_no,
      website:website,
      email: email_id,
      opening_balance: opening_balance,
      assign_to_group: assignee_data,

    };
    fetch(`${process.env.REACT_APP_API}/customer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  } 

  return (
    <div>
      <div className="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">General Account</h1>
        <div className="card shadow mb-4">
          <div className="card-header">
            <h5 class="m-0 font-weight-bold text-primary">
              New General Account{" "}
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Account Name
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Account Number"
                      value={account_name}
                      onChange={(e) => setAccountName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row mb-3">
                  <label for="colFormLabel" className="col-sm-4 col-form-label">
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
                  <label for="colFormLabel" className="col-sm-4 col-form-label">
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
                      {/* <div className="input-group-text">+</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Address
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Country
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Type
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Main Party
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter main party"
                      value={main_party}
                      onChange={(e) => setMainParty(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    City
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Phone No 1
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter phone Number"
                      value={phone_no1}
                      onChange={(e) => setPhoneNo1(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Phone No 2
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter phone Number"
                      value={phone_no2}
                      onChange={(e) => setPhoneNo2(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Fax No
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter fax Number"
                      value={fax_no}
                      onChange={(e) => setFaxNo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    website
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Email ID
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="email"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter email id"
                      value={email_id}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Opening Balance
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter opning balance"
                      value={opening_balance}
                      onChange={(e) => setOpeningBalance(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="row mb-3">
                  <label for="colFormLabel" className="col-sm-4 col-form-label">
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
              <div className="col-md-12 d-flex justify-content-center">
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
      </div>
    </div>
  );
};

export default GeneralAccount;
