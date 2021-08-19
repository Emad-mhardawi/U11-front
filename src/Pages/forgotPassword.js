import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Form from "../Components/Form";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.lightGrey,
    height: "94vh",
    position: "relative",
  },
}));

const ForgotPassword = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form
        form_title="Password Recovery"
        desc="Tell us your email so we can send you a reset link"
      >
        <TextField variant="outlined" fullWidth label="Email Address " />
        <Button variant="contained" color="primary" size="large" fullWidth>
          Recover Password
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
