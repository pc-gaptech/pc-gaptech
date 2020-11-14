import React from 'react'
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";



import PartItemHome from '../components/PartItemHome'
import Image from 'material-ui-image'

import tokopedia from '../assets/tokopedia.png'
import shopee from '../assets/shopee.png'
import bukalapak from '../assets/bukalapak.png'
import ButtonChooser from '../components/ButtonChooser';


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
        paddingTop: "33px",
        paddingBottom: "33px",
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
                <Grid item xs={2} className={classes.componentType}>
                    Choose CPU
                </Grid>
                <Grid item xs={10} container>
                    <Grid item xs={0}>

                    </Grid>
                    <Grid item xs={5} className={classes.center}>
                        Products
                    </Grid>
                    <Grid item xs={2} className={classes.center}>
                        Add
                    </Grid>
                    <Grid item xs={2} className={classes.center}>
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
            </Grid>
            <Grid container>
                <Grid item xs={2} className={classes.componentType}>
                    CPU
                </Grid>
                <Grid item xs={10}>
                    <PartItemHome/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} className={classes.componentType}>
                    Motherboard
                </Grid>
                <Grid item xs={10}>
                    <PartItemHome/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} className={classes.componentType}>
                    Memory
                </Grid>
                <Grid item xs={10}>
                    <ButtonChooser/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} className={classes.componentType}>
                    Storage
                </Grid>
                <Grid item xs={10}>
                    <ButtonChooser/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} className={classes.componentType}>
                    Video Card
                </Grid>
                <Grid item xs={10}>
                    <ButtonChooser/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={2} className={classes.componentType}>
                    Case
                </Grid>
                <Grid item xs={10}>
                    <ButtonChooser/>
                </Grid>
            </Grid>
        </Container>
    )
}