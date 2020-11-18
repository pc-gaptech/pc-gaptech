import React, { useState, useEffect } from "react";
import { Container, makeStyles, Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Select from "react-select";
import { config, configRatingTemp } from "../../graphql/reactiveVars";
import { FECTH_GAMES } from "../../graphql/gamesQuery";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DefaultConfig() {
  const [options, setOptions] = useState([]);
  const [pickedGames, setPickedGames] = useState("");
  const history = useHistory();

  const { loading, error, data } = useQuery(FECTH_GAMES, {
    variables: {
      access_token: localStorage.getItem("access_token"),
    },
  });

  const classes = useStyle();

  function goToDefault(e) {
    e.preventDefault();
    let result = pickedGames.map((el) => {
      return el.value;
    });
    setPickedGames(result.join(","));
    console.log(result, "result");
    axios({
      url: `http://localhost:3000/recommendpc?gamesId=${result.join(",")}`,
      headers: {
        "content-type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      method: "GET",
    })
      .then(({ data }) => {
        const newConfig = {
          name: data.name,
          CPUId: data.CPUId,
          CPUCoolerId: data.CPUCoolerId,
          MotherboardId: data.MotherboardId,
          GPUId: data.GPUId,
          RAMId: data.RAMId,
          StorageId: data.StorageId,
          PowerSupplyId: data.PowerSupplyId,
          CasingId: data.CasingId,
          rating: data.rating,
        };
        config(newConfig);
        configRatingTemp({
          rating:
            data.GPU.rating > data.CPU.max_rating
              ? data.CPU.max_rating
              : data.GPU.rating,
        });
        history.push("/finished");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function pickGames(e) {
    setPickedGames(e);
  }

  useEffect(() => {
    if (data) {
      let games = data.getGames.map((el) => {
        return { value: el.id, label: el.name };
      });
      setOptions(games);
    }
  }, [data]);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error}</p>;

  return (
    // <div>
    // <Paper elevation={4} className={classes.paper}>
    <Container className={classes.mainPage}>
      <div>
        <h1 className={classes.title}>Select Games</h1>
      </div>
      <div>
        <Select
          style={classes.selects}
          onChange={pickGames}
          options={options}
          isMulti
        />
      </div>
      <div>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={(e) => {
            goToDefault(e);
          }}
        >
          Get Configuration
        </Button>
      </div>
    </Container>
    // {/* </Paper> */}
    // </div>
  );
}

const useStyle = makeStyles((theme) => ({
  media: {
    width: "inherice",
    height: 200,
  },
  button: {
    marginTop: 10,
    width: 250,
    height: 45,
    backgroundColor: "red",
    marginTop: 30,
  },
  selects: {
    color: "black",
    backgroundColor: "red",
  },
  mainPage: {
    // backgroundColor: "black",
    color: "Red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    height: 320,
    boxShadow: "10px 20px 22px -7px rgba(0,0,0,0.75);",
  },
  title: {
    backgroundColor: "blue",
    color: "white",
  },
  paper: {
    height: 220,
    backgroundColor: "trasparent",
  },
}));

export default DefaultConfig;
