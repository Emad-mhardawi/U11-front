import React, { useEffect } from "react";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getRecentProducts } from "../redux-store/actions/productActions";
import {Link} from 'react-router-dom'
import ProductCard from "../Components/ProductCard";
const useStyles = makeStyles((theme) => ({
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
  return (
    <div>
      <Header />
      <div className={classes.recent}>
        <Typography variant="h4">Most Recent Products</Typography>
        <Divider className={classes.divider} variant="middle" />
        <Typography variant="body1">
          Instant Delivery Digital Goods Purchased on Online Stores Try
          Automater.
        </Typography>
      </div>
      <Container >
          <Grid container="md" justifyContent='center' alignItems='center' spacing={4}>
            {recentProducts.map((product) => (
              <Grid item md={3} sm={4} xs={12} >
                <Link to={`/products/${product._id}`}>
                <ProductCard
                  productName={product.productName}
                  image={product.imageUrl}
                  description={product.description}
                  rating={product.rating}
                  price={product.price}
                />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
};

export default Home;
