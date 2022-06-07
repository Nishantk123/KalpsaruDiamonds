import React, { useState } from 'react';
import './DiamondPurchaseReg.css'
import Button from '@mui/material/Button';
import * as XLSX from 'xlsx'
function DiamondPurchaseReg() {
    const [excelData, setExcelData] = useState(null)
    const [excelFile, setExcelFile] = useState(null)
    const [excelFileError, setExcelFileError] = useState(null)
    const fileType = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"]
    const uploadFile = (e) => {
        let selectedFile = e.target.files[0]
        console.log(selectedFile.type);
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            } else {
                setExcelFileError("Please select only excel file type")
                setExcelFile(null)
            }
        } else {
            console.log("Please select your file");
        }
    }
    const handleSubmit = (e) => {
        console.log("hiihihihi");
        e.preventDefault();
        if (!excelFile) {
            setExcelData(null)
        } else {
            setExcelData(null)
            const workBook = XLSX.read(excelFile, { type: "buffer" })
            const worksheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(workSheet)
            setExcelData(data)

        }
    }
    console.log(excelData);
    return (
        <div>
            <div className="mainHeadingDiaPurc">
                <h1>
                    KALPSARU DIAMONDS
                </h1>
            </div>
            <div className="diamondPurcSubHead">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="purchaseRegForDia">
                        <div>
                            <h2>
                                Upload Excel File
                        </h2>
                        </div>
                        <div>
                            <input type="file" onChange={uploadFile} className="inputTag" />
                        </div>
                        {excelFileError && <div>{excelFileError}</div>}
                        <Button variant="contained" type="submit" >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default DiamondPurchaseReg