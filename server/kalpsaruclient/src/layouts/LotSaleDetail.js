import React from "react";

const LotSaleDetail = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">test</div>
          <div className="card-body">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>InvoiceNo</th>
                  <th>PartyName</th>
                  <th>City</th>
                  <th>Price($)</th>
                  <th>Amount($)</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
