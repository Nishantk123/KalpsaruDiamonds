import React, { useEffect, useState } from "react";
import CustomChart from "../components/CustomeChart";
import axios from "axios";
import { CSVLink, CSVDownload } from "react-csv";

const Report = () => {
  const [sale_list, setSaleList] = useState([]);
  const [purchase_list, setPurchaseList] = useState([]);
  const getSaleList = () => {
    axios
      .get("http://localhost:9001/invoice", {
        params: { bussiness_type: "sale" },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setSaleList(res.data);
        }
      });
  };
  const getPurchaseList = () => {
    axios
      .get("http://localhost:9001/invoice", {
        params: { bussiness_type: "purchase" },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setPurchaseList(res.data);
        }
      });
  };
  useEffect(() => {
    getSaleList();
    getPurchaseList();
  }, []);

  const csvData = [
    ["invoice_number", "book_type", "broker","bussiness_type","current_doller_price","date","due_date","ggross_amount","net_amount","qty","ref_invoice_number","remark","sgst_acc","sgst_amount"],
    // ["Ahmed", "Tomi", "ah@smthing.co.com"],
    // ["Raed", "Labes", "rl@smthing.co.com"],
    // ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];
  if (sale_list&&sale_list.length){
    sale_list.forEach((data)=>{
      let row_data =[]
        row_data.push(data.invoice_number)
        row_data.push(data.book_type)
        row_data.push(data.broker)
        row_data.push(data.bussiness_type)
        row_data.push(data.current_doller_price)
        row_data.push(data.date)
        row_data.push(data.due_date)
        row_data.push(data.ggross_amount)
        row_data.push(data.net_amount)
        row_data.push(data.qty)
        row_data.push(data.ref_invoice_number)
        row_data.push(data.remark)
        row_data.push(data.sgst_acc)
        row_data.push(data.sgst_amount)

        csvData.push(row_data)

    })
  }
  if (purchase_list&&purchase_list.length){
    purchase_list.forEach((data)=>{
      let row_data =[]
        row_data.push(data.invoice_number)
        row_data.push(data.book_type)
        row_data.push(data.broker)
        row_data.push(data.bussiness_type)
        row_data.push(data.current_doller_price)
        row_data.push(data.date)
        row_data.push(data.due_date)
        row_data.push(data.ggross_amount)
        row_data.push(data.net_amount)
        row_data.push(data.qty)
        row_data.push(data.ref_invoice_number)
        row_data.push(data.remark)
        row_data.push(data.sgst_acc)
        row_data.push(data.sgst_amount)

        csvData.push(row_data)

    })
  }
  console.log(sale_list);
  console.log(purchase_list);
  return (
    <div>
      <div className="container-fluid">
        <div className="d-flex justify-content-end my-3">
          {/* <button className="btn btn-primary"> */}
          <CSVLink data={csvData} filename={"report.csv"}>Download Report</CSVLink>
          {/* </button> */}
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <CustomChart
                  label_name="Sale data"
                  sale_list={sale_list}
                  purchase_list={purchase_list}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <CustomChart 
                  label_name="Purchase data"
                  sale_list={purchase_list}
                  purchase_list={purchase_list}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
