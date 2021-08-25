import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Form from "../Components/Form";
import { yupResolver } from '@hookform/resolvers/yup';
import {ResetPasswordEmailValidation} from '../utils/validate';
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

const ResetPassword = (props) => {
  const classes = useStyles();
  const [message, setMessage]= useState('')
  const {register, handleSubmit, formState: { errors } } = useForm({
    mode:'onBlur',
    resolver:yupResolver(ResetPasswordEmailValidation)
  });

  const submit = async(data) => {
    const res = await axiosInstance.post(`/resetPassword${props.location.search}`, data)
    const message = await res.data.message;
    setMessage(message)
  
  };


  return (
    <div className={classes.root}>
      <Form
        form_title="Reset Password"
        desc="reset your password"
        onSubmit={handleSubmit(submit)}
      >
        {message && <Alert  severity="info" >{message} </Alert> }
        <TextField 
          variant="outlined"
         fullWidth label="New Password "
         {...register("password")}
          error ={errors.password?.message? true : false}
          helperText={errors.password?.message}
         />

        <TextField 
        variant="outlined" 
        fullWidth label="Confirm New Password "
        {...register("confirmPassword")}
          error ={errors.confirmPassword?.message? true : false}
          helperText={errors.confirmPassword?.message} 

        />
        <Button type='submit' variant="contained" color="primary" size="large" fullWidth>
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
