import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ErrorIcon from '@material-ui/icons/Error';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    paddingTop: theme.spacing(4),
    minHeight: "95vh",
  },
  container: {
    display: "flex",
    minHeight: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
		paddingTop: '200px'
  },
  icon: {
    fontSize: "8rem",
		color:'red',
		[theme.breakpoints.down('xs')]:{
			fontSize: "6rem",
		}
  },
	text:{
		textAlign:'center',
		fontSize:'3rem',
		paddingBottom:'1rem',
		[theme.breakpoints.down('xs')]:{
			fontSize: "2rem",
		}
	}
}));

const OrderFailPage = () => {
  const classes = useStyles();

	const history = useHistory()
	const redirect =()=>{
		history.push('/shop')
	}
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <ErrorIcon className={classes.icon} />
        <Typography
          classes={classes.text}
          color="primary"
          className={classes.text}
          variant="h4"
        >
          Payment failed
        </Typography>
        <Button
					onClick={redirect}
          
          color="primary"
          className={classes.button}
          startIcon={<ArrowBackIcon />}
        >
          Continue Shopping
        </Button>

        
      </Container>
    </div>
  );
};

export default OrderFailPage;
