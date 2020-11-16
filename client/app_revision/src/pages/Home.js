import React from "react";
import { makeStyles, Container, Grid, Paper, Button } from "@material-ui/core";
import DefaultConfig from "../components/Home/DefaultConfig";
import SelectConfig from "../components/Home/SelectConfig";

export default function Home() {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <h1>kdnfsn</h1>
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
  },
  root: {
    flexGrow: 1,
    marginTop: 60,
    backgroundColor: "black",
    padding: 10,
  },
  paper: {
    height: 700,
    backgroundColor: "White",
  },

  // container: {
  //   height: 400,
  //   backgroundColor: "blue",
  // },

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
