import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
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
export default function PlaylistCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  return (
    <div className="mb-5">
      <Card className={cx(styles.root, shadowStyles.root)} key={props.id}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={props.url}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            style={styles.textContent}
            overline={props.extraInfo}
            heading={props.name}
            body={props.description}
          />
          <div style={{ float: "right", minWidth: "5px" }}>
            <Button
              variant="outlined"
              style={{ color: "#FBA886" }}
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Browser
            </Button>
            <Button
              variant="outlined"
              style={{ color: "#9CCED5" }}
              href={props.app}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in App
            </Button>
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
        style={{ width: "25rem" }}
      >
        <img src={props.url} alt="" />
        <h3>{props.name}</h3> */}
      {/* <ul>
        <li>{props.description}</li>
        <li>
          <a href={props.href} target="_blank" rel="noopener noreferrer">
            Open in Browser
          </a>
          <br></br>
          <a href={props.app} target="_blank" rel="noopener noreferrer">
            Open in Spotify App
          </a>
        </li>
      </ul> */}

      {/* <button
          type="submit"
          className="m-auto"
          onClick={() => {
            props.handleFormSave(props);
          }}
        >
          BOOKMARK
        </button>
      </div> */}
    </div>
  );
}
