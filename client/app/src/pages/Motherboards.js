import React, {useEffect, useState} from 'react'
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useQuery } from '@apollo/client'

import PartItem from '../components/PartItem'
import Image from 'material-ui-image'
import tokopedia from '../assets/tokopedia.png'
import shopee from '../assets/shopee.png'
import bukalapak from '../assets/bukalapak.png'

import axios from 'axios'


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

export default function Motherboards() {
    const classes = useStyle()
    const [result, setResult] = useState({})

    useEffect(() => {
        axios.get("http://localhost:3001/parts/motherboard")
            .then(({data}) => {
                setResult(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            {JSON.stringify(result)}
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
            
            {result.map(item => {
                return <PartItem item={item} key={item.id}/>
            })}
        </Container>
    )
}