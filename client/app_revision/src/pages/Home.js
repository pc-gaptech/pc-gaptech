import React from "react";
import {
  makeStyles,
  Container,
  Grid,
  Paper,
  Button,
  CssBaseline,
} from "@material-ui/core";
import DefaultConfig from "../components/Home/DefaultConfig";
import SelectConfig from "../components/Home/SelectConfig";
import Background from "../assets/bghome.jpg";

export default function Home() {
  const classes = useStyle();

  return (
    <Container className={classes.container} maxWidth={"false"}>
      <CssBaseline />
      <Grid container spacing={0} className={classes.container}>
        <Grid item xs={6} className={classes.mainLeft}>
          <SelectConfig />
        </Grid>
        <Grid item xs={6} className={classes.mainRight}>
          <DefaultConfig />
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "yellow",
    padding: "0",
    backgroundImage: `url(${Background})`,
    // backgroundRepeat: "no-repeat",
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
    backgroundColor: "#f4f4f2",
    height: "100vh",
    textAlign: "center",
    margin: "auto",
    // backgroundImage: `url("https://i.ytimg.com/vi/DS098d9px6o/maxresdefault.jpg")`
  },

  mainRight: {
    paddingTop: "50px",
    color: "white",
    backgroundColor: "#f4f4f2",
    height: "100vh",
    textAlign: "center",
    margin: "auto",
    backgroundImage: `url("https://i.ytimg.com/vi/DS098d9px6o/maxresdefault.jpg")`,
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
