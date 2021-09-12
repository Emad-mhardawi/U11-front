import React,{useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Container } from "@material-ui/core";
import ProfileGeneral from "./ProfileGeneral";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Security from "./security";
import axiosInstance from "../helpers/axios";
import { useSelector } from "react-redux";

//// styling the page using material ui 
const useStyles = makeStyles((theme) => ({
	root:{
		background:theme.palette.common.lightGrey,
		minHeight:'92vh'
	},
	container:{
		paddingTop:theme.spacing(4)
	},
	tabs:{
		marginTop:theme.spacing(4),
		borderBottom:'1px solid grey'
	},
	tab:{
		minWidth:'10px',
	}
}));


const UserProfile = () => {
	const classes = useStyles();
	const [tabValue, setTabValue] = useState(0);
	const [user , setUser]= useState({username:'', email:'', phoneNumber:'', address:{country:'', region:'', city:'' }});
	const userLogin= useSelector((state)=> state.userLogin);
	const {userInfo} = userLogin;


	const tabHandleChange = (event, newValue) => {
    setTabValue(newValue);
  };

	/// updating the active tab value when refresh the browser based on Url
	useEffect(()=>{
		if (window.location.pathname ==='/profile' && tabValue!=='/profile') {
			setTabValue(0)
		}
		if (window.location.pathname ==='/profile/security' && tabValue!=='/profile/security') {
			setTabValue(1)
		}
	},[tabValue])

	//// getting user data 
	useEffect(()=>{
		const getUser =async()=>{
			const response= await axiosInstance.get(`/userInfo?userId=${userInfo._id}`);
			const data = await response.data;
			setUser(data)
			console.log(data)
		}
		getUser()
	},[userInfo._id])




  return (
		<div className={classes.root}>
      <Container className={classes.container}>
				<Typography variant='h4'>Account</Typography>
				<Breadcrumbs aria-label="breadcrumb">
          <Typography className={classes.link} component={Link} to="/">
            Home
          </Typography>
          <Typography className={classes.link} component={Link} to="/shop">
            Account
          </Typography>
          <Typography color="textPrimary">General</Typography>
        </Breadcrumbs>
				
				<Tabs
					className={classes.tabs}
					value={tabValue}
					onChange={tabHandleChange}
					indicatorColor="primary"
					textColor="primary"
				>
					<Tab className={classes.tab} component={Link} to='/profile/general' label="General" />
					<Tab className={classes.tab} component={Link} to='/profile/security' label="Security" />
				</Tabs>
				
				<Switch>
					<Route exact path='/profile/general' component={(props=> <ProfileGeneral user={user} />)} />
					<Route exact path='/profile/security' component={Security} />
				</Switch>
			</Container>
    </div>
  );
};

export default UserProfile;
