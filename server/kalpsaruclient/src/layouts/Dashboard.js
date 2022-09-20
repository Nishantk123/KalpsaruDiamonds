import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Invoice from "./Invoice";
import { Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Assortment from "../components/Assortment";
import Customer from "./Customer";

const Dashboard = () => {
  const param = useParams();
  const { path, url } = useRouteMatch();
  let history = useHistory();
  console.log(path, url);
  let current_page = param.page;
  useEffect(() => {
    let jwtToken = window.localStorage.getItem("jwtToken");
    console.log(jwtToken);
    if (jwtToken === null || jwtToken === "") {
      history.push("/");
    }
  }, []);
  return (
    <div className="">
      <div className="d-flex">
        <SideBar />
        <div className="w-100">
          <Header />
          <Switch>
            {/* <Route path={`${path}/`}>
              <div className="container-fluid my-3">
                  <h3 className="text-center">Welcome to the Kalpsaru</h3>
              </div>
            </Route> */}
            <Route path={`${path}/invoice`}>
              <Invoice />
            </Route>
            <Route path={`${path}/assortment`}>
              <Assortment />
            </Route>
            <Route path={`${path}/customer`}>
              <Customer />
            </Route>
          </Switch>
          {/* <Router>
            <Route exact path="/invoice" component={Invoice} />
          </Router> */}
          {/* <Header />
          <Invoice /> */}
          {/* .container-fluid */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
