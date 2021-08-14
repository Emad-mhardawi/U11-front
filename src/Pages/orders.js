import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import OrdersTable from "../Components/OrdersTable";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
  },
  orders: {
    marginBottom: theme.spacing(4),
    fontSize: "1.5rem",
  },
}));

const Orders = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.orders}>Orders</Typography>
      <OrdersTable />
    </Paper>
  );
};

export default Orders;
