import React from "react";
import {
  Button,
  CardActionArea,
  CardMedia,
  Card,
  makeStyles,
  CardContent,
  Typography,
} from "@material-ui/core";
import Select from "react-select";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { config } from "../../graphql/reactiveVars";
import Carousel from "react-material-ui-carousel";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
function SelectConfig() {
  const classes = useStyle();

  const history = useHistory();
  function goToConfig() {
    console.log("object");
    Swal.fire({
      title: "Go To Config",
      text: "you can do PC configuration",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "lets build",
    }).then((result) => {
      if (result.isConfirmed) {
        config({
          name: "BUILD 1",
          CPUId: 0,
          CPUCoolerId: 0,
          MotherboardId: 0,
          GPUId: 0,
          RAMId: 0,
          StorageId: 0,
          PowerSupplyId: 0,
          CasingId: 0,
          rating: 0,
        });
        history.push("/configurator");
      }
    });
  }
  return (
    <Card className={classes.cardPosition}>
      <h1 className={classes.title}>Build Guides</h1>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.newegg.com/insider/wp-content/uploads/2019/11/build1_1920X1080compressed.jpg"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="h4">
          Select your components based on computer specifications you need. With
          this option, you should pick components, otherwise use, "Get
          Recomendation" feature instead.
        </Typography>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => goToConfig()}
        >
          System Builder
        </Button>
      </CardContent>
    </Card>
  );
}

const useStyle = makeStyles((theme) => ({
  media: {
    width: "inherice",
    height: 250,
  },
  button: {
    marginTop: 10,
    width: 270,
    height: 45,
    backgroundColor: "rgb(48, 46, 97)",
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
    paddingBottom: 5,
  },
  cardPosition: {
    backgroundColor: "#E3EDF1",
    minWidth: 500,
    marginRight: 20,
    height: 550,
    boxShadow: "10px 20px 22px -7px rgba(0,0,0,0.75);",
  },
  title: {
    color: "black",
    letterSpacing: "3px",
  },
}));

export default SelectConfig;
