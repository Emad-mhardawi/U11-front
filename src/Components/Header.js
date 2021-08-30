import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import heroImage from '../Assets/Images/hero2.png'
const useStyles = makeStyles((theme) => ({
  root: {
   background: theme.palette.primary.main,
    color:'white',
  },

  right:{
    position:'relative',
    objectFit:'cover',
    height:'35rem',
    [theme.breakpoints.down('sm')]:{
      height:'25rem'
    }
  },
  left:{

  },
  img:{
    width:'100%',
    height:'100%',
    position:'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
  },
  texContainer:{
    marginTop:theme.spacing(8),
    [theme.breakpoints.down('xs')]:{
      marginTop: '-40px',
      paddingBottom:theme.spacing(2),
      textAlign:'center'
    }
  },
  text:{
    paddingBottom:theme.spacing(2),
    [theme.breakpoints.down('sm')]:{
      fontSize:'3rem'
    }
  }


}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Container maxWidth='lg'>
        <Grid container spacing={1} direction='row-reverse'>
          <Grid item xs={12} sm={6} className={classes.right}>
            <img className={classes.img} src={heroImage} alt='headphone hero'/>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.left}>
          <Box className={classes.texContainer}>
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
