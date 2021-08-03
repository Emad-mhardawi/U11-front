import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from '../Assets/Images/hero2.png'
const useStyles = makeStyles((theme) => ({
  root: {
   background: theme.palette.primary.main,
    color:'white',
    
  },
  image:{
    width:'100%',
  },
  left:{
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('xs')]:{
      marginTop: -theme.spacing(6),
      paddingBottom: theme.spacing(12)
    }
  },
button:{
  marginTop:theme.spacing(3),
  [theme.breakpoints.down('sm')]:{
    
    marginBottom: theme.spacing(6)
  }
},
text:{
  paddingTop:theme.spacing(10),
  [theme.breakpoints.down('sm')]:{
    fontSize:'2.5rem',
    paddingTop:theme.spacing(6),
  },
  [theme.breakpoints.down('xs')]:{
    fontSize:'2rem',
    paddingTop:theme.spacing(0),
  }
}

}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Container maxWidth='lg' >
        <Grid container direction='row-reverse' spacing={1}>
          <Grid className={classes.right} item xs={12} sm={6}>
            <img className={classes.image} src={heroImage}/>
          </Grid>
          <Grid className={classes.left} item item xs={12} sm={6}>
            <Box>
              <Typography variant='h2' className={classes.text}>
              Experience your music like never before.
              </Typography>
              <Button disableElevation className={classes.button} variant='contained' color='secondary' size='large'>Descover</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Header;


