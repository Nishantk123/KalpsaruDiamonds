import React, { useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import kalplogo from "../Images/kalpsaru-logo.png";
import kalpsymbol from "../Images/kalpsaru-symbol.png";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory()

  const hadleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <ProSidebar collapsed={toggle} className="sidebar-custom">
      <SidebarHeader>
        <div className="w-100 d-flex  p-2">
          <img src={kalpsymbol} className="klp-symble" />
          <img
            src={kalplogo}
            className={toggle ? "d-none" : "w-100 klp-logo"}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<i class="fas fa-fw fa-wrench"></i>}  onClick={()=>history.push('/dashboard/customer')}>
          Customer Account
          </MenuItem>
          {/* <SubMenu icon={<i class="fas fa-fw fa-wrench"></i>} title="Master">
            <MenuItem onClick={()=>history.push('/dashboard/customer')}>Customer Account</MenuItem>
          </SubMenu> */}
          <SubMenu
            icon={<i class="fas fa-fw fa-briefcase"></i>}
            title="Trading"
          >
            <MenuItem  onClick={()=>history.push('/dashboard/invoice')}>Sale Vigat</MenuItem>
            <MenuItem  onClick={()=>history.push('/dashboard/purchase')}>Purchase Vigat</MenuItem>
            <MenuItem  onClick={()=>history.push('/dashboard/assortment')}>Assortment</MenuItem>
          </SubMenu>
          {/* <SubMenu
            icon={<i class="fas fa-fw fa-cogs"></i>}
            title="Manufacturing"
          >
            <MenuItem  onClick={()=>history.push('/dashboard/customer')}>Customer Account</MenuItem>
            <MenuItem  onClick={()=>history.push('/dashboard/customer')}>Component 2</MenuItem>
          </SubMenu> */}
           <MenuItem icon={<i class="fas fa-fw fa-chart-area"></i>} onClick={()=>history.push('/dashboard/broker-analysis')}>
            Broker Analysis
          </MenuItem>
          <MenuItem icon={<i class="fas fa-fw fa-chart-area"></i>}  onClick={()=>history.push('/dashboard/general-account')}>
            General Account
          </MenuItem>
          {/* <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/lot-sale')}>
            Lot Sale Detail
          </MenuItem> */}
          <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/stock-tracking')}>
            Stock Taking
          </MenuItem>
          {/* <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/supplementary')}>
            supplementary
          </MenuItem> */}
          <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/diamondExport')}>
            DiamondExportReg
          </MenuItem>
          <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/diamondPurchaseReg')}>
            DiamondPurchaseReg
          </MenuItem>
          <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/diamondSallReg')}>
            DiamondSallReg
          </MenuItem>
          <MenuItem icon={<i class="fas fa-fw fa-chart-area" ></i>} onClick={()=>history.push('/dashboard/rojmelReg')}>
            RojmelReg
          </MenuItem>
          <MenuItem icon={<i class="fas fa-fw fa-file-alt"></i>}  onClick={()=>history.push('/dashboard/report')}>
            Report
          </MenuItem>
          {/* <MenuItem icon={<i class="fas fa-fw fa-file-alt"></i>}>
            Report Single
          </MenuItem> */}
          <MenuItem>
            <hr class="sidebar-divider d-none d-md-block"></hr>
          </MenuItem>
          {/* <MenuItem> */}
          <div class="text-center d-none d-md-block">
            <div
              className="rounded-circle border-0 sidebar-toggle"
              onClick={hadleToggle}
            >
              {toggle ? (
                <i class="fa-solid fa-angle-right"></i>
              ) : (
                <i class="fa-solid fa-angle-left"></i>
              )}
            </div>
          </div>
          {/* </MenuItem> */}
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
};

export default SideBar;
