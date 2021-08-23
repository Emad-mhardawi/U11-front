import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Box, Button, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {filterProducts} from '../redux-store/actions/productActions'
import PriceRangeSlider from "./PriceRangeSlider";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: theme.palette.common.lightGrey,
    padding: theme.spacing(3),
    marginBottom:theme.spacing(4)
  },
  button: {
    borderRadius: 0,
  },
  divider:{
    margin:theme.spacing(2)
  },

  lisItemText:{
    color: theme.palette.common.mediumGrey,
  },
  formGroup:{
    marginLeft:theme.spacing(4)
  },

  formControl:{
    background:'green'
  }
}));




  const FiltersDrawer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [priceValues, setPriceValues] = useState([0, 1000]);
 

  const applyFilters = () => {
    dispatch(filterProducts(priceValues))
  };



  return (
  <Drawer
    className={classes.root}
    onClose={props.handleOpen}
    open={props.open}
    anchor="right"
    classes={{ paper: classes.drawerPaper }}
    >
      <Box className={classes.drawerHeader}>
        <Button className={classes.button} color="primary" variant="contained" onClick={()=>{applyFilters(); props.handleOpen()}}>
          Apply
        </Button>
        <Typography>Filters</Typography>
      </Box>
      
      <PriceRangeSlider priceValues={priceValues}  setPriceValues={setPriceValues}/>

</Drawer>
  );
};
export default FiltersDrawer;
