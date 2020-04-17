import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

const StyledButton = withStyles({
  root: {
    minWidth: "0px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    maxWidth: "500px",
    borderRadius: 12,
    margin: " 0 0 1em",
    breakInside: "avoid",
  },
  media: {
    borderRadius: 6,
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
  content: {
    padding: "10px",
    paddingBottom: "0px !important",
  },
  "content:last-child": {
    paddingBottom: "0px",
  },
  textContent: {
    marginBottom: 0,
    lineHeight: 1,
  },
}));

export default function RecipeCard(props) {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={cx(styles.root, shadowStyles.root)} key={props.id}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          style={styles.textContent}
          overline={`Prep Time: ${props.readyInMinutes}\n Servings: ${props.servings}`}
          heading={props.title}
          body={props.summary}
        />
        <div
          style={{ float: "right", marginBottom: "10px", marginRight: "5px" }}
        >
          <StyledButton
            type="submit"
            className="m-auto"
            onClick={() => {
              props.handleFormSave(props);
            }}
          >
            <BookmarksTwoToneIcon style={{ color: "#C87B94" }} />
          </StyledButton>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={cx(styles.expand, {
            [styles.expandOpen]: expanded,
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
            {props.extendedIngredients.map((ingredient) => {
              return <li>{ingredient.originalString}</li>;
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
