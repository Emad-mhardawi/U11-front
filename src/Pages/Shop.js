import { Container, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import {getProducts} from '../redux-store/actions/productActions'
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  root:{
    background: theme.palette.common.lightGrey,
  },
  
    container: {
    paddingTop: "100px",
    
  },
  loader:{
      position:'absolute',
      left:'50%',
      top:'50%',
      
      
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Shop = ()=>{
    const classes=useStyles()
    const dispatch = useDispatch();
    const fetchProducts = useSelector((state)=>state.fetchProducts)
    const {loading,error,products } = fetchProducts
    useEffect(()=>{
        dispatch(getProducts())
    },[])

   

    return(
        <div className={classes.root}>
    <Container  className={classes.container} >
    {loading && <CircularProgress  className={classes.loader}  size={60} />}


      
    <Grid container spacing={6}  justifyContent='center' alignItems='center'>
        {products.map((product)=>(
   <Grid item sm={6} md={4} xs={12} lg={3} >
 <ProductCard
 component={Link}
 to='/kk'
    productName={product.productName}
    image={product.imageUrl}
    description={product.description}
    rating={product.rating}
    price={product.price}
    />
   </Grid>
))}
            </Grid>
        </Container>
        </div>
    )
}

export default Shop;


/*
{products.map((product)=>(
    <ProductCard
    productName={product.productName}
    image={product.imageUrl}
    description={product.description}
    rating={product.rating}
    price={product.price}
    />
))}

*/