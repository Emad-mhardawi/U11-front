import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import logo from '../Assets/Images/logo.svg'
import IconButton  from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Badge, Box, Button, Container, Hidden, Tab, Tabs } from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux-store/actions/userActions";

const useStyles = makeStyles((theme) => ({
  root:{
    boxShadow:'none'
  },
 container:{
   padding:0,
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   paddingBottom:theme.spacing(1),
   paddingTop:theme.spacing(1)
  },
  logoBox:{
    
    minWidth:'100px',
    ...theme.mixins.toolbar,
    position:'relative',
    objectFit:'cover'
  },
  logo:{
    width:'100%',
    height:'100%',
    position:'absolute',
  },
  navRight:{
    '& > *':{marginLeft: theme.spacing(2)}
  },
  button:{
    borderRadius:0,
  },
  tab:{
    minWidth:'5px'
  }

}));



const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesExtraSmall = useMediaQuery(theme.breakpoints.up('md'));

  const dispatch = useDispatch();
  const userLogin= useSelector((state)=> state.userLogin);
  const {userInfo} = userLogin;
  const cart= useSelector((state)=> state.cart);
  const {cartProducts} = cart;

  

  return(
    <div className={classes.root}>
      <AppBar color='transparent' position='static' className={classes.root}>
        <Toolbar className={classes.toolbar}>
        <Container className={classes.container}>
          {!matchesExtraSmall && <IconButton value='text' edge='start' onClick={props.drawerOpenHandler}>
            <MenuIcon />
          </IconButton>}
          <Hidden smDown>
          <Box className={classes.logoBox}>
            <img className={classes.logo}  src={logo} alt='company logo' />
          </Box>
          </Hidden>
          {matchesExtraSmall &&
          <Tabs indicatorColor="primary"  value={props.tabValue} onChange={props.handleTabValueChange}>
            <Tab className={classes.tab} label='Home' component={Link} to='/' />
            <Tab className={classes.tab} label='Shop' component={Link} to='/shop'/>
            <Tab className={classes.tab} label='About' component={Link} to='/about' />
          </Tabs>
          }
          <Box className={classes.navRight}>
            <Badge badgeContent={cartProducts.length}  color="primary" component={Link} to='/cart'>
              <ShoppingCartOutlinedIcon style={{color:'inherit'}}/>
            </Badge>
            <Hidden xsDown>
              {!userInfo? 
            <Button
              className={classes.button}
              color='primary'  
              variant='contained' 
              disableElevation
              component={Link}
              to='/login'
              >
                Log in
              </Button>
              :
              <Button
              className={classes.button}
              color='primary'  
              variant='contained' 
              disableElevation
              component={Link}
              to='/profile/general'
              >
                PROFILE
              </Button>
            }

            {!userInfo? 
            <Button
              className={classes.button} 
              color='primary' 
              variant='outlined'
              component={Link}
              to='/signup'
              >
                Sign up
              </Button>
              : 
              <Button
              className={classes.button} 
              color='primary' 
              variant='outlined'
              onClick={()=>dispatch(logout())}
              >
                log out
              </Button>
              }
            </Hidden>
          </Box>
        </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
