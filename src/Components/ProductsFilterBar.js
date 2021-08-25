import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

import TuneIcon from '@material-ui/icons/Tune';
import CustomizedMenus from "./SortMenu";
const useStyles = makeStyles((theme) => ({
  root: {
     background: theme.palette.common.lightGrey,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius:0
  },
  box:{
    display: "flex",
    alignItems: "center",
  }

}));

const ProductFilterBar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.box}>
      <Button
        size='large'
        color="primary"
        className={classes.button}
        startIcon={<TuneIcon />}
        onClick={props.openFiltersHandler}
      >
        Filters
      </Button>
      <CustomizedMenus/>
      </Box>
      
    </div>
  );
};

export default ProductFilterBar;
