import React from "react";
import {
  Button,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

function SelectConfig() {
  const classes = useStyle();

  const history = useHistory();
  function goToConfig() {
    console.log("object");
    Swal.fire({
      title: "Go to Configurator",
      text: "Do you want to choose your own component?",
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
      <Typography>Build your PC you will win with</Typography>
      {/* <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.newegg.com/insider/wp-content/uploads/2019/11/build1_1920X1080compressed.jpg"
        />
      </CardActionArea> */}
      <Typography variant={"h5"}>Build your Own</Typography>
      <Button
        style={{ backgroundColor: "red", color: "white", fontWeight: "bold" }}
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
