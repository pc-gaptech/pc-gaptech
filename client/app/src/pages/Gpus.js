import React from 'react'
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useQuery } from '@apollo/client'

import PartItem from '../components/PartItem'
import Image from 'material-ui-image'
import tokopedia from '../assets/tokopedia.png'
import shopee from '../assets/shopee.png'
import bukalapak from '../assets/bukalapak.png'
import { FETCH_ALL } from "../graphql/queries"

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
    }

}))


export default function Gpus() {
    const classes = useStyle()
    const { loading, error, data } = useQuery(FETCH_ALL)

    if (loading) return <p>Loading..</p>
    if (error) return <p>{error}</p>

    return (
        <Container>
            <Typography className={classes.header}>
                Select Available GPU
            </Typography>
            {/* <p>{JSON.stringify(data.fetchAll.dataPowerSupply)}</p> */}
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
                        imageStyle={{ width: 'inherit', height: 'inherit' }}
                        className={classes.logo}
                        src={tokopedia}
                    />
                </Grid>
                <Grid xs={1}>
                    <Image
                        imageStyle={{ width: 'inherit', height: 'inherit', margin: 'auto' }}
                        className={classes.logo}
                        src={shopee}
                    />
                </Grid>
                <Grid xs={1}>
                    <Image
                        imageStyle={{ width: 'inherit', height: 'inherit' }}
                        className={classes.logo}
                        src={bukalapak}
                    />
                </Grid>
            </Grid>

            {data.fetchAll.dataGPU.map(item => {
                return <PartItem item={item} key={item.id}/>
            })}
        </Container>
    )
}