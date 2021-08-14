import {
  Breadcrumbs,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getProducts } from "../redux-store/actions/productActions";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { addToCart } from "../redux-store/actions/cartActions";
import ProductFilterBar from "../Components/ProductsFilterBar";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
  },

  container: {
    paddingTop: "100px",
  },
  loader: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Shop = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchProducts = useSelector((state) => state.fetchProducts);
  const { loading, error, products } = fetchProducts;
  useEffect(() => {
    dispatch(getProducts());
  }, []);


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

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
      <Typography variant='h4'>Shop</Typography>
        <ProductFilterBar/>
        
        {loading && <CircularProgress className={classes.loader} size={60} />}

        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {products.map((product) => (
            <Grid key={product._id} item item md={3} sm={4} xs={12}>
              <ProductCard product={product} addtocart={()=>addToCartHandler(product)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Shop;
