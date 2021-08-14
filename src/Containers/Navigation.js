import React from "react";
import { useState } from "react";
import SideDrawer from "../Components/Drawer";
import NavBar from "../Components/NavBar";

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const drawerOpenHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  ///
  const handleTabValueChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <React.Fragment>
      <NavBar
        drawerOpenHandler={drawerOpenHandler}
        tabValue={tabValue}
        handleTabValueChange={handleTabValueChange}
      />
      <SideDrawer
        drawerOpen={drawerOpen}
        drawerOpenHandler={drawerOpenHandler}
      />
    </React.Fragment>
  );
};

export default Navigation;
