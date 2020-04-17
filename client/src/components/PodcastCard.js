import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
  },
}));

export default function PodcastCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  return (
    <div>
      <Card className={cx(styles.root, shadowStyles.root)} key={props.id}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={props.image}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            style={styles.textContent}
            overline={`Total Time: ${props.audio_length_sec}`}
            heading={props.title_original}
            body={props.podcast_title_original}
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
                href={props.audio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen
              </Button>
            </ButtonGroup>

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
      </Card>

      {/* <div
        key={props.id}
        className="card text-center m-auto shadow-lg p-3 mb-5 bg-white rounded-lg"
        style={{ width: "30rem" }}
      >
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5
            className="card-title my-2"
            style={{ textTransform: "uppercase" }}
          >
            <b>{props.title_original}</b>
          </h5>
          <div className="card-text my-2">{props.podcast_title_original}</div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="mx-1">
              <a href={props.audio} target="_blank" rel="noopener noreferrer">
                Audio
              </a>
            </button>
            {/* <a href={props.link} className="btn btn-primary"
                  style={{ marginLeft: "1rem" }}>BOOKMARK</a> */}
      {/* <button
              type="submit"
              className="mx-1"
              onClick={() => {
                props.handleFormSave(props);
              }}
            >
              BOOKMARK
            </button>
          </div>
        </div> */}
    </div>
  );
}
