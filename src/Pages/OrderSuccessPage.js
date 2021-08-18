import { Button, Container, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
		color:'rgb(0, 171, 85)',
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

const OrderSuccessPage = () => {
  const classes = useStyles();

	const history = useHistory()
	const redirect =()=>{
		history.push('/shop')
	}
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <CheckCircleIcon className={classes.icon} />
        <Typography
          classes={classes.text}
          color="primary"
          className={classes.text}
          variant="h4"
        >
          Thanks for your order!
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

export default OrderSuccessPage;
