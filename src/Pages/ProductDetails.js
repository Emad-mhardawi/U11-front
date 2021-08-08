import React, {useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Rating from '@material-ui/lab/Rating';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import ProductReviews from "../Components/ProductReviews";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux-store/actions/productActions";
const useStyles = makeStyles((theme) => ({
    container:{
        marginTop:theme.spacing(4),
        
    },
    title:{
        fontWeight:'bold'
    },
    paper:{
        padding: theme.spacing(2),
        marginTop:theme.spacing(2),
        boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    },
    contentLeft:{
        
    },
    contentRight:{
        
    },
    inStock:{
        fontSize:'1rem',
        background:theme.palette.common.lightGreen,
        maxWidth:'6rem',
        textAlign:'center',
        borderRadius:'50px',
        fontWeight:'700',
        color:theme.palette.common.darkGreen,
        marginBottom:theme.spacing(2)
},
productName:{
fontSize:'20px',
fontWeight:'bold',
marginBottom:theme.spacing(1)
},

price:{
fontSize:'2rem',
fontWeight:'bold',
marginTop:theme.spacing(2)
},
divider:{
    marginTop: theme.spacing(2),
    marginBottom:theme.spacing(2)
},
description:{
    color:theme.palette.common.mediumGrey
},
button:{
    marginTop:theme.spacing(2),
    marginBottom:theme.spacing(2)
},
imgContainer:{
    width:'100%',
    height:'100%',
    position:'relative',
},
img:{
   
    position:'absolute',
    width:'100%',
    height:'100%',
    objectFit:'contain',
    paddingRight:theme.spacing(3),
    [theme.breakpoints.down('sm')]:{
        position:'static',
        paddingRight:0,
    }
},
link:{
    textDecoration:'none',
    color:theme.palette.common.mediumGrey
}
  }));

const ProductDetails = (props)=>{
    const classes=useStyles();
    const dispatch = useDispatch();
  const fetchProduct= useSelector((state)=> state.getProduct);
  const {loading, error, product} = fetchProduct;
    

  
    

    const productId = props.match.params.id
    useEffect(()=>{
      dispatch(getProduct(productId))
    },[])

return(
    <React.Fragment>
        {product.product !== undefined? 
    <Container maxWidth='lg' className={classes.container}>
    <Typography className={classes.title} variant='h5'>Product Details</Typography>
    <Breadcrumbs aria-label="breadcrumb">
      <Typography className={classes.link} component={Link} to='/'>Home</Typography>
      <Typography className={classes.link} component={Link} to='/shop'>Shop</Typography>
      <Typography color='textPrimary'>Product Detail</Typography>
    </Breadcrumbs>

<Paper className={classes.paper} elevation={2}>
    <Grid container  spacing={2}>
        <Grid className={classes.contentLeft} xs={12} sm={12} md={6}  item>
          <div className={classes.imgContainer}>
          <img className={classes.img} src={product.product.imageUrl}/>
          </div>
        </Grid>


        <Grid className={classes.contentRight} sm={12} md={6}  item>
            <Typography className={classes.inStock}  component='h3'> IN STOCK</Typography>
            <Typography className={classes.productName} component='p'>{product.product.productName}</Typography>
            <Rating value={product.averageStarCount} readOnly size='medium'/>
            <Typography className={classes.price} component='p'>{product.product.price} $</Typography>
            <Divider light={true} className={classes.divider}/>
            <Typography className={classes.title} variant='h5'>Description</Typography>
            <Typography className={classes.description}  variant='body1'>
            {product.product.description}
            </Typography>
            <Divider light={true} className={classes.divider}/>
            <Button
            className={classes.button}
            variant='contained'
            color='primary'
            size='large'
            startIcon={<AddShoppingCartOutlinedIcon/>}>
                Add to Cart
            </Button>
        </Grid>
    </Grid>
</Paper>

<ProductReviews productDetails={product}/>
    </Container>
    : <p>page not found</p>}
    </React.Fragment>
)
}

export default ProductDetails

/*
  <img className={classes.img} src='https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png'/>

  */