import React, { useContext, useEffect, useState } from "react";
import "./DiamondPurchaseReg.css";
import Button from "@mui/material/Button";
import * as XLSX from "xlsx";
import axios from "axios";
import Header from "./Header";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import _ from 'lodash'
function DiamondExportReg() {
  const [excelData, setExcelData] = useState(null);
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const [diamond_list, setDiamondList] = useState([]);
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);
  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const getDiamondList = () => {
    axios
      .get(`${process.env.REACT_APP_API}/diamond-export?page=${page}&per_page=1000`)
      .then((res) => {
        console.log(res.data);
        setDiamondList(res.data);
      });
  };
  const handleSubmitDiamond = (diamond_data) => {
    console.log("hsgadhabdh");
    console.log("diamond_data", diamond_data);
    let final_data = diamond_data.map((data, index)=>{
      // let e_total_purchase = "";
      // let e_total_sael ="";
      // let e_purchase_rs ="";
      // let e_sael_rs ="";
      // let e_p_l = "";
      // let e_diff_p_month="";
      // let e_purchase_rd="";
      // let e_sall_rd="";
      // if(data["export $"] >0){
      //   e_total_purchase = (Number(data["export $"]) *Number(data["purches price"]) )/100 + Number(data["export $"]);
      // }
      // if(data["export $"] >0){

      //   e_total_sael = (Number(data["export $"])  *  Number(data["total purchesh$"]))/100 + Number(data["export $"] )
      // }
      // if (data["export $"] >0){
      //   e_purchase_rs = Number(data["total purchesh$"]) *Number(data["$ purches price"])
      // }
      // if (data["export $"] >0){
      //   e_sael_rs = Number(data["export $"])  * Number(data["$ sale price"])
      // }
      // if (data["export $"] >0){
      //   e_p_l = Number(data["$ sale price"]) - e_purchase_rs
      // }
      // if (data["export $"] >0){
      //   e_diff_p_month = ((Number(data["P&L"])/e_purchase_rs * 100)/Number(data["Terms"])) * 30
      // }
      // if (data["export $"] >0){
      //   e_purchase_rd = (e_purchase_rs - Number(data["Add/Less"]))/1000
      // }
      // if (data["export $"] >0){
      //   e_sall_rd = (Number(data["$ sale rs"]) - Number(data["Add/Less"]))/1000
      // }
      return(
        {
          no: _.get(data,"No",""),
          export: _.get(data,"export $",""),
          total_purchase:  _.get(data,"total purchesh$",""),
          purchase_price: _.get(data,"$ purches price",""),
          total_sale: _.get(data,"total sael $",""),
          sale_price: _.get(data,"$ sale price",""),
          exp: _.get(data,"Exp.",""),
          terms: _.get(data,"Terms",""),
          purchase_rs:  _.get(data,"$purches rs.",""),
          sale_rs: _.get(data,"$ sale rs",""),
          p_l: _.get(data,"P&L",""),
          diff_per_month: _.get(data,"Diff P.Month.%",""),
          purchase_party: _.get(data,"Purches Party",""),
          purchase_broker: _.get(data,"Purchesh Broker",""),
          sale_party:  _.get(data,"Sale Party",""),
          sale_broker: _.get(data,"Sale Broker",""),
          export_party: _.get(data,"Export Party",""),
          export_destination: _.get(data,"export destination.",""),
          add_less: _.get(data,"Add/Less",""),
          purchase_rd: _.get(data,"purches rd",""),
          sall_rd: _.get(data,"sall rd",""),
          mark: _.get(data,"Mark",""),
          cls: _.get(data,"Cls",""),
          date: _.get(data,"Date",""),
          due_Date: _.get(data,"Due.Date",""),
          partnar: _.get(data,"partnar",""),
          net_us: _.get(data,"net us",""),
          int: _.get(data,"int",""),
          net_rd: _.get(data,"net rd",""),
          rd: _.get(data,"rd",""),
          partner_rd: _.get(data,"partnar rd",""),
          int_jama: _.get(data,"int jama",""),
          amount: _.get(data,"amount",""),
          booking: _.get(data,"booking",""),


        }
      )
    })
    
    let data = {
      data: final_data,
    };

    fetch(`${process.env.REACT_APP_API}/diamond-export`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        getDiamondList();
      });
  };
  useEffect(() => {
    getDiamondList();
  }, []);

  const uploadFile = (e) => {
    let selectedFile = e.target.files[0];
    console.log(selectedFile.type);
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        setExcelFileError("Please select only excel file type");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!excelFile) {
      setExcelData(null);
    } else {
      setExcelData(null);
      const workBook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(workSheet);
      setExcelData(data);
      handleSubmitDiamond(data);
    }
  };
  console.log(excelData);
  const columns = [
    { id: "no", name: "No" },
    { id: "export", name: "export $" },
    { id: "total_purchase", name: "total purchesh$" },
    { id: "purchase_price", name: "$ purches price" },
    { id: "total_sale", name: "total sael $" },
    { id: "sale_price", name: "$ sale price" },
    { id: "exp", name: "Exp." },
    { id: "terms", name: "Terms" },
    { id: "purchase_rs", name: "$purches rs." },
    { id: "sale_rs", name: "$ sale rs" },
    { id: "p_l", name: "P&L" },
    { id: "diff_per_month", name: "Diff P.Month.%" },
    { id: "purchase_party", name: "Purches Party" },
    { id: "purchase_broker", name: "Purchesh Broker" },
    { id: "sale_party", name: "Sale Party" },
    { id: "sale_broker", name: "Sale Broker" },
    { id: "export_party", name: "Export Party" },
    { id: "export_destination", name: "export destination." },
    { id: "add_less", name: "Add/Less" },
    { id: "purchase_rd", name: "purches rd" },
    { id: "sall_rd", name: "sall rd" },
    { id: "mark", name: "Mark" },
    { id: "cls", name: "Cls" },
    { id: "date", name: "Date" },
    { id: "due_Date", name: "Due.Date" },
    { id: "partner", name: "partnar" },
    { id: "net_us", name: "net us" },
    { id: "int", name: "int" },
    { id: "net_rd", name: "net rd" },
    { id: "rd", name: "rd" },
    { id: "partner_rd", name: "partnar rd" },
    { id: "int_jama", name: "int jama" },
    { id: "amount", name: "amount" },
    { id: "booking", name: "booking" },








  ];
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <div className="container">
        <div className="diamondPurcSubHead my-3">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="purchaseRegForDia">
              <div>
                <h2>Upload Excel File</h2>
              </div>
              <div>
                <input type="file" onChange={uploadFile} className="inputTag" />
              </div>
              {excelFileError && <div>{excelFileError}</div>}
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="my-3">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        // align={column.align}
                        // style={{ minWidth: column.minWidth }}
                      >
                        {column.name}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {diamond_list
                    .slice(page - 1 * per_page, page * per_page + per_page)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={diamond_list.length}
              rowsPerPage={per_page}
              page={page - 1}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default DiamondExportReg;
