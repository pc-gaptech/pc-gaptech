import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {
  Grid,
  makeStyles,
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableRow,
  Button
} from '@material-ui/core';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SaveIcon from '@material-ui/icons/Save';

import Image from 'material-ui-image'
import PartItem from '../../components/PartItem'
import PartList from '../PartList'

import tokopedia from '../../assets/tokopedia.png'
import shopee from '../../assets/shopee.png'
import bukalapak from '../../assets/bukalapak.png'

import { useParams } from 'react-router-dom'

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  price: {
    fontWeight: "bold",
    fontSize: "2em",
    backgroundColor: "#f8efd4",
    textAlign: "center",
    margin: "auto",
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
    verticalAlign: "middle"
  },
  logo: {
    maxWidth: "70%",
    height: "auto",
    margin: "auto",
  },
  button: {
    margin: "auto",
    textAlign: "center"
  }
}));

export default function DetailCpu() {
  const classes = useStyles();
  const { id } = useParams()
  const [data, setData] = useState({})
  const [result, setResult] = useState({})


  useEffect(() => {
    
    axios({
      method: "GET",
      url: `http://localhost:3000/parts/cpu/${id}/detail`,
      headers: { access_token: localStorage.getItem('access_token') }
    })
      .then(({ data }) => {
        setResult(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setData(result)

  }, [result])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <p>{JSON.stringify(data)}</p>
        <Grid container spacing={2} style={{ marginBottom: "50px" }}>
          <Grid item xs={3} style={{ margin: "auto", textAlign: "center" }}>
            <Image
              src={data.picture_url}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Add to Your Build
      </Button>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "50px" }}>{data.name}</Typography>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={8}>
                <TableContainer>
                  <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableBody>
                      <TableRow>
                        <TableCell align="left" style={{ fontWeight: "bold", fontSize: "1.2em" }}>Descriptions</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">{data.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Socket</TableCell>
                        <TableCell align="left">{data.socket}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Chipset</TableCell>
                        <TableCell align="left">{data.chipset.join(", ")}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">TDP</TableCell>
                        <TableCell align="left">{data.TDP}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Manufacturer</TableCell>
                        <TableCell align="left">{data.manufacturer}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Power Draw</TableCell>
                        <TableCell align="left">{data.power_draw}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Core Count</TableCell>
                        <TableCell align="left">{data.core_count}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">ISL GPU</TableCell>
                        <TableCell align="left">{data.islGPU === true ? "Yes" : "No"}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Max Rating</TableCell>
                        <TableCell align="left">{data.max_rating}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={4} container>
                <Grid item xs={12} container>
                  <Typography className={classes.price}>Rp.{data.price}</Typography>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6} style={{ padding: "0" }}>
                    {/* <Typography style={{ fontWeight: "bold" }}>Tokopedia</Typography> */}
                    <Image
                      imageStyle={{ width: 'inherit', height: 'inherit' }}
                      className={classes.logo}
                      src={tokopedia}
                      style={{ paddingTop: "0px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "green", color: "white" }}
                      size="small"
                      className={classes.button}
                      startIcon={<AddShoppingCartIcon />}
                    >
                      See Price
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} container style={{ padding: "0px", margin: "0px" }}>
                  <Grid item xs={6} style={{ padding: "0px", margin: "0px" }}>
                    <Image
                      imageStyle={{ width: 'inherit', height: 'inherit' }}
                      className={classes.logo}
                      src={shopee}
                      style={{ paddingTop: "0px" }}
                    />
                  </Grid>
                  <Grid item xs={6} style={{ padding: "0px" }}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "orange", color: "white", paddingBottom: "0px" }}
                      size="small"
                      className={classes.button}
                      startIcon={<AddShoppingCartIcon />}
                    >
                      See Price
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6}>
                    <Image
                      imageStyle={{ width: 'inherit', height: 'inherit' }}
                      className={classes.logo}
                      src={bukalapak}
                      style={{ paddingTop: "0px" }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "red", color: "white" }}
                      size="small"
                      className={classes.button}
                      startIcon={<AddShoppingCartIcon />}
                    >
                      See Price
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}