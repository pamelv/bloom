import React from "react";
import cx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SubjectIcon from "@material-ui/icons/Subject";
import MicIcon from "@material-ui/icons/Mic";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

const useStyles = makeStyles({
  root: {
    width: "90%",
    position: "fixed",
    bottom: "4px",
    left: "50%",
    transform: "translate(-50%,0)",
    borderRadius: "10px",
  },
});

export default function CategoryNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(`${props.currentPage}`);
  const shadowStyles = useLightTopShadowStyles({ inactive: true });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={cx(classes.root, shadowStyles.root)}
    >
      <BottomNavigationAction
        label="Music"
        value="playlist"
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
        value="recipe"
        component={Link}
        to="/recipe"
        icon={<FastfoodIcon />}
      />
    </BottomNavigation>
  );
}
