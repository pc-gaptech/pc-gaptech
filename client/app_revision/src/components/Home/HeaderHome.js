import React from "react";
import Image from "material-ui-image";
import backhome from "../../assets/wrench.svg";
import {
  makeStyles,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  CssBaseline,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Background from "../../assets/Head.jpeg";

function HeaderHome() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline>
        <video
          autoPlay
          muted
          src="https://cdn.cloudflare.steamstatic.com/steam/clusters/frontpage/ed74590b56be59b8f90e3053/webm_page_bg_english.webm?t=1605294940"
          play
          style={{ width: "100%", height: 320, margin: 0, paddingRight: 0 }}
        />
        {/* <img
          style={{ width: "100%", height: 320, margin: 0, paddingRight: 0 }}
          src={Background}
        /> */}
      </CssBaseline>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0",
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
