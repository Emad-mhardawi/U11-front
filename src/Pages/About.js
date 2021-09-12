import React from "react";
import { Container, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root:{
minHeight:'58vh'
  },
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  about: {
    marginBottom: theme.spacing(2),
  },
  longText: {
    width: "70%",
    color: theme.palette.common.mediumGrey,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  divider: {
    width: "10rem",
    height: "3px",
    background: theme.palette.primary.main,
    margin: theme.spacing(4),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    
    <Container className={classes.container}>
      <Typography variant="h4">-Our Mission-</Typography>
      <Typography variant="body1">Lorem Ipsum is simply dummy text </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.about} variant="h4">
        About
      </Typography>
      <Typography className={classes.longText} variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </Container>
    </div>
  );
};

export default About;
