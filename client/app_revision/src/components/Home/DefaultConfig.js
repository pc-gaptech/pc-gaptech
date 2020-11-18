import React, { useState, useEffect } from "react";
import {
  Container,
  makeStyles,
  Paper,
  Card,
  CardContent,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import Select from "react-select";
import { config, configRatingTemp } from "../../graphql/reactiveVars";
import { FECTH_GAMES } from "../../graphql/gamesQuery";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

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
        return {
          value: el.id,
          label: el.name,
          picture: el.picture_url,
          className: classes.selects,
        };
      });
      setOptions(games);
    }
  }, [data]);
  let listPicGames = options.map((el) => {
    return (
      <Card className={classes.carousel}>
        {" "}
        <CardContent style={{ padding: 2 }}>
          <img
            src={el.picture}
            style={{ padding: 0, width: 450, height: 250 }}
          />
        </CardContent>
      </Card>
    );
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error}</p>;

  return (
    <Card className={classes.mainPage}>
      <Container>
        <div>
          <h1 className={classes.title}>Select Games</h1>
        </div>
        <div>
          <Select onChange={pickGames} options={options} isMulti />
        </div>
        <div>
          <Carousel>{listPicGames}</Carousel>
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
    </Card>
  );
}

const useStyle = makeStyles((theme) => ({
  media: {
    width: "inherice",
    height: 200,
  },
  button: {
    marginTop: 5,
    width: 270,
    height: 45,
    backgroundColor: "rgb(48, 46, 97)",
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
  },
  selects: {
    width: 10,
    color: "Blue",
    backgroundColor: "blue",
  },
  mainPage: {
    padding: 10,
    backgroundColor: "#E3EDF1",
    color: "Black",
    width: 550,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: "auto",
    height: 550,
    boxShadow: "10px 20px 22px -7px rgba(0,0,0,0.75);",
  },
  title: {
    color: "black",
    letterSpacing: "3px",
  },
  paper: {
    height: 220,
    backgroundColor: "trasparent",
  },
  carousel: {
    marginTop: 5,
    width: 480,
    backgroundColor: "#E3EDF1",
  },
}));

export default DefaultConfig;
