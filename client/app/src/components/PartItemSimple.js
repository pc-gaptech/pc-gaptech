import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, IconButton } from '@material-ui/core';

import Image from 'material-ui-image'
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyle = makeStyles((theme) => ({
    button: {
        marginTop: "2px",
        color: "grey",
        fontSize: "0.7em",
        paddingLeft: "10px",
        paddingRight: "10px"
    },

}))


export default function PartItemSimple() {
    const classes = useStyle()


    return (
        <>
            <Grid item xs={1}>
                <Image
                    src="https://cdna.pcpartpicker.com/static/forever/images/product/0a8a0ca77620c63b68fec6323537d50a.256p.jpg"
                />
            </Grid>
            <Grid item xs={} className={classes.center}>
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
            <Grid item xs={2} className={classes.center} style={{ fontWeight: "bold" }}>
                Rp.2.100.000
            </Grid>
            <Grid xs={1} className={classes.center}>
                <IconButton style={{ color: "#40CB53" }} title="Research price in Tokopedia" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
            <Grid xs={1} className={classes.center}>
                <IconButton style={{ color: "#FF2F00" }} title="Research price in Shopee" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
            <Grid xs={1} className={classes.center}>
                <IconButton style={{ color: "#E00034" }} title="Research price in Bukalapak" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
        </>
    )
 

}


