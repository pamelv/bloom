import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Logout from "./Logoutbutton";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FaceIcon from "@material-ui/icons/Face";
import MenuIcon from "@material-ui/icons/Menu";
import BookIcon from "@material-ui/icons/Book";
import MoodIcon from "@material-ui/icons/Mood";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="user-profile" component={Link} to="/profile">
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </ListItem>

        <ListItem button key="bookmark" component={Link} to="/bookmarks">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText>Bookmark</ListItemText>
        </ListItem>

        <ListItem button key="user-mood" component={Link} to="/mood">
          <ListItemIcon>
            <MoodIcon />
          </ListItemIcon>
          <ListItemText>Mood</ListItemText>
        </ListItem>

        <ListItem button key="dashboard" component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <Logout />
        </ListItem>
        {/* <ListItem button key="logout">
         
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem> */}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon style={{ color: "black" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
