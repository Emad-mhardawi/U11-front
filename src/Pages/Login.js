import React, { useEffect} from "react";
import  Button  from "@material-ui/core/Button";
import Divider  from "@material-ui/core/Divider";
import  Typography  from "@material-ui/core/Typography";
import  TextField  from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link , useHistory} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Form from "../Components/Form";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {loginInputsValidation} from '../utils/validate';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux-store/actions/userActions";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    height: "94vh",
    position:'relative'
  },
 
  link: {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    marginBottom: theme.spacing(1),
    "&:hover":{textDecoration:'underline'}
  },


}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin= useSelector((state)=> state.userLogin);
  const {loading ,error, userInfo} = userLogin;

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

  let history = useHistory()
  useEffect(()=>userInfo ?history.push('/'): null )



  return (
    <div className={classes.root}>
      <Form form_title='Log in' desc='Log in to our platform' onSubmit={handleSubmit(submit)}>
      {loading  && <CircularProgress/>}
      {error && <Alert  severity="error" >{error} </Alert> }

      <TextField
        name="email"
        {...register("email")}
          size="medium"
          variant="outlined"
          fullWidth
          label="Email Address "
          error ={errors.email?.message? true : false}
          helperText={errors.email?.message}
          
        />
        <TextField
         name="password"
         {...register("password")}
          size="medium"
          variant="outlined"
          fullWidth
          label="Password "
          error ={errors.password?.message? true : false}
          helperText={errors.password?.message}
        />
        <Button type='submit' variant="contained" fullWidth color="primary" size="large">
          Log In
        </Button>
        <Alert className={classes.alert} severity="info">
          You can use <strong>admin@admin.com</strong> and password{" "}
          <strong>123321</strong>
        </Alert>
        
        <Divider className={classes.divider} variant="fullWidth" />

        <Typography
          className={classes.link}
          component={Link}
          variant="body2"
          to="/signup"
        >
          Create new account
        </Typography>
        <Typography className={classes.link} component={Link} to='/recover-password' variant="body2">
          Forgot password
        </Typography>
      </Form>
    </div>
  );
};

export default Login;


