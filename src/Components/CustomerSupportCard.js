import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import emptyCartImage from "../Assets/Images/emptyCart.svg";
import ProductQtyButton from "./productQtyButton";
import { Box, Grid, Typography } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import ReplayIcon from '@material-ui/icons/Replay';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down('xs')]:{
      alignItems:'center'
    }
  },
  icon: {
    fontSize: "5rem",
    borderRadius: "10px",
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    background: "#e8eaf6",
  },
  title:{
    fontSize:'2rem',
    paddingTop:theme.spacing(1),
    paddingBottom:theme.spacing(1),
    fontWeight:'bold',
},

desc:{
  paddingRight:theme.spacing(2),
  fontSize:'18px',
  color:theme.palette.common.mediumGrey,
  [theme.breakpoints.down('xs')]:{
    textAlign:'center'
  }
  
}
}));

const CustomerSupportCard = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <Box className={classes.root}>
          <LocalShippingIcon className={classes.icon} />
          <Typography className={classes.title} variant="h5">Free Shipping</Typography>
          <Typography className={classes.desc}>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. 
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box className={classes.root} >
          <PermPhoneMsgIcon className={classes.icon} />
          <Typography className={classes.title} variant="h5">24/7 Support</Typography>
          <Typography className={classes.desc}>
          he passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer 
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box className={classes.root}>
          <ReplayIcon className={classes.icon} />
          <Typography className={classes.title} variant="h5">Free Return</Typography>
          <Typography className={classes.desc}>
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.
            </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomerSupportCard;
