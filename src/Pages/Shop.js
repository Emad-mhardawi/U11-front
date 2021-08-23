import {Box, Container, Grid,Typography} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../redux-store/actions/productActions";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { addToCart } from "../redux-store/actions/cartActions";
import ProductFilterBar from "../Components/ProductsFilterBar";
import FiltersDrawer from "../Components/FiltersDrawer";
import PaginationComponent from "../Components/Pagination";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "50px",
  },
  loader: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  header:{
    height:'30vh',
    background:theme.palette.primary.main,
    position:'relative'
},

  headerTitle:{
    color:'white',
    fontSize:'4rem',
    position:'absolute',
    top:'50%',
    left: '50%',
    transform:'translate(-50%, -50%)',
    textAlign:'center'
},
  pagination:{
    display:'flex',
    justifyContent:'center',
    marginTop:theme.spacing(4)
  }
}));


const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchProducts = useSelector((state) => state.fetchProducts);
  const { loading, error, products, pagesCount } = fetchProducts;
  const [filtersDrawerOpen, setFiltersDrawerOpen ] = useState(false);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  //// open filters drawer
  const filtersOpenHandler =()=> setFiltersDrawerOpen(!filtersDrawerOpen)

  /// add product to cart by passing the product object and dispatch a redux action
  const addToCartHandler = (product)=>{
    const productToCart = {
      id:product._id,
      productName:product.productName,
      imageUrl:product.imageUrl,
      price: product.price,
      qty: 1,}

    dispatch(addToCart(productToCart))
  }


  const changePage = (pageNumber)=>{
    dispatch(getProducts(pageNumber));
  }

  return (
    <div className={classes.root}>
      <Box className={classes.header}>
        <Typography className={classes.headerTitle}>Shop</Typography>
      </Box>
      <Container className={classes.container}>
        <ProductFilterBar  openFiltersHandler ={filtersOpenHandler}/>
        
        {loading && <CircularProgress className={classes.loader} size={60} />}
        {products.length!==0 ? 
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {products.map((product) => (
            <Grid key={product._id} item item md={3} sm={4} xs={12}>
              <ProductCard product={product} addtocart={()=>addToCartHandler(product)} />
            </Grid>
          ))}
        </Grid> : 
        <Typography style={{textAlign:'center'}}  variant='h3'>No products found</Typography>
        }
        <FiltersDrawer open={filtersDrawerOpen} handleOpen={filtersOpenHandler}/>
        {products.length!==0 ?
        <Box className={classes.pagination}>
          <PaginationComponent 
          className={classes.pagination} 
          pagesCount={pagesCount} 
          changePageHandler={changePage}
          />
        </Box>: null}
       
      </Container>
      
    </div>
  );
};

export default Shop;
