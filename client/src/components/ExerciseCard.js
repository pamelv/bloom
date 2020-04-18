import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import BookmarksTwoToneIcon from "@material-ui/icons/BookmarksTwoTone";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import "./content.css";
// import Parser from "html-react-parser";
import toaster from 'toasted-notes';
// import 'toasted-notes/src/styles.css'; // optional styles
import "../pages/toaster.css";

const StyledButton = withStyles({
  root: {
    minWidth: "0px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

const InfoContent = withStyles({
  body: { color: "black" },
})(TextInfoContent);

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
  description: {
    fontSize: "1em",
    lineHeight: 1,
    color: "black",
  },
}));

export default function ExerciseCard(props) {
  const styles = useStyles();

  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  return (
    <div>
      <Card className={cx(styles.root, shadowStyles.root)} key={props.id}>
        <CardContent className={styles.content}>
          <InfoContent
            classes={textCardContentStyles}
            style={styles.textContent}
            overline={`Target Muscle: ${props.category}`}
            heading={props.name}
            body={props.description}
            // body={Parser(
            //   <div>
            //     <div
            //       style={{
            //         fontWeight: 400,
            //         fontSize: "1.2em",
            //         marginBottom: "10px",
            //       }}
            //     >
            //       Required Equipment: {props.equipment}
            //     </div>
            //     <div style={styles.description}>{props.description}</div>
            //   </div>
            // )}
          />
          <div
            style={{ float: "right", marginBottom: "10px", marginRight: "5px" }}
          >
            <StyledButton
              type="submit"
              className="m-auto"
              onClick={() => {
                this.handleFormSave(props);
                toaster.notify('Bookmark saved!', {
                  position:"bottom",
                  duration: 2000
                })
              }}
            >
              <BookmarksTwoToneIcon style={{ color: "#C87B94" }} />
            </StyledButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
