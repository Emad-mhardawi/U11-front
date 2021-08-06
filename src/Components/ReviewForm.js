import React, {useState} from "react";
import  Button  from "@material-ui/core/Button";
import Divider  from "@material-ui/core/Divider";
import  Typography  from "@material-ui/core/Typography";
import  TextField  from "@material-ui/core/TextField";
import { darken, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Form from "../Components/Form";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginInputsValidation} from '../utils/validate';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux-store/actions/userActions";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    padding:theme.spacing(4),
    borderRadius:theme.shape.borderRadius
  },
 
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    marginBottom: theme.spacing(1),
    "&:hover":{textDecoration:'underline'}
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
  const dispatch = useDispatch();
  const userLogin= useSelector((state)=> state.userLogin);
  const {loading, error, userInfo} = userLogin;

   // functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(loginInputsValidation)
  });

    /// when form is submitted inputs values will be sent
  /// to a redux and dispatch an action to handle the login request
  const submit = (data) => {
    dispatch(login(data.email, data.password));
    
  };


  


  return (
      <div>
    <form className={classes.root}>
        <Typography variant='h5'>Add Review</Typography>
        <div className={classes.addStars}>
            <Typography variant='body1'>Your review about this product:</Typography>
            <Rating/>
        </div>
          <TextField
          className={classes.texField}
          required
          size="medium"
          variant="outlined"
          fullWidth
          label="Email Address"
          multiline
          rows={4}
          />
             <TextField
             className={classes.texField}
             required
          size="medium"
          variant="outlined"
          fullWidth
          label="Name"
          
          />

<TextField
className={classes.texField}
          required
      
          variant="outlined"
          fullWidth
          label="Email Address"
          
          />
          <div className={classes.buttons}>
          <Button onClick={props.HideReviewForm}  className={classes.button} variant='contained' color='secondary'>Cancel</Button>
          <Button className={classes.button}  variant='contained' color='primary'>Post Review</Button>
          </div>
    </form>
    <Divider className={classes.divider}/>
    </div>
  );
};

export default ReviewForm;


