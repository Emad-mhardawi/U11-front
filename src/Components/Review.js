import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import ReviewForm from "./ReviewForm";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:theme.spacing(4),
      marginBottom:theme.spacing(4),
      padding:theme.spacing(2)
      },
      avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
    
      left:{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          '& > *': {
            margin: theme.spacing(0.5),
          },
      }
   
  }));



const Review = (props)=>{
    const classes=useStyles()

   
 return(
     <div className={classes.root}>
         <Grid container spacing={2} >
             <Grid className={classes.left} item md='3'>
                 <Avatar alt='user avatar' className={classes.avatar}/>
                 <Typography variant='body2'>Emad Mhardawi</Typography>
                 <Typography variant='body2'>24 september 2020</Typography>
             </Grid>

             <Grid className={classes.right} item md='9'>
                 <Rating readOnly value={3}/>
                 <Typography>
                 is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                   specimen book
                 </Typography>
             </Grid>


         </Grid>
     </div>
    )
}

export default Review;
