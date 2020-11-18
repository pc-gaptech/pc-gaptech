import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { FETCH_ALL } from "../../graphql/query";
import { useHistory, useParams } from "react-router-dom";
import { restriction } from "../../graphql/reactiveVars";

import PartItem from "../../components/configurator/PartItem";
import Image from "material-ui-image";
import tokopedia from "../../assets/tokopedia.png";
import shopee from "../../assets/shopee.png";
import bukalapak from "../../assets/bukalapak.png";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: "10px",
    paddingBottom: "10px",
    borderTop: "1px solid #bbbfca",
    borderBottom: "1px solid #bbbfca",
    textAlign: "center",
  },
  logo: {
    alignSelf: "center",
    maxWidth: "70%",
    height: "auto",
    margin: "auto",
    paddingTop: "33px",
    paddingBottom: "33px",
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

export default function PartList() {
  const classes = useStyle();
  const { componentType } = useParams();
  const history = useHistory();
  const { loading, error, data } = useQuery(FETCH_ALL, {
    variables: { access_token: localStorage.getItem("access_token") },
  });

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error}</p>;

  const filter = (component) => {
    console.log(restriction());
    switch (component.__typename) {
      case "CPU":
        if (restriction().chipset) {
          for (let i = 0; i < component.chipset.length; i++) {
            if (component.chipset[i] === restriction().chipset) {
              return true;
            }
          }
          return false;
        }
        if (restriction().socket_array.length) {
          for (let i = 0; i < restriction().socket_array.length; i++) {
            if (component.socket === restriction().socket_array[i]) {
              return true;
            }
          }
          return false;
        }
        if (restriction().chipset_array.length) {
          for (let i = 0; i < restriction().chipset_array.length; i++) {
            for (let j = 0; j < component.chipset.length; j++) {
              if (component.chipset[j] === restriction().chipset_array[i]) {
                return true;
              }
            }
          }
          return false;
        }
        break;
      case "CPUCooler":
        if (restriction().socket) {
          for (let i = 0; i < component.socket.length; i++) {
            if (component.socket[i] === restriction().socket) {
              return true;
            }
          }
          return false;
        }
        break;
      case "RAM":
        if (restriction().chipset) {
          for (let i = 0; i < component.chipset.length; i++) {
            if (component.chipset[i] === restriction().chipset) {
              return true;
            }
          }
          return false;
        }
        break;
      case "PowerSupply":
        break;
      case "Casing":
        if (restriction().form_factor) {
          if (component.form_factor === restriction().form_factor) {
            return true;
          } else {
            return false;
          }
        }
        break;
      case "Motherboard":
        if (restriction().socket || restriction().form_factor) {
          if (
            component.socket === restriction().socket ||
            component.form_factor === restriction().form_factor
          ) {
            return true;
          } else {
            return false;
          }
        }
        if (restriction().socket_array.length) {
          for (let i = 0; i < restriction().socket_array.length; i++) {
            if (component.socket === restriction().socket_array[i]) {
              return true;
            }
          }
          return false;
        }
        if (restriction().chipset_array.length) {
          for (let i = 0; i < restriction().chipset_array.length; i++) {
            if (component.chipset === restriction().chipset_array[i]) {
              return true;
            }
          }
          return false;
        }
        break;
      default:
        break;
    }
    return true;
  };

  return (
    <Container>
      <Typography className={classes.header}>Select Available CPUs</Typography>
      {/* <p>{JSON.stringify(data)}</p> */}
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={1}></Grid>
        <Grid xs={4} className={classes.center}>
          Products
        </Grid>
        <Grid xs={2} className={classes.center}>
          Add
        </Grid>
        <Grid xs={2} className={classes.center}>
          Est.Price
        </Grid>
        <Grid xs={1}>
          <Image
            imageStyle={{ width: "inherit", height: "inherit" }}
            className={classes.logo}
            src={tokopedia}
          />
        </Grid>
        <Grid xs={1}>
          <Image
            imageStyle={{ width: "inherit", height: "inherit" }}
            className={classes.logo}
            src={bukalapak}
          />
        </Grid>
      </Grid>

      {data.fetchAll[`data${componentType}`].map((item) => {
        if (filter(item)) {
          return (
            <PartItem item={item} key={item.id} component={componentType} />
          );
        }
      })}
    </Container>
  );
}
