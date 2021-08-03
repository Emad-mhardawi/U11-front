import React from "react";
import { useState } from "react";
import SideDrawer from "../Components/Drawer";
import NavBar from "../Components/NavBar";

const Navigation =()=>{
    const [drawerOpen, setDrawerOpen] = useState(false);
    const drawerOpenHandler = ()=>{
        setDrawerOpen(!drawerOpen)
    }
    return(
    <React.Fragment>
        <NavBar drawerOpenHandler={drawerOpenHandler} />
        <SideDrawer drawerOpen={drawerOpen} drawerOpenHandler={drawerOpenHandler}/>
    </React.Fragment>
    )
}

export default Navigation;