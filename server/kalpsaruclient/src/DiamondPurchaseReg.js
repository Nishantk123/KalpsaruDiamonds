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
function DiamondPurchaseReg() {
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
      .get(`/diamond?page=${page}&per_page=1000`)
      .then((res) => {
        console.log(res.data);
        setDiamondList(res.data);
      });
  };
  const handleSubmitDiamond = (diamond_data) => {
    console.log("hsgadhabdh");
    console.log("diamond_data", diamond_data);
    let data = {
      data: diamond_data,
    };

    fetch("/diamond", {
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
    console.log("hiihihihi");
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
    { id: "quality", name: "Quality" },
    { id: "packet_size", name: "Packet Size" },
    { id: "lot_number", name: "Lot Number" },
    { id: "shape", name: "Shape" },
    { id: "ct_weight", name: "Ct Weight" },
    { id: "cost_price", name: "Cost Price" },
    { id: "expected_sp", name: "Expected SP" },
    { id: "actual_sp", name: "Actual SP" },
    { id: "export", name: "Export" },
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
export default DiamondPurchaseReg;
