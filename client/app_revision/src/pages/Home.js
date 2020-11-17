import React from "react";
import { makeStyles, Container, Grid } from "@material-ui/core";
import DefaultConfig from "../components/Home/DefaultConfig";
import SelectConfig from "../components/Home/SelectConfig";
import Background from "../assets/bghome.jpg";

export default function Home() {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <h1>WELCOME TO PC GAPTECH</h1>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Container className={classes.paper}>
              <SelectConfig />
            </Container>
          </Grid>
          <Grid item xs={6}>
            <Container className={classes.paper}>
              <DefaultConfig />
            </Container>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
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
    height: 600,
    border: 1,
    borderWidth: "1",
    // backgroundColor: "#F9F3F1",
  },

  center: {
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
  },

  header: {
    fontWeight: "bold",
    fontSize: "1.3em",
    marginBottom: "15px",
  },
}));
