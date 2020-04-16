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
const peomLine = {
  fontSize: "1em",
  lineHeight: 1,
};

export default function PoemForm(props) {
  const styles = useStyles();

  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });
  return (
    <div>
      <Card className={cx(styles.root, shadowStyles.root)} key={props.title}>
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            style={styles.textContent}
            overline={props.author}
            heading={props.title}
            body={props.lines.map((value, index) => {
              return (
                <p style={peomLine} key={index}>
                  {value}
                </p>
                // <li key={index}>
                //   {value}
                // </li>
              );
            })}
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
      </Card>
    </div>
  );
}
