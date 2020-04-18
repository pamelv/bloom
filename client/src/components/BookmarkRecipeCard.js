import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import cx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={cx(classes.root, shadowStyles.root)} key={props.id}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          style={classes.textContent}
          overline={`Prep Time: ${props.readyInMinutes}\n Servings: ${props.servings}`}
          heading={props.title}
        />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={cx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          color="primary"
        >
          <ExpandMoreIcon style={{ color: "#C87B94" }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ color: "black" }}>
            Ingredients:
          </Typography>
          <Typography paragraph style={{ color: "black" }}>
            {props.extendedIngredients.map((ingredient, index) => {
              return <li key={index}>{ingredient.originalString}</li>;
            })}
          </Typography>
          <Typography paragraph style={{ color: "black" }}>
            Instructions
          </Typography>
          <Typography paragraph style={{ color: "black" }}>
            {props.instruction}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
