import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography, IconButton } from "@material-ui/core";

import Image from "material-ui-image";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import axios from "axios";
import { config } from "../graphql/reactiveVars";

const useStyle = makeStyles((theme) => ({
	header: {
		fontWeight: "bold",
	},
	container: {
		paddingTop: "15px",
		paddingBottom: "15px",
		borderBottom: "0.5px solid #e8e8e8",
	},
	center: {
		textAlign: "center",
		margin: "auto",
	},
	button: {
		marginTop: "2px",
		color: "grey",
		fontSize: "0.7em",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
	buttonsave: {
		color: "white",
		backgroundColor: "grey",
		fontSize: "0.7em",
		paddingLeft: "20px",
		paddingRight: "20px",
	},

	name: {
		fontWeight: "bold",
	},
}));

export default function PartItemHome({ component, ID }) {
	const [detail, setDetail] = useState("");

	useEffect(() => {
		console.log("manngil", component)
		axios({
			url: `http://localhost:3000/parts/${component}/${ID}/detail`,
			method: "GET",
			headers: {
				access_token:
					"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJ1c2VyMUB1c2VyLmNvbSIsImlzX2FkbWluIjpmYWxzZSwiaWF0IjoxNjA1NDI2MDI0fQ.GBiVLYiNUE3J26sMxOYi3tb3QkbSQbdTUxLJ3Vn0psk",
			},
		})
			.then(({ data }) => {
				setDetail(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const classes = useStyle();
	return (
		<Grid container spacing={1} className={classes.container}>
			<Grid item xs={1}>
				<Image src={detail.picture_url} />
			</Grid>
			<Grid item xs={4} className={classes.center}>
				<Typography className={classes.name}>
					{detail.name}
				</Typography>
				<Button size={"small"} className={classes.button} startIcon={<VisibilityIcon />}>
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
				>
					Edit
				</Button>
			</Grid>
			<Grid item xs={2} className={classes.center} style={{ fontWeight: "bold" }}>
				{detail.price}
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#40CB53" }}
					title="Research price in Tokopedia"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
				</IconButton>
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#FF2F00" }}
					title="Research price in Shopee"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
				</IconButton>
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#E00034" }}
					title="Research price in Bukalapak"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
}
