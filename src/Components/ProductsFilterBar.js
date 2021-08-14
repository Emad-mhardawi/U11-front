import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Box } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
	formControl: {
    minWidth:120,
  },
	selectEmpty: {
    marginTop: theme.spacing(2),
  },
	select:{
		
		
	}
}));

const ProductFilterBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination color="primary" count={5} variant="outlined"  />
      <Box>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Sort By</InputLabel>
          <Select
					className={classes.select}
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value="">
              <em>empty</em>
            </MenuItem>
            <MenuItem value={10}>High Price</MenuItem>
            <MenuItem value={20}>Low Price</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default ProductFilterBar;
