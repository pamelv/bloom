import React from "react";
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
              return <li key={index}>{value}</li>;
            })}
          />
          <div
            style={{ float: "right", minWidth: "150px", marginBottom: "10px" }}
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
