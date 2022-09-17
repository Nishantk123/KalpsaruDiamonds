import './App.scss';
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import MainTainRecords from './MaintainRecords'
import DiamondPurchaseReg from './DiamondPurchaseReg'
import Supplementary from './Supplementary';
import Header from './Header';
import Dashboard from './layouts/Dashboard';
function App() {
  const jwt = window.localStorage.getItem("jwtToken")
  return (
    
      <Router>
        <div className="App">
          {/* {jwt &&<Header /> } */}
          <Route exact path="/" component={Home} />
          <Route  path='/dashboard' component={Dashboard} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
          <Route exact path="/MainTainRecords" component={MainTainRecords } />
          <Route exact path="/DiamondPurchaseReg" component={DiamondPurchaseReg} />
          <Route exact path="/supplementary" component={Supplementary } />
        </div>
      </Router>

    
  );
}

export default App;
