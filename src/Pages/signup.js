import React, {useEffect} from "react";
import { Redirect, useHistory } from "react-router";
import  Button  from "@material-ui/core/Button";
import Divider  from "@material-ui/core/Divider";
import  Typography  from "@material-ui/core/Typography";
import  TextField  from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Form from "../Components/Form";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel } from "@material-ui/core";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {signupInputsValidation} from '../utils/validate';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux-store/actions/userActions";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    height: "94vh",
  },
 
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    marginBottom: theme.spacing(1),
    "&:hover":{textDecoration:'underline'}
  },
}));

const Signup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const  userSignup = useSelector((state)=>state.userSignup)
  let {loading, userInfo, error} = userSignup;


// functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(signupInputsValidation)
  });

    /// when form is submitted inputs values will be sent
  /// to a redux and dispatch an action to handle the login request
  const submit = (data) => {
    dispatch(signup(data.email, data.password, data.confirmPassword ))
  };
  return (
    <div className={classes.root}>
      <Form onSubmit={handleSubmit(submit)} form_title='Register' desc='Register new account in our platform'>
      {error && <Alert  severity="error" >{error} </Alert> }
        <TextField
          size="medium"
          variant="outlined"
          fullWidth
          label="Email Address "
          name="email"
        {...register("email")}
            error ={errors.email?.message? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          size="medium"
          variant="outlined"
          fullWidth
          label="Password "
          name="password"
         {...register("password")}
         error ={errors.password?.message? true : false}
          helperText={errors.password?.message}
        />
        <TextField
          size="medium"
          variant="outlined"
          fullWidth
          label="Confirm password"
          name="confirmPassword"
         {...register("confirmPassword")}
         error ={errors.confirmPassword?.message? true : false}
          helperText={errors.confirmPassword?.message}
        />
        <Button type='submit' variant="contained" fullWidth color="primary" size="large">
          Sign up
        </Button>
        <FormControlLabel
        control={<Checkbox color='primary' />}
        label={<Typography>I have read the <strong>Terms and Conditions</strong> </Typography>}
        />

      
        <Divider className={classes.divider} variant="fullWidth" />

        <Typography
          className={classes.link}
          component={Link}
          variant="body2"
          to="/login"
        >
          Have an account
        </Typography>
      </Form>
    </div>
  );
};

export default Signup;


