import React, { useState }  from "react";
import  Button  from "@material-ui/core/Button";
import Divider  from "@material-ui/core/Divider";
import  Typography  from "@material-ui/core/Typography";
import  TextField  from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {reviewFormValidation} from '../utils/validate';
import Rating from "@material-ui/lab/Rating";
import axiosInstance from "../helpers/axios";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    padding:theme.spacing(4),
    borderRadius:theme.shape.borderRadius
  },
 
  addStars:{
      display: 'flex',
      marginBottom:theme.spacing(4)
  },

  texField:{
      paddingBottom:theme.spacing(4)
  },
  buttons:{
      display:'flex',
      justifyContent:'flex-end'
  },
  button:{
      marginLeft:theme.spacing(2)
  },
  divider:{
    marginTop:theme.spacing(4),
    marginBottom:theme.spacing(4)
}

}));

const ReviewForm = (props) => {
  const classes = useStyles();
  const [newReview, setNewReview] = useState({loading:false,status:'', message:''})


   // functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(reviewFormValidation)
  });

  console.log(errors)
    /// when form is submitted inputs values will be sent
  /// to a redux and dispatch an action to handle the login request
  const submit = async (data) => {
    setNewReview({loading:true,status:'', message:''})
    try{
      const res = await axiosInstance.post('/add-product-review',{
        email:data.email,
        name:data.name,
        comment:data.comment,
        starsCount:data.starsCount,
        productId: props.productId
      });
      const responseData = await res.data
      setNewReview({loading:false,status:'success', message:responseData.message})
    }catch(err){
      setNewReview({loading:false, status:'fail', message:err.message})
    }
  
  };

  

 

  


  return (
      <div>
    <form className={classes.root} onSubmit={handleSubmit(submit)}>
          {newReview.status==='success' && <Alert  severity="success" >{newReview.message} </Alert> }
					{newReview.status==='fail' && <Alert  severity="error" >{newReview.message} </Alert> }
          {newReview.loading && <CircularProgress/>}
        <Typography variant='h5'>Add Review</Typography>
        <div className={classes.addStars}>
            <Typography variant='body1'>Your review about this product:</Typography>
            <Rating
            name="starsCount"
            {...register("starsCount")}
            helperText={errors.comment?.message}
            />
            {errors.starsCount && <Typography color='error'>{ errors.starsCount.message}</Typography>}
        </div>
        
          <TextField
          className={classes.texField}
          required
          size="medium"
          variant="outlined"
          fullWidth
          label="Comment"
          multiline
          rows={4}
          name="comment"
          {...register("comment")}
          error ={errors.comment?.message? true : false}
          />
             <TextField
             className={classes.texField}
             required
          size="medium"
          variant="outlined"
          fullWidth
          label="Name"
          name="name"
          {...register("name")}
          error ={errors.name?.message? true : false}
           helperText={errors.name?.message}
          
          />

<TextField
className={classes.texField}
          required
      
          variant="outlined"
          fullWidth
          label="Email Address"
          name="email"
          {...register("email")}
          error ={errors.email?.message? true : false}
           helperText={errors.email?.message}
          
          />
          <div className={classes.buttons}>
          <Button onClick={props.HideReviewForm}
            className={classes.button} 
            variant='contained' 
            color='secondary'>
              Cancel
            </Button>

          <Button 
            type='submit' 
            className={classes.button}  
            variant='contained' 
            color='primary'>
              Post Review
          </Button>
          </div>
    </form>
    <Divider className={classes.divider}/>
    </div>
  );
};

export default ReviewForm;


