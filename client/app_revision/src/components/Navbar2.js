import React from "react";
import { Box, Typography, Button, IconButton, makeStyles, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Image from 'material-ui-image'
const useStyle = makeStyles((theme) => ({
    menu: {
        color: "white",
        fontSize: "1em",
        fontWeight: "bold",
        letterSpacing: "1px"
    },
    title: {
        color: "white",

    }
}))
export default function App() {
    const classes = useStyle()
  return (
    <Box display="flex" bgcolor="black" p={2} alignItems="center">
      <Typography className={classes.title}>PC-GAPTECH</Typography>
      <Box style={{marginLeft: "50px"}}>
        <Button className={classes.menu}>Configurator</Button>
        <Button className={classes.menu}>Favorites</Button>
      </Box>
      <Box flexGrow={1} textAlign="right">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
}