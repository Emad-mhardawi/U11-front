import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Rating from '@material-ui/lab/Rating';
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover':{
      transform:'scale(1.03)',
      transition: ` ${theme.transitions.easing.easeOut} 0.5s`
    },
    boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    
  },
  media: {
    minHeight: 200,
    [theme.breakpoints.down('xs')]:{
      minHeight: 300,
    }
  },
  actions:{
    display:'flex',
    justifyContent:'space-between',
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },

  typo:{
      marginBottom:0
  },
  
 
}));

const ProductCard = (props) => {
  const classes = useStyles();



  return (
    
    <Card className={classes.root}  >
      <CardActionArea
      disableTouchRipple
      disableRipple
      component={Link}
        to={`/products/${props.product._id}`} >
        <CardMedia
        className={classes.media}
        image={props.product.imageUrl}
        title="Contemplative Reptile"
        
        />
        <CardContent>
        <Typography className={classes.typo} gutterBottom variant="body1" component="h2">
        {props.product.productName}
        </Typography>
        <Rating name="read-only" size='small' value={props.product.rating} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        
        <Typography variant='h6'>{props.product.price} $</Typography>
        <IconButton  onClick={props.addtocart}>
          <AddShoppingCartOutlinedIcon color='primary' />
        </IconButton>
      </CardActions>
    </Card>
    
  );
};

export default ProductCard;
