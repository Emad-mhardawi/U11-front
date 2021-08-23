import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
root:{
  margin: theme.spacing(4),
  color:theme.palette.primary.main
}
}));




const RangeSlider = withStyles((theme)=>({
  root: {
    color: theme.palette.primary.main,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
}))(Slider);







const PriceRangeSlider = (props)=> {
  const classes = useStyles();
  

 
  const handleChange = (event, newValue) => {
    props.setPriceValues(newValue);
  };


  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <RangeSlider 
        max='1000'
        value={props.priceValues}
        onChange={handleChange}
        valueLabelDisplay="auto"
        
        
      />
    </div>
  );
}

export default PriceRangeSlider;