import React, { useState, useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Select from "react-select";
import { pickGameVar } from "../../graphql/cache/makeVar";
import { FECTH_GAMES } from "../../graphql/gamesQuery";
import { useQuery } from "@apollo/client";
const options = [
  { value: "Game 1", label: "Game 1", id: 1 },
  { value: "Game 2", label: "Game 2" },
  { value: "Game 3", label: "Game 3" },
  { value: "Game 4", label: "Game 4" },
  { value: "Game 5", label: "Game 5" },
];
function DefaultConfig() {
  // const { loading, data } = useQuery(FECTH_GAMES, {
  //   variables: {
  //     access_token: localStorage.getItem("access_token"),
  //   },
  // });
  const { inputSelect, setInputSelect } = useState([]);
  const [state, setstate] = useState([]);
  const classes = useStyle();
  // console.log(data);
  function goToDefault() {
    // go toconfig
    console.log("object");
  }
  function pickGames(e) {
    console.log(e);
  }

  useEffect(() => {
    fetch("http://localhost:3000/games", {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // data.map(el => {
        // })
        setstate(data);
      });
  }, []);
  return (
    <div>
      <Container>
        {JSON.stringify(state)}
        <h1>Select Games</h1>
        <Select onChange={pickGames} options={options} isMulti />
        <Button
          variant="outlined"
          className={classes.button}
          onClick={goToDefault}
        >
          Recomended Config
        </Button>
      </Container>
    </div>
  );
}

const useStyle = makeStyles((theme) => ({
  media: {
    width: "inherice",
    height: 200,
  },
  button: {
    marginTop: 10,
    width: 400,
    height: 45,
  },
}));

export default DefaultConfig;
