import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    // maxWidth: "500px",
    borderRadius: 12,
    margin: " 0 0 1em",
    breakInside: "avoid",
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
  heading: {
    fontSize: "1 em",
    lineHeight: 1,
  },
}));

export default function BookmarkCard(props) {
  const styles = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card className={cx(styles.root, shadowStyles.root)} key={props.date}>
        <CardContent className={styles.content}>
          {
            //eslint-disable-next-line
          }

          <TextInfoContent
            classes={cx(styles.heading, textCardContentStyles)}
            style={styles.textContent}
            overline={props.smallText}
            heading={props.boldText}
          />
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
              {props.body}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
