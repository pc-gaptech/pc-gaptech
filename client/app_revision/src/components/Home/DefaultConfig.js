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
        return { value: el.id, label: el.name, picture: el.picture_url };
      });
      setOptions(games);
    }
  }, [data]);
  let listPicGames = options.map((el) => {
    return (
      <Card className={classes.carousel}>
        {" "}
        <CardContent>
          <img src={el.picture} style={{ width: 400, height: 250 }} />
        </CardContent>
      </Card>
    );
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error}</p>;

  return (
    // <div>
    // <Paper elevation={4} className={classes.paper}>
    <Card className={classes.mainPage}>
      <Container>
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
    marginTop: 5,
    width: 270,
    height: 45,
    backgroundColor: "#ea2c62",
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
  },
  selects: {
    color: "black",
    backgroundColor: "red",
  },
  mainPage: {
    padding: 10,
    // backgroundColor: "black",
    color: "Red",
    width: 550,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderStyle: "solid",
    // borderColor: "black",
    // backgroundColor: "white",
    height: 550,
    boxShadow: "10px 20px 22px -7px rgba(0,0,0,0.75);",
  },
  title: {
    // backgroundColor: "blue",
    color: "black",
    letterSpacing: "3px",
  },
  paper: {
    height: 220,
    backgroundColor: "trasparent",
  },
  carousel: {
    marginTop: 5,
    width: 450,
  },
}));

export default DefaultConfig;
