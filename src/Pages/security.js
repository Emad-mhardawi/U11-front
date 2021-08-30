import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, CircularProgress, Paper, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordValidation } from "../utils/validate";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axios";
import Alert from "@material-ui/lab/Alert";



//// add style to the page using material ui
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    boxShadow:"rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
    position:'relative'
  },
  button: {
    width: "9rem",
  },
  field:{
    marginBottom:theme.spacing(2)
  },
  alert:{
    marginBottom:theme.spacing(2)
  },
  spinner:{
    position:'absolute',
    left:'50%',
    top:'50%',
    zIndex:10
  }
  
}));


const Security = () => {
  const classes = useStyles();
  const userLogin= useSelector((state)=> state.userLogin);
	const {userInfo} = userLogin;
	const [updateProfile, setUpdateProfile]= useState({loading:false, status:'', message:''});


  // functions that come with react form hook
  // to handle input fields and form submission
  const {register,handleSubmit,formState: { errors }} = useForm({
    mode: "onBlur",
    resolver: yupResolver(changePasswordValidation),
  });

  /// handle submit
  const submit = async (data) => {
    setUpdateProfile({loading:true,status:'', message:''});
    try{
      const response = await axiosInstance.put('/updateUserProfile', data, {
        headers:{token:'Bearer '+userInfo.token  }
    });
    const receivedData = await response.data;
    if (receivedData.email) {
      setUpdateProfile({loading:false, status:'success', message:'your profile has been updated'});
    }
  
  }catch(err){
    setUpdateProfile({loading:false,status:'fail', message:err.message})
  }
  
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit(submit)} >
          {updateProfile.loading && <CircularProgress className={classes.spinner}  color="primary" />}
          {updateProfile.status==='success' && <Alert className={classes.alert} severity="success">{updateProfile.message} </Alert> }
					{updateProfile.status==='fail' && <Alert className={classes.alert}  severity="error" >{updateProfile.message} </Alert> }
        <TextField
          className={classes.field}
          size="medium"
          variant="outlined"
          fullWidth
          label="New Password"
          helperText={errors.newPassword?.message}
          {...register("newPassword")}
          error={errors.newPassword?.message ? true : false}
        />
        <TextField
          className={classes.field}
          size="medium"
          variant="outlined"
          fullWidth
          label="Confirm new Password"
          helperText={errors.confirmNewPassword?.message}
          {...register("confirmNewPassword")}
          error={errors.confirmNewPassword?.message ? true : false}
        />
        <Box style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button className={classes.button} type='submit' variant='contained' size='large' color='primary'>
            Save
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Security;
