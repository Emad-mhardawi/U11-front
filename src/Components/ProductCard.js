import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActionArea from "@material-ui/core/CardActionArea";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:'250px',
    '&:hover':{
      transform:'scale(1.03)',
      transition: ` ${theme.transitions.easing.easeOut} 0.5s`
    },
    boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    
  },
  media: {
    height: 200,
    
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
    
    <Card className={classes.root} {...props} >
      <CardActionArea disableTouchRipple disableRipple >
        <CardMedia
        className={classes.media}
        image={props.image}
        title="Contemplative Reptile"
        />
        <CardContent>
        <Typography className={classes.typo} gutterBottom variant="body1" component="h2">
        {props.productName}
        </Typography>
        <Rating name="read-only" size='small' value={props.rating} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        
        <Typography variant='h6'>{props.price} $</Typography>
        <IconButton >
          <AddShoppingCartOutlinedIcon color='primary'/>
        </IconButton>
      </CardActions>
    </Card>
    
  );
};

export default ProductCard;
