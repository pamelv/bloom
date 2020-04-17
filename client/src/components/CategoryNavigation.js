import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SubjectIcon from "@material-ui/icons/Subject";
import MicIcon from "@material-ui/icons/Mic";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function CategoryNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(`${props.currentPage}`);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Music"
        value="music"
        component={Link}
        to="/playlist"
        icon={<MusicNoteIcon />}
      />
      <BottomNavigationAction
        label="Poem"
        value="poem"
        component={Link}
        to="/poem"
        icon={<SubjectIcon />}
      />
      <BottomNavigationAction
        label="Podcast"
        value="podcast"
        component={Link}
        to="/podcast"
        icon={<MicIcon />}
      />
      <BottomNavigationAction
        label="Cooking"
        value="cooking"
        component={Link}
        to="/recipe"
        icon={<FastfoodIcon />}
      />
    </BottomNavigation>
  );
}
