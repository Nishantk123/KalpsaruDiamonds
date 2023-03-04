import React, { useEffect, useState } from "react";

const Assortment = () => {
  const [sr_no, setSrNo] = useState("");
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [covn_rate, setCovnRate] = useState("");
  const [vatav, setVatav] = useState("");
  const [price_list, setPriceList] = useState("");
  const [ref_no, setRefNo] = useState("");
  const [note, setNote] = useState("");
  const [bal_cts, setBalCts] = useState("");
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  // const [diamond_ref_no, setDiamondRefNo] = useState("");
  // const [shape, setShape] = useState("");
  // const [size, setSize] = useState("");
  // const [color, setColor] = useState("");
  // const [clarity, setClarity] = useState("");
  // const [cts, setCts] = useState("");
  // const [diamond_rate, setDiamondRate] = useState("");
  // const [diamond_amount, setDiamondAmount] = useState("");
  // const [n_rate, setNRate] = useState("");
  // const [n_amt, setNAmt] = useState("");
  // const [p_rate, setPRate] = useState("");
  // const [p_amt, setPAmt] = useState("");
  // const [s_rate, setSRate] = useState("");
  // const [s_amt, setSAmt] = useState("");
  const [daimond_list, setDiamondList] = useState([{
    ref_no: "",
    shape: "",
    size: "",
    color: "",
    clarity: "",
    cts: "",
    rate: 0,
    amount: 0,
    n_rate: 0,
    n_amt: 0,
    p_rate: 0,
    p_amt: 0,
    s_rate: 0,
    s_amount: 0,
  }]);

  const diamond_cuts = [
    "Round",
    "Princess",
    "Cushion",
    "Emerald",
    "Pear",
    "Asscher",
    "Marquise",
    "Radiant",
    "Oval",
    "Heart Shaped",
  ];
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
  const diamond_weight = [
    "-2",
    "-6.5",
    "6.5",
    "11",
    "1/6",
    "1/5",
    "1/4",
    "1/3",
    "3/4",
  ];
  const diamond_color = ["Whilte", "Off White", "NW", "OW", "TT"];
  useEffect(() => {

  }, []);

  const handleSubmit = () =>{
    let data = {
      sr_no:sr_no,
      date:date,
      currency:currency,
      covn_rate:covn_rate,
      vatav:vatav,
      price_list:price_list,
      ref_no:ref_no,
      note:note,
      bal_cts:bal_cts,
      rate:rate,
      amount:amount,
      daimond_list:daimond_list
    }
    fetch(`${process.env.REACT_APP_API}/assortment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((res)=>{

      setSrNo("")
      setDate("")
      setCurrency("")
      setCovnRate("")
      setVatav("")
      setPriceList("")
      setRefNo("")
      setNote("")
      setBalCts("")
      setRate("")
      setAmount("")
      setDiamondList([{
        ref_no: "",
        shape: "",
        size: "",
        color: "",
        clarity: "",
        cts: "",
        rate: 0,
        amount: 0,
        n_rate: 0,
        n_amt: 0,
        p_rate: 0,
        p_amt: 0,
        s_rate: 0,
        s_amount: 0,
      }])
    })
  }
  const handleChange = (index, name, value) =>{
    let data = [...daimond_list]
        data[index][name] = value
        setDiamondList(data)
  }
  const handleRemoveRow = (index)=>{
    console.log(index)
    let data = [...daimond_list]
      data.splice(index, 1);
    setDiamondList(data)
  }
  const handleAddRow = () =>{
    let data = [...daimond_list]
    let obj_data = {
      ref_no: "",
      shape: "",
      size: "",
      color: "",
      clarity: "",
      cts: "",
      rate: 0,
      amount: 0,
      n_rate: 0,
      n_amt: 0,
      p_rate: 0,
      p_amt: 0,
      s_rate: 0,
      s_amount: 0,
    }
    data.push(obj_data)
    setDiamondList(data)
  }
  const getDiamondTableUI = () => {
    return (
      <>
        {daimond_list.map((data, index) => {
          return (
            <tr key={index}>
              <td scope="col" className="px-0 py-2">
                <input
                  className="form-control"
                  value={data.ref_no}
                  onChange={(e) => handleChange(index,'ref_no',e.target.value)}
                />
              </td>
              <td scope="col" className="px-0 py-2">
                {
                  <select
                    className="form-control"
                    value={data.shape}
                    onChange={(e) => handleChange(index,"shape",e.target.value)}
                  >
                    <option></option>
                    {diamond_cuts.map((d) => {
                      return <option value={d}>{d}</option>;
                    })}
                  </select>
                }
              </td>
              <td className="px-0 py-2">
                {
                  <select
                    className="form-control"
                    value={data.size}
                    onChange={(e) => handleChange(index,"size",e.target.value)}
                  >
                    <option></option>
                    {diamond_weight.map((d) => {
                      return <option value={d}>{d}</option>;
                    })}
                  </select>
                }
              </td>
              <td className="px-0 py-2">
                {
                  <select
                    className="form-control"
                    value={data.color}
                    onChange={(e) => handleChange(index,'color',e.target.value)}
                  >
                    <option></option>
                    {diamond_color.map((d) => {
                      return <option value={d}>{d}</option>;
                    })}
                  </select>
                }
              </td>
              <td>
                {
                  <select
                    className="form-control"
                    value={data.clarity}
                    onChange={(e) => handleChange(index,"clarity",e.target.value)}
                  >
                    <option></option>
                    {diamond_clarity.map((d) => {
                      return <option value={d}>{d}</option>;
                    })}
                  </select>
                }
              </td>
              <td className="px-0 py-2">
                <input
                  className="form-control"
                  value={data.cts}
                  onChange={(e) => handleChange(index,'cts',e.target.value)}
                />
              </td>
              <td className="px-0 py-2">
                <input
                  className="form-control"
                  value={data.rate}
                  onChange={(e) => handleChange(index,"rate",e.target.value)}
                />
              </td>
              <td className="px-0 py-2">
                <input
                  className="form-control"
                  value={data.amount}
                  onChange={(e) => handleChange(index,"amount",e.target.value)}
                />
              </td>
              <td className="px-0 py-2">
                <input
                  className="form-control"
                  value={data.n_rate}
                  onChange={(e) => handleChange(index,"n_rate",e.target.value)}
                />
              </td>
              <td className="px-0 py-2 table-secondary">
                <input
                  className="form-control"
                  value={data.n_amt}
                  onChange={(e) => handleChange(index,"n_amt",e.target.value)}
                />
              </td>
              <td className="table-secondary px-0 py-2">
                <input
                  className="form-control"
                  value={data.p_rate}
                  onChange={(e) => handleChange(index,"p_rate",e.target.value)}
                />
              </td>
              <td className="table-info px-0 py-2">
                <input
                  className="form-control"
                  value={data.p_amt}
                  onChange={(e) => handleChange(index,"p_amt",e.target.value)}
                  setSRate
                />
              </td>
              <td className="table-info px-0 py-2">
                <input
                  className="form-control"
                  value={data.s_rate}
                  onChange={(e) => handleChange(index,"s_rate",e.target.value)}
                />
              </td>
              <td className="table-success px-0 py-2">
                <input
                  className="form-control"
                  value={data.s_amount}
                  onChange={(e) => handleChange(index,"s_amount",e.target.value)}
                />
              </td>
              <td class="font-weight-bold">
                {index === daimond_list.length -1?<i class="fa fa-plus" aria-hidden="true" onClick={handleAddRow}></i>:
                <i class="fa fa-minus" aria-hidden="true" onClick={()=>handleRemoveRow(index)}></i>}
              </td>
            </tr>
          );
        })}
      </>
    );
  };
  console.log(daimond_list);
  let sum_amount = daimond_list.reduce((sum, current)=>{
      return sum + Number(current.amount)
  },0)
  console.log(sum_amount)
  return (
    <div>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">
          Trading<small> Assortment </small>{" "}
        </h1>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <div class="float-right">
              <a href="#" class="btn btn-sm btn-success mr-2">
                New{" "}
              </a>
            </div>
            <h5 class="m-0 font-weight-bold text-primary">Assortment New</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Sr No*
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="number"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Sr Number"
                      value={sr_no}
                      onChange={(e) => setSrNo(e.target.value)}
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
                      <option selected>US$</option>
                      <option value="US$">US$</option>
                      <option value="euro">Euro</option>
                      <option value="ruppee">Ruppee</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Covn Rate
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="number"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Sr Number"
                      value={covn_rate}
                      onChange={(e) => setCovnRate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Vatav
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Vat"
                      value={vatav}
                      onChange={(e) => setVatav(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="row mb-3">
                  <label for="colFormLabel" class="col-sm-4 col-form-label">
                    Price List
                  </label>
                  <div class="col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      id="colFormLabel"
                      placeholder="Enter Price List"
                      value={price_list}
                      onChange={(e) => setPriceList(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card from shadow mb-4">
          <div class="card-header py-3">
            {/* <!-- <div class="float-right"><a href="#" class="btn btn-sm btn-success mr-2">New </a><a href="#" class="btn btn-sm btn-primary">Close </a></div> --> */}
            <h5 class="m-0 font-weight-bold text-primary">From :</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="row mb-3">
                      <label for="colFormLabel" class="col-md-4 col-form-label">
                        Ref. No
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder="Enter Ref No"
                          value={ref_no}
                          onChange={(e) => setRefNo(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row mb-2">
                      <label for="colFormLabel" class="col-md-4 col-form-label">
                        Note
                      </label>
                      <div class="col-md-8">
                        <input
                          type="text"
                          class="form-control"
                          id="colFormLabel"
                          placeholder="Enter Note"
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="row mb-3">
                      <label for="colFormLabel" class="col-md-4 col-form-label">
                        Bal.Cts
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder="Enter Bal.Cts"
                          value={bal_cts}
                          onChange={(e) => setBalCts(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-4">
                    <div class="row mb-3">
                      <label for="colFormLabel" class="col-md-4 col-form-label">
                        Rate
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder="Enter Rate"
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="row mb-3">
                      <label for="colFormLabel" class="col-md-4 col-form-label">
                        Amount
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder="Enter Amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card to-section shadow mb-4">
          <div class="card-header py-3">
            <h5 class="mb-2 font-weight-bold text-primary">To :</h5>
          </div>
          <div class="card-body px-1">
            <div className="container-fluid px-0">
              <div class="row px-0">
                <div class="col-md-12 table-responsive">
                  <table class="table table-bordered">
                    <thead class="table-primary">
                      <tr>
                        <th scope="col">Ref.No</th>
                        <th scope="col">Shape</th>
                        <th scope="col">Size</th>
                        <th scope="col">Color</th>
                        <th scope="col">Clarity</th>
                        <th scope="col">Cts</th>
                        <th scope="col">Rate US$</th>
                        <th scope="col">Amount US$</th>
                        <th scope="col">N.Rate US$</th>
                        <th scope="col">N.Amt US$</th>
                        <th scope="col">P.Rate US$</th>
                        <th scope="col">P.Amt US$</th>
                        <th scope="col">S.Rate US$</th>
                        <th scope="col">S.Amt US$</th>
                        {/* <th scope="col">S.Amt US$</th> */}
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>{getDiamondTableUI()}</tbody>
                    <tfoot class="table-primary">
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.rate)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.amount)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.n_rate)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.n_amt)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.p_rate)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.p_amt)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.s_rate)
                          },0)
                          }
                        </td>
                        <td>
                          {
                            daimond_list.reduce((sum, current)=>{
                              return sum + Number(current.s_amount)
                          },0)
                          }
                        </td>
                        {/* <td></td> */}
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div class="col-md-12 mb-2">
                  <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-8">
                      <table class="table table-bordered">
                        <tbody>
                          <tr class="table-secondary">
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.rate)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.amount)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.n_rate)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.n_amt)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.p_rate)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.p_amt)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.s_rate)
                              },0)
                              }
                            </td>
                            <td>
                              {
                                daimond_list.reduce((sum, current)=>{
                                  return sum + Number(current.s_amount)
                              },0)
                              }
                            </td>
                            {/* <td></td> */}

                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-5"> </div>
                    <div class="col-md-7">
                      <div class="row">
                        <div class="col-md-2">
                          <div class="row mb-3">
                            <div class="col-sm-12">
                              <input
                                type="text"
                                class="form-control bg-secondary"
                                id="colFormLabel"
                                placeholder=""
                              />
                            </div>
                            <label
                              for="colFormLabel"
                              class="col-sm-12 col-form-label text-center"
                            >
                              Pur %
                            </label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="row">
                            <div class="col-sm-12">
                              <input
                                type="text"
                                class="form-control bg-secondary"
                                id="colFormLabel"
                                placeholder=""
                              />
                            </div>
                            <label
                              for="colFormLabel"
                              class="col-sm-12 col-form-label text-center"
                            >
                              Pur Diff
                            </label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="row">
                            <div class="col-sm-12">
                              <input
                                type="text"
                                class="form-control bg-primary"
                                id="colFormLabel"
                                placeholder=""
                              />
                            </div>
                            <label
                              for="colFormLabel"
                              class="col-sm-12 col-form-label text-center"
                            >
                              Cost %
                            </label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="row">
                            <div class="col-sm-12">
                              <input
                                type="text"
                                class="form-control bg-primary"
                                id="colFormLabel"
                                placeholder=""
                              />
                            </div>
                            <label
                              for="colFormLabel"
                              class="col-sm-12 col-form-label text-center"
                            >
                              Cost Diff
                            </label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="row">
                            <div class="col-sm-12">
                              <input
                                type="text"
                                class="form-control bg-success"
                                id="colFormLabel"
                                placeholder=""
                              />
                            </div>
                            <label
                              for="colFormLabel"
                              class="col-sm-12 col-form-label text-center"
                            >
                              Sale %
                            </label>
                          </div>
                        </div>
                        <div class="col-md-2">
                          <div class="row">
                            <div class="col-sm-12">
                              <input
                                type="text"
                                class="form-control bg-success"
                                id="colFormLabel"
                                placeholder=""
                              />
                            </div>
                            <label
                              for="colFormLabel"
                              class="col-sm-12 col-form-label text-center"
                            >
                              Sale Diff
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card Cal-section shadow mb-4">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-3">
                    <div class="row">
                      <label for="colFormLabel" class="col-md-3 col-form-label">
                        Cal1
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="row">
                      <label for="colFormLabel" class="col-md-3 col-form-label">
                        Cal2
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="row">
                      <label for="colFormLabel" class="col-md-3 col-form-label">
                        Cal3
                      </label>
                      <div class="col-md-8">
                        <input
                          type="number"
                          class="form-control"
                          id="colFormLabel"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card save-btn shadow mb-4">
        <div class="card-body">
          <div class="float-left">
            <a href="#" class="btn btn-bg btn-success mr-2" onClick={handleSubmit}>
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Assortment;
