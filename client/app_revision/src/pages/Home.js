import React from "react";
import { makeStyles, Container, Grid, CssBaseline } from "@material-ui/core";
import DefaultConfig from "../components/Home/DefaultConfig";
import SelectConfig from "../components/Home/SelectConfig";
import HeaderHome from "../components/Home/HeaderHome";

export default function Home() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.header} maxWidth={"false"}>
        <HeaderHome />
      </Container>
      <Container className={classes.container} maxWidth={"false"}>
        <Grid container spacing={0} className={classes.cardfeature}>
          <Grid item xs={3} className={classes.mainLeft}>
            <SelectConfig />
          </Grid>
          <Grid item xs={3} className={classes.mainRight}>
            <DefaultConfig />
          </Grid>
        </Grid>
      </Container>
      <CssBaseline />
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  title: {
    color: "#242423",
    fontFamily: "'Montserrat Subrayada', sans-serif !important;",
  },
  headContain: {
    display: "flex",
  },
  container: {
    width: "100%",
    maxHeight: 720,
    backgroundColor: "#384264",
    backgroundRepeat: "no-repeat",
  },
  cardfeature: {
    marginTop: "0",
    paddingTop: 50,
  },
  root: {
    flexGrow: 1,
    padding: "0px"
  },
  paper: {
    height: "100vh",
  },
  mainLeft: {
    paddingTop: "0px",
    height: "100vh",
    width: "30vh",
    textAlign: "center",
    marginTop: 0,
    margin: 100,
  },

  mainRight: {
    paddingTop: "0px",
    height: "100vh",
    width: "33vh",
    textAlign: "center",
    marginTop: 0,
    margin: 100,
  },

  center: {
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    alignItems: "center",
  },

  header: {
    paddingTop: "0px",
    paddingRight: 0,
    paddingLeft: 0,
  },
}));
