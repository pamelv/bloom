import React from "react";
import cx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import SubjectIcon from "@material-ui/icons/Subject";
import MicIcon from "@material-ui/icons/Mic";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
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
const StyledNavigationButton = withStyles({
  root: {
    minWidth: "10px",
  },
})(BottomNavigationAction);

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
      <tyledNavigationButton
        label="Music"
        value="playlist"
        component={Link}
        to="/playlist"
        icon={<MusicNoteIcon />}
      />
      <tyledNavigationButton
        label="Poem"
        value="poem"
        component={Link}
        to="/poem"
        icon={<SubjectIcon />}
      />
      <tyledNavigationButton
        label="Exercise"
        value="exercise"
        component={Link}
        to="/exercise"
        icon={<FitnessCenterIcon />}
      />
      <tyledNavigationButton
        label="Podcast"
        value="podcast"
        component={Link}
        to="/podcast"
        icon={<MicIcon />}
      />
      <tyledNavigationButton
        label="Cooking"
        value="recipe"
        component={Link}
        to="/recipe"
        icon={<FastfoodIcon />}
      />
    </BottomNavigation>
  );
}
