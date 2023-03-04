import React, { useEffect, useState } from "react";
import axios from "axios";
const BrokerAnalysis = () => {
  const [broker_list, setBrokerList] = useState([]);
  const getSaleList = () => {
    axios
      .get(`${process.env.REACT_APP_API}/invoice`, {
        params: { bussiness_type: "all" },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setBrokerList(res.data);
        }
      });
  };
  useEffect(() => {
    getSaleList();
  },[]);
  return (
    <div className="">
      <div className="container">
        <table
          class="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Date</th>
              <th>Party</th>
              <th>InvoiceNo</th>
              <th>Type</th>
              <th>Lot description</th>
              <th>-</th>
              <th>Amount($)</th>
            </tr>
          </thead>
          <tbody>
            {broker_list.map((data, index) => {
              return (
                <tr>
                  <td>{data.date}</td>
                  <td>{data.customer}</td>
                  <td>{data.invoice_number}</td>
                  <td>{data.bussiness_type}</td>
                  <td>{data.remark}</td>
                  <td>{data.net_amount}</td>
                  <td>{data.net_amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BrokerAnalysis;
