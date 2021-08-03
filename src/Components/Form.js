import { Container, Typography } from "@material-ui/core";
import {Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Assets/Images/logo.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: "100px",
  },
  form: {
    padding: theme.spacing(3),
    "& > *": {
      marginBottom: theme.spacing(3),
    },
  },
  from_header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },
  logo: {
    height: "60px",
  },
}));

const Form = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Paper elevation={3}>
        <form className={classes.form}>
        <div className={classes.from_header}>
              <Box>
                  
                <Typography variant='h5'>{props.formTitle}</Typography>
                <Typography variant='body2'>{props.desc}</Typography>
              </Box>
              <img className={classes.logo} src={logo}/>
            </div>
            {props.children}
        </form>
      </Paper>
    </Container>
  );
};
export default Form;
