import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, CardMedia, Grid, makeStyles, Paper, CardContent, CardHeader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Detail() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={6} container>
            <Grid xs={6}>
              <Paper className={classes.paper}>xs=12 sssm=6</Paper>
            </Grid>
            <Grid xs={6}>
              <Paper className={classes.paper}>xs=12 sssm=6</Paper>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>

        </Grid>
      </Container>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography>Photoo</Typography>
            <Card>
              {/* <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                  <IconButton aria-label="settings">
                    <ShareIcon />
                  </IconButton>
                }
                title="kskskskksk"
                subheader="ksksksk"
              /> */}
              <CardMedia style={{ height: "200px" }} image="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
              <CardContent>
                <Typography variant="body2" component="p">
                  "skskkskskks"
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">BUY NOW</Button>
                <Button size="small">OFFER</Button>
              </CardActions> */}
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Typography>Desc...</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>Actions..</Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}