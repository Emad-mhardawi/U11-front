import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationComponent=(props)=> {
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    props.changePageHandler(value)
  };
  return (
    <div className={classes.root}>
    <Pagination
      color="primary"  
      count={props.pagesCount} page={page} 
      onChange={handleChange}
    
      />
     
    </div>
  );
}

export default PaginationComponent;