import  Button  from "@material-ui/core/Button";
import Divider  from "@material-ui/core/Divider";
import  Typography  from "@material-ui/core/Typography";
import  TextField  from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Form from "../Components/Form";
import { makeStyles } from "@material-ui/core/styles";
import { FormControlLabel } from "@material-ui/core";

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
  return (
    <div className={classes.root}>
      <Form formTitle='Register' desc='Register new account in our platform'>
        <TextField
          size="medium"
          variant="outlined"
          fullWidth
          label="Email Address "
        />
        <TextField
          size="medium"
          variant="outlined"
          fullWidth
          label="Password "
        />
        <TextField
          size="medium"
          variant="outlined"
          fullWidth
          label="Confirm password"
        />
        <Button variant="contained" fullWidth color="primary" size="large">
          Sign up
        </Button>
        <FormControlLabel
        control={<Checkbox color='primary' name="Terms"/>}
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


