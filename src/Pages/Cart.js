import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Container,Typography, Breadcrumbs,Grid,Paper,Button,Divider,} from "@material-ui/core";
import { Link } from "react-router-dom";
import emptyCartImage from "../Assets/Images/emptyCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseProductQuantity, decreaseProductQuantity  } from "../redux-store/actions/cartActions";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CartProductsTable from "../Components/CartProductsTable";
import axiosInstance from "../helpers/axios";
import { loadStripe } from "@stripe/stripe-js";
import Alert from "@material-ui/lab/Alert";
const stripePromise = loadStripe(
  "pk_test_51JOcsfEiDIx0tzNMS76BDOiOUJmprlWpHu0EvbHy6tS8r7wovpY28RUTerIuneJxjeCGLC1EWjarpU35Oeva9UNo003sPPt1Wp"
);

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    paddingTop: theme.spacing(4),
    minHeight:'95vh'
  },
  title: {
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.mediumGrey,
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    boxShadow:"rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  subTotal:{
    fontSize:'1rem',
    color: theme.palette.common.mediumGrey
  },
  subTotalPrice:{
    fontWeight:'700'
  },
  divider:{
    marginTop: theme.spacing(4),
  },
  emptyCart: {
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImageBox: {
    width: "100%",
    height: "60%",
    position: "relative",
    objectFit: "cover",
    marginBottom: theme.spacing(2),
  },
  emptyCartImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  button:{
    marginTop:theme.spacing(2),
    border:'none',
    color:theme.palette.primary.main
  }
}));

const Cart = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  /// get cart state from redux store
  const cart = useSelector((state) => state.cart);
  const { cartProducts, totalPrice } = cart;

  //// remove item from cart
  const removeFromCartHandler =(id)=>{
    dispatch(removeFromCart(id))
  }

  /// increase product quantity 
  const increaseQuantityHandler =(id)=>{
    dispatch(increaseProductQuantity(id))
  }
  /// decrease product quantity 
  const decreaseQuantityHandler =(id)=>{
    dispatch(decreaseProductQuantity(id))
  }


const checkOut =async()=>{
  const checkoutSession = await axiosInstance.post('/create-checkout-session', {cartProducts:cartProducts })
  const sessionId = await checkoutSession.data.session_id
  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    sessionId: sessionId,
  });
}

  return (
  <div className={classes.root}>
    <Container className={classes.container} maxWidth="lg">
      <Typography className={classes.title} variant="h5">
        Shopping Cart
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
        <Typography className={classes.link} component={Link} to="/">
            Home
        </Typography>
        <Typography className={classes.link} component={Link} to="/shop">
            Shop
        </Typography>
        <Typography color="textPrimary">
          Shopping Cart
        </Typography>
      </Breadcrumbs>

      <Grid  container spacing={2}>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper}>
            <Typography>
              <strong>Cart</strong>(5 item)
            </Typography>

            {cartProducts.length > 0 ? (
            <CartProductsTable
              cartProducts = {cartProducts}
              increaseQty={increaseQuantityHandler}
              decreaseQty={decreaseQuantityHandler}
              removeFromCart={removeFromCartHandler}
              />)
              : 
          (<div className={classes.emptyCart}>
              <div className={classes.emptyCartImageBox}>
                <img alt='empty shopping cart' className={classes.emptyCartImage} src={emptyCartImage}/>
              </div>
              <Typography variant="h5">Cart is empty</Typography>
           </div>
              )}
        </Paper>
        
        <Button
          
          color="primary"
          className={classes.button}
          component={Link}
          to='/'
        startIcon={<ArrowBackIosIcon />}
        >
        Continue Shopping
      </Button>

      </Grid>
      
      
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Order Summary</Typography>
          <div className={classes.total}>
            <Typography className={classes.subTotal} variant="body2">Sub Total</Typography>
            <Typography className={classes.subTotalPrice} variant="body1">{totalPrice}</Typography>
          </div>

          <div >
            <Typography className={classes.subTotal} variant="body2">Discount</Typography>
            <Alert className={classes.alert} severity="info">
              use this test promotion code <strong>chas2019</strong> in the next step
            </Alert>
          </div>
          
          <Divider className={classes.divider}/>
          
          <div className={classes.total}>
            <Typography className={classes.subTotal} variant="body2"> Total price</Typography>
            <Typography color='secondary' className={classes.subTotalPrice} variant="body1">${totalPrice}</Typography>
          </div>

          <Button onClick={checkOut} size="large" variant="contained" color="primary" fullWidth>
            Check out
          </Button>
          
        </Paper>
      </Grid>
    </Grid>
  </Container>
    </div>
  );
};

export default Cart;
