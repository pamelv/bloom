import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import "./content.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "170px",
    borderRadius: 12,
    margin: " 0 0 1em",
    breakInside: "avoid",
  },
  media: {
    borderRadius: 6,
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
    color: "firebrick",
  },
}));
export default function PlaylistCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  return (
    <div>
      <Card className={cx(styles.root, shadowStyles.root)} key={props.id}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={props.url}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            style={styles.textContent}
            heading={props.name}
            body={props.description}
          />
          <div
            style={{ float: "right", minWidth: "150px", marginBottom: "10px" }}
          >
            <ButtonGroup
              size="small"
              style={{ color: "#9CCED5", marginRight: "5px" }}
              aria-label="outlined secondary button group"
            >
              <Button
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen
              </Button>
            </ButtonGroup>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
