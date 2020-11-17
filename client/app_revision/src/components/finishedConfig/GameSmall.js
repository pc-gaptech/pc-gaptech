import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Image from "material-ui-image";

const useStyle = makeStyles((theme) => ({
	grid: {
		marginBottom: "15px",
		padding: "1px",
		margin: "3px",
		border: "0.1px solid #e8e8e8",
		backgroundColor: "#fbdcc4",
		// color: "white"
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
