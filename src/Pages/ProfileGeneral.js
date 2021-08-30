import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, CircularProgress, Grid, Paper } from "@material-ui/core";
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {updateProfileEmailValidation} from '../utils/validate';
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axios";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";

/// styling the page material ui
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
    position: "relative",
    minHeight: "350px",
  },
  divider: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  button: {
    width: "9rem",
  },
	avatarBox: {
    background: "white",
    padding: "5px",
    borderRadius: "1000px",
    position: "absolute",
    top: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  avatar: {
    width: "8rem",
    height: "8rem",
    padding: "2px",
  },
  infoBox: {
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
  },
  spinner:{
    position:'absolute',
    left:'50%',
    top:'50%',
    zIndex:10
  }
}));



const ProfileGeneral = (props) => {
  const classes = useStyles();
	const userLogin= useSelector((state)=> state.userLogin);
  const {userInfo} = userLogin;
	const [updateProfile, setUpdateProfile]= useState({loading:false,status:'', message:''});


   // functions that come with react form hook
  // to handle input fields and form submission 
  const {register, handleSubmit, formState: { errors } } = useForm({

    mode:'onBlur',
    resolver:yupResolver(updateProfileEmailValidation)
  });

    /// when form is submitted inputs values will be sent
  /// to a redux and dispatch an action to handle the login request
  const submit =async(data) => {
    setUpdateProfile({loading:true,status:'', message:''});
    try{
      const body ={
				username:data.username,
				email:data.email,
				city:data.city,
				country:data.country,
				region:data.region,
				phoneNumber:data.phoneNumber
			};
      const response = await axiosInstance.put('/updateUserProfile',body,{
        headers:{token:'Bearer '+userInfo.token  }
    })
    const receivedData = await response.data;

    if (receivedData.email) {
		setUpdateProfile({loading:false,status:'success', message:'your profile has been updated'});
  }
  }catch(err){
  setUpdateProfile({loading:false,status:'fail', message:err.message})
    }

  };


  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
          <Box className={classes.userCard}>
            <Box className={classes.avatarBox}>
              <Avatar alt="user avatar" className={classes.avatar} />
              <Typography>Emad mhardawi</Typography>
            </Box>
            <Box className={classes.infoBox}>
              <Typography>Adress: Eskilstuna, Sweden </Typography>
              <Typography>Phone: 096-545-xxx </Typography>
              <Typography>email: emad@emad.com </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>

      <Grid item sm={12} md={8}>
        <Paper className={classes.paper}>
          <Typography style={{ fontWeight: "bold" }} variant="h5">
            Profile
          </Typography>
					{updateProfile.status==='success' && <Alert  severity="success" >{updateProfile.message} </Alert> }
					{updateProfile.status==='fail' && <Alert  severity="error" >{updateProfile.message} </Alert> }
          <Divider className={classes.divider} />
					
          <form onSubmit={handleSubmit(submit)}>
          {updateProfile.loading && <CircularProgress className={classes.spinner}  color="primary" />}
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  size="medium"
                  variant="outlined"
                  fullWidth
                  label="username"
                  name='username'
									{...register("username")}
									error ={errors.userName?.message? true : false}
          				helperText={errors.userName?.message}
                  defaultValue={props.user.username}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  size="medium"
                  variant="outlined"
                  fullWidth
                  label="Email Address"
									name='email'
									{...register("email")}
									defaultValue={props.user.email}
									error ={errors.email?.message? true : false}
          				helperText={errors.email?errors.email.message : "we will use this email to contact you"}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="medium"
                  variant="outlined"
                  fullWidth
                  label="Phone Number"
									{...register("phoneNumber")}
									defaultValue={props.user.phoneNumber}
									error ={errors.phoneNumber?.message? true : false}
          				helperText={errors.phoneNumber?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="medium"
                  variant="outlined"
                  fullWidth
                  label="Country"
									{...register("country")}
									defaultValue={props.user.address.country}
									error ={errors.country?.message? true : false}
          				helperText={errors.country?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="medium"
                  variant="outlined"
                  fullWidth
                  label="State/Region"
									{...register("region")}
									defaultValue={props.user.address.region}
									error ={errors.state?.message? true : false}
          				helperText={errors.state?.message}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  size="medium"
                  variant="outlined"
                  fullWidth
                  label="City"
									{...register("city")}
									defaultValue={props.user.address.city}
									error ={errors.city?.message? true : false}
          				helperText={errors.city?.message}
                />
              </Grid>
            </Grid>
						<Divider className={classes.divider} />
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              color="primary"
							type='submit'
            >
              Save
            </Button>
          </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfileGeneral;
