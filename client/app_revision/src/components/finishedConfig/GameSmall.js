import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "material-ui-image";

const useStyle = makeStyles((theme) => ({
	grid: {
		marginBottom: "15px",
	},
	text: {
		fontWeight: "bold",
		textAlign: "center",
	},
}));

export default function GameSmall({ game }) {
    const classes = useStyle();
    console.log(game, "MASUK")
	return (
		<Grid item xs={2} className={classes.grid}>
			<Image src={game.picture_url} />
			<Typography className={classes.text}>{game.name}</Typography>
		</Grid>
	);
}
