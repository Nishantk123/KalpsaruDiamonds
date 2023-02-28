import React, { useEffect, useState } from "react";
import axios from "axios";

const StockTracking = () => {
  const [assortment_list, setAssortmentList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9001/assortment").then((res) => {
      if (res.data) {
        setAssortmentList(res.data);
      }
    });
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <table
          class="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Parcel</th>
              <th>As per Book</th>
              <th>On Appr</th>
              <th>On Hand</th>
              <th>physical</th>
              <th>Diff +/-</th>
              <th>Appr + Act</th>
              <th>Price</th>
              <th>value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Size</th>
            </tr>
            {assortment_list.map((data, index) => {
              let daimond_list = data.daimond_list;
              return (
                <>
                {
                daimond_list.map((d, n) => {
                return (
                  <tr key={n}>
                    <td><small>{d.size + " " + d.shape + " " + d.color} </small></td>
                    <td>{d.rate}</td>
                    <td>0.00</td>
                    <td>{d.rate}</td>
                    <td>{d.rate}</td>
                    <td>{d.rate}</td>
                    <td>{d.rate}</td>
                    <td>{d.amout}</td>
                    <td>{d.amout}</td>
                  </tr>
                )
              })
            }
            <tr>
              <th>Group Total</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTracking;
