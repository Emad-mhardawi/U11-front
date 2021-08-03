import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import StoreIcon from '@material-ui/icons/Store';
import InfoIcon from '@material-ui/icons/Info';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const SideDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.root}
      onClose={props.drawerOpenHandler}
      open={props.drawerOpen}
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="Home" />
        </ListItem>

				<ListItem button>
					<ListItemIcon>
            <StoreIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="Shop" />
        </ListItem>

				<ListItem button>
          <ListItemIcon>
            <InfoIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="About" />
        </ListItem>
				<ListItem button>
          <ListItemIcon>
            <ContactMailIcon color='primary'/>
          </ListItemIcon>
					<ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Drawer>
  );
};
export default SideDrawer;
