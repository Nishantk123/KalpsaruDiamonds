import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Line } from "react-chartjs-2";
import moment from 'moment';



const CustomChart = ({sale_list, label_name }) => {
  let lebels = []
  let value_data =[]
  if(sale_list &&sale_list.length>0){
    sale_list.forEach((data)=>{
      lebels.push(moment(data.date).format('ll'))
      value_data.push(data.net_amount)
    })
  }
  const data = {
    labels: lebels,
    // ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: label_name,
        data: value_data,
        fill: true,
        backgroundColor:label_name ==="Sale data"?"rgba(75,192,192,0.2)": "#742771" ,
        borderColor: label_name ==="Sale data"?"rgba(75,192,192,1)": "#742774",
      },
      // {
      //   label: "Purchase Data",
      //   data: [33, 25, 35, 51, 54, 76],
      //   fill: false,
      //   borderColor: "#742774",
      // },
    ],
  };
  return <Line data={data} />;
};

export default CustomChart;
