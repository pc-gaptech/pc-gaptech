import React from 'react'
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";



import Partitem from '../components/PartItem'
import Image from 'material-ui-image'

import tokopedia from '../assets/tokopedia.png'
import shopee from '../assets/shopee.png'
import bukalapak from '../assets/bukalapak.png'



const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: "20px",
        paddingBottom: "20px",
        borderTop: "1px solid #bbbfca",
        borderBottom: "1px solid #bbbfca",
        margin: "auto",
        textAlign: "center"
    },
    logo: {
        maxWidth: "100%",
        height: "auto"
    },

    center: {
        textAlign: "center",
        margin: "auto",
        fontWeight: "bold"
    },

}))

export default function PartList() {
    const classes = useStyle()

    return(
        <Container>
            <Typography className={classes.header}>
            Select Available Motherboards
            </Typography>
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={1}>
                     
                </Grid>
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
                        className={classes.logo}
                        src={tokopedia}
                    />
                </Grid>
                <Grid xs={1}>
                <Image
                        className={classes.logo}
                        src={shopee}
                    />
                </Grid>
                <Grid xs={1}>
                <Image
                        className={classes.logo}
                        src={bukalapak}
                    />
                </Grid>
            </Grid>
            <Partitem/>
            <Partitem/>
            <Partitem/>
        </Container>
    )
}