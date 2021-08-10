import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import  IconButton  from "@material-ui/core/IconButton";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "6.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px",
    border: "1px solid",
    borderColor: theme.palette.common.mediumGrey,
    borderRadius: theme.shape.borderRadius,
  },
  button: {
    padding: 0,
    color:'black'
  },
}));

const ProductQtyButton = (props) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <IconButton onClick={props.decreaseQty}  disabled ={props.product.qty <=1 } aria-label="delete" className={classes.button}>
        <RemoveIcon/>
      </IconButton>
      {props.children}
      <IconButton  onClick={props.increaseQty} aria-label="add" className={classes.button}>
        <AddIcon/>
      </IconButton>
    </div>
  );
};

export default ProductQtyButton;
