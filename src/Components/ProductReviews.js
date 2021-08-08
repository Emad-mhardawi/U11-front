import React, {useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { Button, Divider, Grid } from "@material-ui/core";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    paper:{
        marginTop:theme.spacing(4),
        boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        
    },
    tab:{
        minWidth:'10px',
    },
    tabs:{
        background:theme.palette.common.lightGrey,
        borderRadius:theme.shape.borderRadius,
        paddingLeft:theme.spacing(1)
    },
    averageRating:{
        textAlign:'center',
        padding:theme.spacing(2),
        
        marginTop:0
    },
    writeReview:{
        position:'relative'
    },
    button:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        
        
    },
    middle:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'column',

        
       
    },
    barContainer:{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center'
        
    },
    bar:{
        flexGrow:1,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
        
    },
    divider:{
        marginTop:theme.spacing(4),
        marginBottom:theme.spacing(4)
    },
    pagination:{
        display:'flex',
        justifyContent:'center',
        margin:theme.spacing(4)
    }
   
  }));




  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  



const ProductReviews = (props)=>{
    const classes=useStyles();
  

    const [value, setValue] = React.useState(0);
    const [showReviewForm, setShowReviewForm]= React.useState(false);

    const HideReviewForm = ()=>{
        setShowReviewForm(false)
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    console.log(props.productDetails)
    
    return(

        <Paper className={classes.paper}>
    <Tabs className={classes.tabs} onChange={handleChange}> 
        <Tab className={classes.tab} label={`Review (${props.productDetails.all_reviews_count})`} />
        <Tab className={classes.tab} label="Description" />
    </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container justifyContent='center' spacing={4}>
            <Grid item xs='12' md='4' className={classes.averageRating}>
                <Typography variant='h6'>Average rating</Typography>
                <Typography color='secondary' variant='h3'>{props.productDetails.averageStarCount}/5</Typography>
                <Rating size='large' readOnly value={+props.productDetails.averageStarCount}/>
                <Typography>{props.productDetails.all_reviews_count} review(s)</Typography>
            </Grid>
            <Grid item xs='12' md='4' className={classes.middle}>
                <div className={classes.barContainer}>
                    <Typography variant='body1'> 5 stars</Typography>
                    <LinearProgress
                      className={classes.bar}
                      variant='determinate'
                      value ={props.productDetails.fiveStarCount * 100 / props.productDetails.all_reviews_count }/>
                    <Typography variant='body1'> {props.productDetails.fiveStarCount}</Typography>
                </div>
                <div className={classes.barContainer}>
                    <Typography variant='body1'> 4 stars</Typography>
                    <LinearProgress
                      className={classes.bar}
                      variant='determinate'
                      value ={props.productDetails.fourStarCount * 100 / props.productDetails.all_reviews_count }/>
                    <Typography variant='body1'> {props.productDetails.fourStarCount}</Typography>
                </div>
                <div className={classes.barContainer}>
                    <Typography variant='body1'> 3 stars</Typography>
                    <LinearProgress 
                      className={classes.bar}
                      variant='determinate'
                      value ={props.productDetails.threeStarCount * 100 / props.productDetails.all_reviews_count }/>
                    <Typography variant='body1'> {props.productDetails.threeStarCount}</Typography>
                </div>
                <div className={classes.barContainer}>
                    <Typography variant='body1'> 2 stars</Typography>
                    <LinearProgress 
                      className={classes.bar}
                      variant='determinate'
                      value ={props.productDetails.twoStarCount * 100 / props.productDetails.all_reviews_count }/>
                    <Typography variant='body1'>{props.productDetails.twoStarCount}</Typography>
                </div>
                <div className={classes.barContainer}>
                    <Typography variant='body1'> 1 stars</Typography>
                    <LinearProgress
                      className={classes.bar}
                      variant='determinate'
                      value ={props.productDetails.oneStarCount * 100 / props.productDetails.all_reviews_count }/>
                    <Typography variant='body1'> {props.productDetails.oneStarCount}</Typography>
                </div>

            </Grid>
            <Grid className={classes.writeReview}  item xs='12' md='4'>
                <Button
                className={classes.button}
                variant='outlined'
                color='primary'
                size='large'
                startIcon={<BorderColorOutlinedIcon/>}
                onClick={()=>setShowReviewForm(true)}
                >
                    Write Review
                </Button>
            </Grid>
            
        </Grid>
        <Divider className={classes.divider}/>
        {showReviewForm && <ReviewForm HideReviewForm={HideReviewForm}/>}
        
        {props.productDetails.reviews.map((review)=>(
          <Review review={review}/>
        ))}
        

<div className={classes.pagination}>
<Pagination  count={10} color="primary" />
</div>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Typography>emad</Typography>
       <Typography>emad</Typography>
       <Typography>emad</Typography>
       <Typography>sara</Typography>
      </TabPanel>
      
      
</Paper>
    )
}

export default ProductReviews;
