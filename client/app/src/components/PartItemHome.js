import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography, IconButton } from '@material-ui/core';

import Image from 'material-ui-image'
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyle = makeStyles((theme) => ({
    header: {
        fontWeight: "bold",
    },
    container: {
        paddingTop: "5px",
        paddingBottom: "5px",
        borderBottom: "0.5px solid #e8e8e8"
    },
    center: {
        textAlign: "center",
        margin: "auto"
    },
    button: {
        marginTop: "2px",
        color: "grey",
        fontSize: "0.7em",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    buttonsave: {
        color: "white",
        backgroundColor: "grey",
        fontSize: "0.7em",
        paddingLeft: "20px",
        paddingRight: "20px"
    },

    name: {
        fontWeight: "bold"
    }

}))

export default function PartItemHome() {
    const classes = useStyle()
    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={1}>
                <Image
                    src="https://cdna.pcpartpicker.com/static/forever/images/product/0a8a0ca77620c63b68fec6323537d50a.256p.jpg"
                />
            </Grid>
            <Grid item xs={4} className={classes.center}>
                <Typography className={classes.name}>
                    Asus ROG STRIX B550-F GAMING (WI-FI) ATX AM4
                    </Typography>
                <Button
                    size={"small"}
                    className={classes.button}
                    startIcon={<VisibilityIcon />}
                >
                    See details
                    </Button>
            </Grid>
            <Grid item xs={2} className={classes.center}>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={classes.buttonsave}
                    startIcon={<AddCircleIcon />}
                >Edit</Button>
            </Grid>
            <Grid item xs={2} className={classes.center} style={{ fontWeight: "bold" }}>
                Rp.2.100.000
            </Grid>
            <Grid item xs={1} className={classes.center}>
                <IconButton style={{ color: "#40CB53" }} title="Research price in Tokopedia" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
            <Grid item xs={1} className={classes.center}>
                <IconButton style={{ color: "#FF2F00" }} title="Research price in Shopee" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
            <Grid item xs={1} className={classes.center}>
                <IconButton style={{ color: "#E00034" }} title="Research price in Bukalapak" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}