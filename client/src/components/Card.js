import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

const useStyles = makeStyles(() => ({
  root: {
    minWidth: "300px",
    maxWidth: "500px",
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
}));

export default function BookmarkCard(props) {
  const styles = useStyles();
  const textCardContentStyles = useBlogTextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles({ inactive: true });

  return (
    <div>
      <Card className={cx(styles.root, shadowStyles.root)} key={props.date}>
        <CardContent className={styles.content}>
          {
            //eslint-disable-next-line
          }
          <img src={props.imgUrl} style={{ width: "50%" }} />
          <TextInfoContent
            classes={textCardContentStyles}
            style={styles.textContent}
            overline={props.smallText}
            heading={props.boldText}
            body={props.body}
          />
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.linkName}
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
