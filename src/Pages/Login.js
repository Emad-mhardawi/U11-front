import  Button  from "@material-ui/core/Button";
import Divider  from "@material-ui/core/Divider";
import  Typography  from "@material-ui/core/Typography";
import  TextField  from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Form from "../Components/Form";

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

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Form formTitle='Log in'>
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
        <Button variant="contained" fullWidth color="primary" size="large">
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
        <Typography className={classes.link} component={Link} variant="body2">
          Forgot password
        </Typography>
      </Form>
    </div>
  );
};

export default Login;


