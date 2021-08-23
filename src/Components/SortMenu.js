import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import { useDispatch } from "react-redux";
import {sortProducts} from '../redux-store/actions/productActions'


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	paper: {
		borderRadius:'4px'
	},
}));
  

export default function CustomizedMenus() {
	const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
	const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
	
	const handleClose = () => {
    setAnchorEl(null);
  };
	
	const sortHandler =(sort)=>{
		dispatch(sortProducts(sort))
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon/>}
      >
        Sort By
      </Button>

      <Menu
      classes={{paper:classes.paper}}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          getContentAnchorEl={null}
      >
         
        <MenuList>
        <MenuItem onClick={()=>{handleClose(); sortHandler()}}>Default Sorting</MenuItem>
        <MenuItem onClick={()=>{handleClose(); sortHandler('price')}}>price: Low to Hight</MenuItem>
        <MenuItem onClick={()=>{handleClose(); sortHandler('-price')}}>price: Hight to Low</MenuItem>
        </MenuList>
        
      </Menu>
  
    </div>
  );
}