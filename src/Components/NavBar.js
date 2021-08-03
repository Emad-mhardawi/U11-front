import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton  from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from '../Assets/Images/logo.svg'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import theme from "../UI/Theme";
import { Badge, Button, Tab, Tabs } from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,

  },
  toolbar:{
    justifyContent:'space-between',
    position:'relative',

  },
  logo:{
    maxWidth:'45px',
    [theme.breakpoints.down('xs')]:{
      position:'absolute',
      left:'50%',
      transform:'translateX(-50%)'

    }
  },
  tabs:{
    flexGrow:1,
   marginLeft:theme.spacing(4)
  },
  tab:{
    minWidth:'5px',
  },
  buttonsRight:{
    display:'flex',
    alignItems:'center'
  },
  accountButton:{
marginLeft:theme.spacing(1),
fontSize:'30px'
  },
  button:{
    marginLeft:theme.spacing(2)
  }
  
}));



const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesExtraSmall = useMediaQuery(theme.breakpoints.up('md'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className={classes.root}>
      <AppBar color='transparent' position='static'>
        <Toolbar  className={classes.toolbar}>
          {!matches && <IconButton edge='start'>
            <MenuIcon onClick={props.drawerOpenHandler}/>
          </IconButton>}
          <img className={classes.logo} src={logo}/>
          {matches ===true?  
          <Tabs className={classes.tabs} value={0}>
            <Tab className={classes.tab} label='Home' component={Link} to='/' />
            <Tab className={classes.tab} label='Shop' component={Link} to='/shop'/>
            <Tab className={classes.tab} label='About' component={Link} to='/about' />
            <Tab className={classes.tab} label='Contact Us' component={Link} to='/contact' />
          </Tabs> : null}
          <div className={classes.buttonsRight}>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon/>
            </Badge>
            {matchesExtraSmall===true ? <React.Fragment>
              <Button className={classes.button} variant='outlined' color='primary'>Log in</Button>
            <Button className={classes.button} variant='contained' color='primary'>Sign up</Button>
            </React.Fragment>
            :   <div>
      
      <IconButton edge='end' aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <AccountCircleIcon className={classes.accountButton} color='primary'/>
          </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
            }
            
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;


/*<IconButton edge='start'>
            <MenuIcon/>
          </IconButton>

          */