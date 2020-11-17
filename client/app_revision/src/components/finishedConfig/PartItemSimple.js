import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, IconButton, Grid } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import { useQuery } from "@apollo/client";
import {
	FETCH_CPU_BY_ID,
	FETCH_CPUCooler_BY_ID,
	FETCH_GPU_BY_ID,
	FETCH_MOTHERBOARD_BY_ID,
	FETCH_POWER_SUPPLY_BY_ID,
	FETCH_RAM_BY_ID,
	FETCH_STORAGE_BY_ID,
	FETCH_CASING_BY_ID,
} from "../../graphql/query";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
	button: {
		marginTop: "2px",
		color: "grey",
		fontSize: "0.7em",
		paddingLeft: "10px",
		paddingRight: "10px",
	},

	center: {
		margin: "auto",
		textAlign: "center",
		fontWeight: "bold"
	}
}));

export default function PartItemSimple({ component, ID, total }) {
	const classes = useStyle();
	const history = useHistory();
	const [tokpedPrice, setTokpedPrice] = useState("Proccesing");
	const [bukalapakPrice, setBukalapakPrice] = useState("Processing");

	let query = null;
	switch (component) {
		case "CPU":
			query = FETCH_CPU_BY_ID;
			break;
		case "CPUCooler":
			query = FETCH_CPUCooler_BY_ID;
			break;
		case "GPU":
			query = FETCH_GPU_BY_ID;
			break;
		case "RAM":
			query = FETCH_RAM_BY_ID;
			break;
		case "Storage":
			query = FETCH_STORAGE_BY_ID;
			break;
		case "PowerSupply":
			query = FETCH_POWER_SUPPLY_BY_ID;
			break;
		case "Casing":
			query = FETCH_CASING_BY_ID;
			break;
		case "Motherboard":
			query = FETCH_MOTHERBOARD_BY_ID;
			break;
		default:
			break;
	}

	const { loading, error, data } = useQuery(query, {
		variables: { id: ID, access_token: localStorage.getItem("access_token") },
		fetchPolicy: "network-only"
	});

	useEffect(() => {
		if (data) {
			total(data[`findOne${component}ById`].price, component);
		}
	}, [loading]);

	useEffect(() => {
		if (data) {
			getPrice(data[`findOne${component}ById`].name);
		}
	}, [data]);

	const getPrice = async (input) => {
		try {
			let { data: dataTokped } = await axios({
				url: `http://localhost:3000/tokopedia/checkprice?q=${input}`,
				method: "GET",
			});
			setTokpedPrice(`${dataTokped.result}`);
			let { data: dataBukalapak } = await axios({
				url: `http://localhost:3000/bukalapak/checkprice?q=${input}`,
				method: "GET",
			});
			setBukalapakPrice(`${dataBukalapak.result}`);
		} catch (err) {
			console.log(err);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error in fetch</p>;

	return (
		<Grid
			container
			spacing={1}
			style={{
				paddingTop: "25px",
				paddingBottom: "25px",
				borderBottom: "0.5px solid #d6e0f0",
			}}
		>
			<Grid item xs={3} className={classes.center}>
				<Typography className={classes.name}>
					<b>{data[`findOne${component}ById`].name}</b>
				</Typography>
				<Button
					size={"small"}
					className={classes.button}
					startIcon={<VisibilityIcon />}
					onClick={() => {
						history.push(`/configurator/parts/${component}/${data[`findOne${component}ById`].id}`);
					}}
				>
					See details
				</Button>
			</Grid>
			<Grid item xs={3} className={classes.center} style={{ fontWeight: "bold" }}>
				<Typography className={classes.center}>{`Rp. ${data[`findOne${component}ById`].price.toLocaleString("id")}`}</Typography>
			</Grid>
			<Grid xs={3} className={classes.center}>
				<IconButton
					style={{ color: "#40CB53" }}
					title="Research price in Tokopedia"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
					<Typography className={classes.center}>{tokpedPrice}</Typography>
				</IconButton>
			</Grid>
			<Grid xs={3} className={classes.center}>
				<IconButton
					style={{ color: "#FF2F00" }}
					title="Research price in Shopee"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
					<Typography className={classes.center}>{tokpedPrice}</Typography>
				</IconButton>
			</Grid>
		</Grid>
	);
}
