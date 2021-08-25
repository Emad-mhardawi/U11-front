import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Form from "../Components/Form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ForgotPasswordEmailValidation} from '../utils/validate';
import {useForm} from 'react-hook-form';
import axiosInstance from "../helpers/axios";
import Alert from "@material-ui/lab/Alert";


const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    height: "94vh",
    position: "relative",
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();
  const [sendResetEmail, setSendResetEmail]= useState({status:'', message:''})
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(ForgotPasswordEmailValidation)
  });

  const submit =async(data) => {
    const response= await  axiosInstance.post('/forgotPassword', {email:data.email});
    const {status, message} = await  response.data;
    setSendResetEmail({
      status:status,
      message:message
    })
    
    
  };


  return (
    <div className={classes.root}>
      <Form
        onSubmit={handleSubmit(submit)}
        form_title="Password Recovery"
        desc="Tell us your email so we can send you a reset link"
      >
        {sendResetEmail.status!=='success' && sendResetEmail.message?  <Alert  severity="error" >{sendResetEmail.message} </Alert>: null }
        {sendResetEmail.status ==='success' && sendResetEmail.message?  <Alert  severity="success" >{sendResetEmail.message} </Alert>: null }
        <TextField
          variant="outlined" 
          fullWidth label="Email Address"
          {...register("email")}
          error ={errors.email?.message? true : false}
          helperText={errors.email?.message}
        />
        <Button type='submit' variant="contained" color="primary" size="large" fullWidth>
          Recover Password
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
