import React from 'react'
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

import PartItemSimple from './PartItemSimple'
import Image from 'material-ui-image'
import tokopedia from '../../assets/tokopedia.png'
import shopee from '../../assets/shopee.png'
import bukalapak from '../../assets/bukalapak.png'


const useStyle = makeStyles((theme) => ({
    container: {
        paddingTop: "10px",
        paddingBottom: "10px",
        borderTop: "1px solid #bbbfca",
        borderBottom: "1px solid #bbbfca",
        textAlign: "center"
    },
    logo: {
        alignSelf: "center",
        maxWidth: "70%",
        height: "auto",
        margin: "auto",
        paddingTop: "30px",
        paddingBottom: "30px",
    },

    center: {
        textAlign: "center",
        margin: "auto",
        fontWeight: "bold"
    },

    header: {
        fontWeight: "bold",
        fontSize: "1.3em",
        marginBottom: "15px"
    },

    componentType: {
        fontWeight: "bold",
        margin: "auto",
    },

    list: {
        paddingTop: "20px",
        paddingBottom: "20px",
        borderBottom: "0.1px solid grey"

    }
}))

export default function Build() {
    const classes = useStyle()

    return (
        <Container>
            <Typography className={classes.header}>
                Build your PC
            </Typography>
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={5} className={classes.center}>
                    Products
                    </Grid>
                <Grid item xs={4} className={classes.center}>
                    Est.Price
                    </Grid>
                <Grid item xs={1}>
                    <Image
                        imageStyle={{ width: 'inherit', height: 'inherit' }}
                        className={classes.logo}
                        src={tokopedia}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Image
                        imageStyle={{ width: 'inherit', height: 'inherit', margin: 'auto' }}
                        className={classes.logo}
                        src={shopee}
                    />
                </Grid>
                <Grid item xs={1}>
                    <Image
                        imageStyle={{ width: 'inherit', height: 'inherit' }}
                        className={classes.logo}
                        src={bukalapak}
                    />
                </Grid>
            </Grid>
            <PartItemSimple />
            <PartItemSimple />

            <PartItemSimple />

            <Typography style={{style: "20px", marginBottom: "-10px", marginTop: "30px"}}>
                Total
            </Typography>
            <Typography style={{fontWeight: "bold", fontSize: "3em", paddingBottom: "30px", borderBottom: "0.5px solid grey"}}>
                1.250.000
            </Typography>

        </Container>
    )
}
