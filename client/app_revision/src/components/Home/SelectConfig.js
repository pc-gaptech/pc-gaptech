import React from "react";
import {
  Button,
  CardActionArea,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function SelectConfig() {
  const classes = useStyle();

  const history = useHistory();
  function goToConfig() {
    console.log("object");
    Swal.fire({
      title: "Go To Config",
      text: "you can do PC configuration",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 300,
      imageHeight: 100,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "lets build",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/configurator");
      }
    });
  }
  return (
    <div>
      <h1>Build Guids</h1>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.newegg.com/insider/wp-content/uploads/2019/11/build1_1920X1080compressed.jpg"
        />
      </CardActionArea>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => goToConfig()}
      >
        System Builder
      </Button>
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

export default SelectConfig;
