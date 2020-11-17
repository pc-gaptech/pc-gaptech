import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import PartItemHome from "../../components/configurator/PartItemHome";
import Image from "material-ui-image";
import tokopedia from "../../assets/tokopedia.png";
import shopee from "../../assets/shopee.png";
import bukalapak from "../../assets/bukalapak.png";
import ButtonChooser from "../../components/configurator/ButtonChooser";
import { config, restriction } from "../../graphql/reactiveVars";
import { CHECK_CONFIG } from "../../graphql/mutations";

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
    marginTop: "15px",
    marginBottom: "15px",
  },

  componentType: {
    fontWeight: "bold",
    margin: "auto",
  },

  tableHead: {
    fontWeight: "bold",
    letterSpacing: "0.7px",
    fontSize: "1em",
  },
  checkConfig: {
    backgroundColor: "#F9F3F1",
    padding: "30px",
    marginBottom: "20px",
    boxShadow: "10px 10px 29px 8px rgba(0,0,0,0.75)",
  },
}));

export default function Configurator() {
  const classes = useStyle();
  const history = useHistory();
  const [displayedConfig] = useState(config());
  const [isConfigValid, setIsConfigValid] = useState(false);
  const [checkConfig] = useMutation(CHECK_CONFIG);

  const handleCheck = async (e) => {
    e.preventDefault();
    try {
      await checkConfig({
        variables: {
          access_token: localStorage.getItem("access_token"),
          config: {
            CPUId: displayedConfig.CPUId,
            CPUCoolerId: displayedConfig.CPUCoolerId,
            MotherboardId: displayedConfig.MotherboardId,
            GPUId: displayedConfig.GPUId,
            RAMId: displayedConfig.RAMId,
            StorageId: displayedConfig.StorageId,
            PowerSupplyId: displayedConfig.PowerSupplyId,
            CasingId: displayedConfig.CasingId,
          },
        },
      });
      setIsConfigValid(true);
    } catch (err) {
      console.log(err);
      setIsConfigValid(false);
    }
  };

  const handleNext = async (e) => {
    e.preventDefault();
    if (isConfigValid) {
      history.push("/finished");
    }
  };

  return (
    <Container component="main">
      <CssBaseline />
      <Typography className={classes.header}>Build your PC</Typography>
      {/* SEMENTARA DOANG */}

      <Grid xs={12} className={classes.checkConfig}>
        <button
          onClick={(e) => {
            handleCheck(e);
          }}
        >
          CHECK CONFIG
        </button>
        {isConfigValid ? (
          <p style={{ color: "green" }}>CONFIG COMPATIBLE</p>
        ) : (
          <p style={{ color: "red" }}>CONFIG TIDAK COMPATIBLE</p>
        )}
        {isConfigValid ? (
          <button
            onClick={(e) => {
              handleNext(e);
            }}
          >
            Confim Configuration
          </button>
        ) : (
          <p></p>
        )}
        {<p>Total Power: {restriction().total_power}</p>}
      </Grid>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>
            Choose Components
          </Typography>
        </Grid>
        <Grid item xs={10} container>
          <Grid item xs={0}></Grid>
          <Grid item xs={5} className={classes.center}>
            <Typography className={classes.tableHead}>Products</Typography>
          </Grid>
          <Grid item xs={2} className={classes.center}>
            <Typography className={classes.tableHead}>Add</Typography>
          </Grid>
          <Grid item xs={2} className={classes.center}>
            <Typography className={classes.tableHead}>Est.Price</Typography>
          </Grid>
          <Grid item xs={1}>
            <Image
              imageStyle={{ width: "inherit", height: "inherit" }}
              className={classes.logo}
              src={tokopedia}
            />
          </Grid>
          <Grid item xs={1}>
            <Image
              imageStyle={{
                width: "inherit",
                height: "inherit",
                margin: "auto",
              }}
              className={classes.logo}
              src={shopee}
            />
          </Grid>
          <Grid item xs={1}>
            <Image
              imageStyle={{ width: "inherit", height: "inherit" }}
              className={classes.logo}
              src={bukalapak}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>CPU</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.CPUId ? (
            <PartItemHome ID={displayedConfig.CPUId} component={"CPU"} />
          ) : (
            <ButtonChooser component={"CPU"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>Motherboard</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.MotherboardId ? (
            <PartItemHome
              ID={displayedConfig.MotherboardId}
              component={"Motherboard"}
            />
          ) : (
            <ButtonChooser component={"Motherboard"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>Memory</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.RAMId ? (
            <PartItemHome
              ID={displayedConfig.MotherboardId}
              component={"RAM"}
            />
          ) : (
            <ButtonChooser component={"RAM"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>Power Supplies</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.PowerSupplyId ? (
            <PartItemHome
              ID={displayedConfig.PowerSupplyId}
              component={"PowerSupply"}
            />
          ) : (
            <ButtonChooser component={"PowerSupply"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>Video Card</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.GPUId ? (
            <PartItemHome ID={displayedConfig.GPUId} component={"GPU"} />
          ) : (
            <ButtonChooser component={"GPU"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>Case</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.CasingId ? (
            <PartItemHome ID={displayedConfig.CasingId} component={"Casing"} />
          ) : (
            <ButtonChooser component={"Casing"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>CPU Cooler</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.CPUCoolerId ? (
            <PartItemHome
              ID={displayedConfig.CPUCoolerId}
              component={"CPUCooler"}
            />
          ) : (
            <ButtonChooser component={"CPUCooler"} />
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2} className={classes.componentType}>
          <Typography className={classes.tableHead}>Storage</Typography>
        </Grid>
        <Grid item xs={10}>
          {displayedConfig.StorageId ? (
            <PartItemHome
              ID={displayedConfig.StorageId}
              component={"Storage"}
            />
          ) : (
            <ButtonChooser component={"Storage"} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
