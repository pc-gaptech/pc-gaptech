import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Button,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import CenterHome from "../components/Home/CenterHome";
import DefaultConfig from "../components/Home/DefaultConfig";
import SelectConfig from "../components/Home/SelectConfig";
import Carousell from "../components/Home/Carousell";
import Background from "../assets/artificial-intelligence.svg";

export default function Home() {
  const classes = useStyle();

  return (
    <div>
      <Container>
        <h1 className={classes.title}>Pc Gaptech</h1>
        {/* <Carousell /> */}
        <CssBaseline />
      </Container>
      <Container className={classes.container} maxWidth={"false"}>
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs={3} className={classes.mainRight}>
            <SelectConfig />
          </Grid>
          <Grid item xs={3} className={classes.mainRight}>
            <DefaultConfig />
          </Grid>
          {/* <Grid item xs={3} className={classes.mainRight}>
            <Carousell />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  title: {
    color: "#242423",
    fontFamily: "'Montserrat Subrayada', sans-serif;",
  },
  headContain: {
    display: "flex",
  },
  container: {
    width: "100%",
    height: "50%",
    backgroundColor: "#adb5bd",
    // padding: "0",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    margin: 0,
  },
  root: {
    flexGrow: 1,
    marginTop: 60,
    // backgroundColor: "#F9F3F1",
    padding: 10,
  },
  paper: {
    height: "100vh",
  },
  mainLeft: {
    paddingTop: "50px",
    // backgroundColor: "#f4f4f2",
    height: "100vh",
    textAlign: "center",
    marginL: "0",
    // backgroundImage: `url("https://i.ytimg.com/vi/DS098d9px6o/maxresdefault.jpg")`
  },

  mainRight: {
    paddingTop: "50px",
    // color: "white",
    // backgroundColor: "#f4f4f2",
    height: "100vh",
    width: "30vh",
    textAlign: "center",
    margin: "auto",
    // backgroundImage: `url("https://i.ytimg.com/vi/DS098d9px6o/maxresdefault.jpg")`,
  },

  center: {
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    alignItems: "center",
  },

  header: {
    fontWeight: "bold",
    fontSize: "1.3em",
    marginBottom: "15px",
  },
}));
