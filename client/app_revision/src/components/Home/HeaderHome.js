import React from "react";
import { makeStyles } from "@material-ui/core";

function HeaderHome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <video
        autoplay
        loop
        muted
        src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/ed74590b56be59b8f90e3053/webm_page_bg_english.webm?t=1605294940"
        play
        style={{ width: "100%", height: "auto", margin: 0, paddingRight: 0 }}
      />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    width: "100%",
    padding: "0px",
    backgroundColor: "black",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default HeaderHome;
