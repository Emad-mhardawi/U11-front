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

const ResetPassword = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form
        form_title="Reset Password"
        desc="reset your password"
      >
        <TextField variant="outlined" fullWidth label="New Password " />
        <TextField variant="outlined" fullWidth label="Confirm New Password  " />
        <Button variant="contained" color="primary" size="large" fullWidth>
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
