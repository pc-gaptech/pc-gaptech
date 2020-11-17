import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Image from "material-ui-image";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
import axios from "axios";

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
	const classes = useStyle();
	const history = useHistory();
	const [tokpedPrice, setTokpedPrice] = useState("Processing");
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
		variables: { id: +ID, access_token: localStorage.getItem("access_token") },
	});

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

	const handleDetail = (e) => {
		e.preventDefault();
		history.push(`/configurator/parts/${component}`);
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error in fetch</p>;

	return (
		<Grid container spacing={1} className={classes.container}>
			<Grid item xs={1}>
				<Image src={data[`findOne${component}ById`].picture_url} />
			</Grid>
			<Grid item xs={4} className={classes.center}>
				<Typography className={classes.name}>{data[`findOne${component}ById`].name}</Typography>
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
			<Grid item xs={2} className={classes.center}>
				<Button
					variant="contained"
					color="primary"
					size="medium"
					className={classes.buttonsave}
					startIcon={<AddCircleIcon />}
					onClick={(e) => {
						handleDetail(e);
					}}
				>
					Edit
				</Button>
			</Grid>
			<Grid item xs={2} className={classes.center} style={{ fontWeight: "bold" }}>
				{`Rp. ${data[`findOne${component}ById`].price.toLocaleString("id")}`}
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#40CB53" }}
					title="Research price in Tokopedia"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
					<Typography>{tokpedPrice}</Typography>
				</IconButton>
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#FF2F00" }}
					title="Research price in Shopee"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
					<Typography>{bukalapakPrice}</Typography>
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
