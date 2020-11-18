import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Backgroud from "../../assets/artificial-intelligence.svg";

function CenterHome() {
  const classes = useStyle();
  return (
    <div>
      <Container className={classes.container}></Container>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "50%",
    backgroundColor: "#adb5bd",
    // padding: "0",
    // backgroundImage: `url(${Backgroud})`,
    backgroundRepeat: "no-repeat",
    margin: 0,
  },
}));

export default CenterHome;
