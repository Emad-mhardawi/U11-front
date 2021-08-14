import React, { useEffect } from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getRecentProducts } from "../redux-store/actions/productActions";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import CustomerSupportCard from "../Components/CustomerSupportCard";
import { addToCart } from "../redux-store/actions/cartActions";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  recent: {
    textAlign: "center",
    marginTop: "4rem",
    marginBottom: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  divider: {
    width: "10rem",
    height: "3px",
    background: theme.palette.primary.main,
    margin: theme.spacing(1),
  },
}));

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fetchRecentProducts = useSelector((state) => state.fetchRecentProducts);
  const { loading, error, recentProducts } = fetchRecentProducts;

  useEffect(() => {
    dispatch(getRecentProducts());
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
    <div>
      <Header />

      <Container className={classes.container}>
        <CustomerSupportCard />
        <div className={classes.recent}>
          <Typography variant="h4">Most Recent Products</Typography>
          <Divider className={classes.divider} variant="middle" />
          <Typography variant="body1">
            Instant Delivery Digital Goods Purchased on Online Stores Try
            Automater.
          </Typography>
        </div>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          {recentProducts.map((product) => (
            <Grid key={product._id} item md={3} sm={4} xs={12}>
              <ProductCard
                product= {product}
                addtocart={()=>addToCartHandler(product)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
