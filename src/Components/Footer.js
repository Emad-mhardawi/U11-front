import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../Assets/Images/logo.svg'
const useStyles = makeStyles((theme) => ({
  root: {
    background: '#37383d',
    color:'white',
    paddingTop:'4rem',
    paddingBottom:'4rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    minHeight:'300px',
  },
  links:{
      display:'flex',
      minWidth:'300px',
      justifyContent:'space-around',
      alignItems:'center'
  },
 
  link: {
    textDecoration: "none",
    color: "inherit",
    marginBottom: theme.spacing(1),
    "&:hover":{textDecoration:'underline'}
  },
  logo:{
      width:'60px'
  },
  copy:{
      fontSize:'10px',
      textAlign:'center'
  }

}));

const Footer = (props) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
          <Box className={classes.links}>
              <Link className={classes.link}>Home</Link>
              <Link className={classes.link}>Shop</Link>
              <Link className={classes.link}>About</Link>
          </Box>
          <img className={classes.logo} src={logo} alt='logo'/>
          <Typography className={classes.copy} variant='body1'>© Copyright by Emad Mhardawi. assignment for Chas Academy.</Typography>
    </div>
  );
};

export default Footer;


