import React from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "material-ui-image"

const useStyle = makeStyles((theme) => ({
    grid: {
        marginBottom: "15px"
    },
    text: {
        fontWeight: "bold",
        textAlign: "center"
    }
}))

export default function GameSmall() {
    const classes = useStyle()
    return(
            <Grid item xs={2} className={classes.grid}>
                <Image
                    src="https://steamcdn-a.akamaihd.net/steam/spotlights/b00f76318fc72742db5fdddf/spotlight_image_english.jpg?t=1605190408"           
                />
                <Typography className={classes.text}>
                    Dota 7
                </Typography>
            </Grid>
    )
}