import React from "react";
import{Link} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Box } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import StoreIcon from '@material-ui/icons/Store';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux-store/actions/userActions";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  box:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'start',
    minHeight:'60px',
    padding:theme.spacing(2)
  },
  divider:{
    marginBottom:theme.spacing(2),
    marginTop:theme.spacing(2)
  },
  link:{
    textDecoration:'none',
    fontSize:'1rem',
    paddingBottom:'10px',
    color:theme.palette.primary.main
   
  }
}));

const SideDrawer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin= useSelector((state)=> state.userLogin);
  const { userInfo} = userLogin;

  return (
    <Drawer
      className={classes.root}
      onClose={props.drawerOpenHandler}
      open={props.drawerOpen}
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      {!userInfo ? 
      <Box className={classes.box}>
        <Link className={classes.link} to='/login' onClick={props.drawerOpenHandler}>Log in</Link>
        <Link className={classes.link} to ='/signup' onClick={props.drawerOpenHandler}>Sign up</Link>
      </Box>:
      <Box className={classes.box}>
        <Link className={classes.link} to='/profile' onClick={props.drawerOpenHandler}>profile</Link>
        <Link 
          className={classes.link} 
          onClick={()=>{props.drawerOpenHandler(); dispatch(logout())}}>Log out
        </Link>
    </Box>
      }
      <Divider className={classes.divider}/>
      <List component="nav">
        <ListItem button component={Link} to='/'  onClick={props.drawerOpenHandler}>
          <ListItemIcon>
            <HomeIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="Home" />
        </ListItem>

				<ListItem button component={Link} to='/shop'  onClick={props.drawerOpenHandler}>
					<ListItemIcon>
            <StoreIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="Shop" />
        </ListItem>

				<ListItem button component={Link} to='/about'  onClick={props.drawerOpenHandler}>
          <ListItemIcon>
            <InfoIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="About" />
        </ListItem>
				<ListItem button component={Link} to='/contact'  onClick={props.drawerOpenHandler}>
          <ListItemIcon>
            <ContactMailIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Drawer>
  );
};
export default SideDrawer;
