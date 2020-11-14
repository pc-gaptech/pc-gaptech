import React from 'react';
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
import PartItem from '../components/PartItem'
import PartList from '../pages/PartList'

import tokopedia from '../assets/tokopedia.png'
import shopee from '../assets/shopee.png'
import bukalapak from '../assets/bukalapak.png'

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

export default function Detail() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container spacing={2} style={{marginBottom: "50px"}}>
          <Grid item xs={3} style={{margin: "auto", textAlign: "center"}}>
            <Image
              src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg"
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
            <Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "50px" }}>ASRock H310CM-HDV 9th Gen Micro ATX Motherboard.</Typography>
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
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">sss</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">sssttttttttttttttttttttt</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Socket</TableCell>
                        <TableCell align="left">sss</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Chipset</TableCell>
                        <TableCell align="left">sss</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Form Factor</TableCell>
                        <TableCell align="left">sss</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Manufacture</TableCell>
                        <TableCell align="left">sss</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left">Power Draw</TableCell>
                        <TableCell align="left">sss</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={4} container>
                <Grid item xs={12} container>
                  <Typography className={classes.price}>Rp.1.230.000</Typography>
                </Grid>
                <Grid item xs={12} container>
                  <Grid item xs={6} style={{padding: "0"}}>
                    {/* <Typography style={{ fontWeight: "bold" }}>Tokopedia</Typography> */}
                    <Image
                      imageStyle={{ width: 'inherit', height: 'inherit' }}
                      className={classes.logo}
                      src={tokopedia}
                      style={{paddingTop: "0px"}}
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
                  <Grid item xs={6} style={{padding: "0px", margin: "0px" }}>
                    <Image
                      imageStyle={{ width: 'inherit', height: 'inherit' }}
                      className={classes.logo}
                      src={shopee}
                      style={{paddingTop: "0px"}}
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
                      style={{paddingTop: "0px"}}
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
        <PartList/>
      </Container>
    </React.Fragment>
  );
}