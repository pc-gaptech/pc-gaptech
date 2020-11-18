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
import HeaderHome from "../components/Home/HeaderHome";
import Background from "../assets/wrench.svg";

export default function Home() {
  const classes = useStyle();

  return (
    <div>
      <CssBaseline />
      <Container>
        <HeaderHome />
      </Container>
      <Container className={classes.container} maxWidth={"false"}>
        <h1 className={classes.title}>Descripton ....... </h1>
        <Grid container spacing={0} className={classes.cardfeature}>
          <Grid item xs={3} className={classes.mainLeft}>
            <SelectConfig />
          </Grid>
          <Grid item xs={3} className={classes.mainRight}>
            <DefaultConfig />
          </Grid>
        </Grid>
      </Container>
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
    height: "50%",
    backgroundColor: "#120078",
    // padding: "0",
    // backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    // margin: 20,
  },
  cardfeature: {
    paddingTop: 50,
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
    paddingTop: "0px",
    // color: "white",
    // backgroundColor: "#f4f4f2",
    height: "100vh",
    width: "30vh",
    textAlign: "center",
    marginTop: 0,
    margin: 100,

    // backgroundImage: `url("https://i.ytimg.com/vi/DS098d9px6o/maxresdefault.jpg")`
  },

  mainRight: {
    paddingTop: "0px",
    // color: "white",
    // backgroundColor: "#f4f4f2",
    height: "100vh",
    width: "33vh",
    textAlign: "center",
    marginTop: 0,
    margin: 100,

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
