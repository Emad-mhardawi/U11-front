import React,{useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Container } from "@material-ui/core";
import ProfileGeneral from "./ProfileGeneral";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Orders from "./orders";
const useStyles = makeStyles((theme) => ({
	root:{
		background:theme.palette.common.lightGrey,
		minHeight:'92vh'
	},
	container:{
		marginTop:theme.spacing(4)
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

	const tabHandleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
					<Tab className={classes.tab} component={Link} to='/profile' label="General" />
					<Tab className={classes.tab} component={Link} label="Security" />
					<Tab className={classes.tab} component={Link} to='/profile/orders' label="Orders" />
				</Tabs>

				<Switch>
					<Route exact path='/profile/' component={ProfileGeneral} />
					<Route  path='/profile/orders' component={Orders} />
				</Switch>
				
			</Container>
    </div>
  );
};

export default UserProfile;
