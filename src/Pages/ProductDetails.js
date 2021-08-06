import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Divider, Grid, Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Rating from '@material-ui/lab/Rating';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import ProductReviews from "../Components/ProductReviews";
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
    objectFit:'cover',
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
    const classes=useStyles()
    
return(
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
          <img className={classes.img} src='https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png'/>
          </div>
        </Grid>


        <Grid className={classes.contentRight} sm={12} md={6}  item>
            <Typography className={classes.inStock}  component='h3'> IN STOCK</Typography>
            <Typography className={classes.productName} component='p'>SONY Gtl-750-S</Typography>
            <Rating value={4} readOnly size='medium'/>
            <Typography className={classes.price} component='p'>16.19 $</Typography>
            <Divider light={true} className={classes.divider}/>
            <Typography className={classes.title} variant='h5'>Description</Typography>
            <Typography className={classes.description}  variant='body1'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
               specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. 
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

<ProductReviews/>
    </Container>
)
}

export default ProductDetails

/*
  <img className={classes.img} src='https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png'/>

  */