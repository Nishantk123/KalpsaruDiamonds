import './App.css';
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './SignUp'
import ForgotPassword from './ForgotPassword'
import MainTainRecords from './MaintainRecords'
import DiamondPurchaseReg from './DiamondPurchaseReg'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route exact path="/MainTainRecords" element={<MainTainRecords />} />
          <Route exact path="/DiamondPurchaseReg" element={<DiamondPurchaseReg />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
