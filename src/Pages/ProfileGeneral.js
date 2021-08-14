import { Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Form from "../Components/Form";
import { makeStyles } from "@material-ui/core/styles";
import {Avatar, Box, Breadcrumbs,Container,FormControlLabel,Grid,Paper,} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupInputsValidation } from "../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../redux-store/actions/userActions";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
 
  container: {
    marginTop: theme.spacing(4),
  },
	paper:{
		padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    boxShadow:
      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px ",
			position:'relative',
			minHeight:'350px',
	},
	divider:{
		marginTop:theme.spacing(4),
		marginBottom:theme.spacing(4)
	},
	button:{
		width:'9rem',
	},

	avatarBox:{
		background:'white',
		padding:'5px',
		borderRadius:'1000px',
		position:'absolute',
		top:'-30px',
		left:'50%',
		transform:'translateX(-50%)'

	},
	avatar:{
		width:'8rem',
		height:'8rem',
		padding:'2px'
	},
	infoBox:{
		marginTop:'150px',
		display:'flex',
		flexDirection:'column'
	}
}));

const ProfileGeneral = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}  spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
					<Box className={classes.userCard}>
						<Box className={classes.avatarBox}>
						<Avatar alt="user avatar" className={classes.avatar}/>
						<Typography >Emad mhardawi</Typography>
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
					<Typography style={{fontWeight:'bold'}} variant='h5'>Profile</Typography>
					<Divider  className={classes.divider}/>
					<form>
						<Grid container spacing={4}>
							<Grid item xs={12} md={6} >
								<TextField
          			size="medium"
          			variant="outlined"
          			fullWidth
          			label="Name"
								/>
							</Grid>
							
							<Grid item xs={12} md={6} >
								<TextField
          			size="medium"
          			variant="outlined"
          			fullWidth
          			label="Email Address"
								helperText='we will use this email to contact you'
								/>
							</Grid>
							<Grid item xs={12} md={6} >
								<TextField
          			size="medium"
          			variant="outlined"
          			fullWidth
          			label="Phone Number"
								/>
							</Grid>
							<Grid item xs={12} md={6} >
								<TextField
          			size="medium"
          			variant="outlined"
          			fullWidth
          			label="Country"
								/>
							</Grid>
							<Grid item xs={12} md={6} >
								<TextField
          			size="medium"
          			variant="outlined"
          			fullWidth
          			label="State/Region"
								/>
							</Grid>
							<Grid item xs={12} md={6} >
								<TextField
          			size="medium"
          			variant="outlined"
          			fullWidth
          			label="City"
								/>
							</Grid>
						</Grid>
				</form>
				<Divider className={classes.divider}/>
				<div style={{display:'flex', justifyContent:'flex-end'}}>
				<Button className={classes.button} size='large' variant='contained' color='primary'>Save</Button>
				</div>
				</Paper>
      </Grid>
    </Grid>
		
  );
};

export default ProfileGeneral;
