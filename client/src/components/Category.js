import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(() => ({
  category: {
    width: "100%",
    height: "30vh",
    position: "relative",
    backgroundRepeat: "no-repeat",
    color: "white",
    fontSize: "1.5rem",
    marginTop: "5px",
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

  return (
    <a href={props.Linkurl} key={props.title}>
      <div
        className={classes.category}
        style={{ backgroundImage: `url(${imgaeURL})`, backgroundSize: "cover" }}
      >
        <h2 className={classes.categoryTitle}>{props.title}</h2>
      </div>
    </a>
  );
}
