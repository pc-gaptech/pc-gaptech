import React, {useEffect, useState} from 'react'
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useQuery } from '@apollo/client'

import PartItem from '../components/PartItem'
import Image from 'material-ui-image'
import tokopedia from '../assets/tokopedia.png'
import shopee from '../assets/shopee.png'
import bukalapak from '../assets/bukalapak.png'
import { FETCH_ALL } from "../graphql/queries"
import axios from "axios"

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


export default function PowerSupplies() {
    const classes = useStyle()
    // const { loading, error, data } = useQuery(FETCH_ALL)

    // if (loading) return <p>Loading..</p>
    // if (error) return <p>{error}</p>

    const [powerSupplies, setPowerSupplies] = useState("");
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios({
			url: `http://localhost:3000/parts/powerSupply`,
			method: "GET",
			headers: {
				access_token:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMUB1c2VyLmNvbSIsImlzX2FkbWluIjpmYWxzZSwiaWF0IjoxNjA1NDI2MDI0fQ.GBiVLYiNUE3J26sMxOYi3tb3QkbSQbdTUxLJ3Vn0psk",
			},
		})
			.then(({ data }) => {
				setPowerSupplies(data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (loading) return <p>Loading</p>;

    return (
        <Container>
            <Typography className={classes.header}>
                Select Available Power Supplies
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

            {powerSupplies.map(item => {
                return <PartItem item={item} key={item.id} component={"PowerSupplyId"}/>
            })}
        </Container>
    )
}