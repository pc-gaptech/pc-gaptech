import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography, IconButton, Link } from '@material-ui/core';

import Image from 'material-ui-image'
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import SaveIcon from '@material-ui/icons/Save'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useHistory } from 'react-router-dom';



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

export default function PartItem(props) {
    const { item } = props
    console.log(item)
    let type

    if(item.__typename === "CPU") {
        type = "cpus"
    } else if(item.__typename === "RAM") {
        type = "rams"
    } else if(item.__typename === "Motherboard") {
        type = "motherboards"
    } else if(item.__typename === "GPU") {
        type = "gpus"
    } else if(item.__typename === "CPUCooler") {
        type = "cpucoolers"
    } else if(item.__typename === "PowerSupply") {
        type = "powersupplies"
    } else if(item.__typename === "Casing") {
        type = "casings"
    } else if(item.__typename === "Storage") {
        type = "storages"
    }
    

    const history = useHistory()

    const getDetail = (e) => {
        e.preventDefault()
        history.push(`/parts/${type}/${item.id}`)
    }

    const classes = useStyle()
    return (
        <Grid container spacing={1} className={classes.container}>
            <Grid item xs={1}>
                <Image
                    src={item.picture_url}
                />
            </Grid>
            <Grid item xs={4} className={classes.center}>
                <Typography className={classes.name}>
                    {item.name}
                </Typography>
                <Button
                    size={"small"}
                    className={classes.button}
                    startIcon={<VisibilityIcon />}
                    onClick={(e) => getDetail(e)}
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
                >Add</Button>
            </Grid>
            <Grid item xs={2} className={classes.center} style={{ fontWeight: "bold" }}>
                {item.price}
            </Grid>
            <Grid item xs={1} className={classes.center}>
                <IconButton style={{ color: "#40CB53" }} title="Research price in Tokopedia" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
            <Grid item xs={1} className={classes.center}>
                <a href={`https://www.tokopedia.com/search?st=product&q=${item.name}`}>
                <IconButton
                    style={{ color: "#FF2F00" }} title="Research price in Shopee" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                </a>
            </Grid>
            <Grid item xs={1} className={classes.center}>
                <IconButton style={{ color: "#E00034" }} title="Research price in Bukalapak" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}