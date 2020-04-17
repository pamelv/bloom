import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
const useStyles = makeStyles(() => ({
  category: {
    width: "90%",
    height: "30vh",
    position: "relative",
    backgroundRepeat: "no-repeat",
    color: "white",
    fontSize: "1.5rem",
    margin: "auto",
    marginTop: "1em",
    borderRadius: 6,
  },
  categoryTitle: {
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%,-50%)",
  },
}));

export default function Category(props) {
  const classes = useStyles();
  const imgaeURL = props.img;
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  return (
    <a href={props.Linkurl} key={props.title}>
      <div
        className={cx(classes.category, shadowStyles.root)}
        style={{ backgroundImage: `url(${imgaeURL})`, backgroundSize: "cover" }}
      >
        <h2 className={classes.categoryTitle}>{props.title}</h2>
      </div>
    </a>
  );
}
