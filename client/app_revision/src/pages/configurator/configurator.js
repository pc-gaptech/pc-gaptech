import React, { useState, useEffect } from "react";
import { Button, Container, CssBaseline, Grid, makeStyles, Typography } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import PartItemHome from "../../components/configurator/PartItemHome";
import Image from "material-ui-image";
import tokopedia from "../../assets/tokopedia.png";
import shopee from "../../assets/shopee.png";
import bukalapak from "../../assets/bukalapak.png";
import ButtonChooser from "../../components/configurator/ButtonChooser";
import { config, restriction, configRatingTemp } from "../../graphql/reactiveVars";
import { CHECK_CONFIG } from "../../graphql/mutations";

const useStyle = makeStyles((theme) => ({
	container: {
		paddingTop: "10px",
		paddingBottom: "10px",
		borderTop: "1px solid #bbbfca",
		borderBottom: "1px solid #bbbfca",
		textAlign: "center",
	},
	logo: {
		alignSelf: "center",
		maxWidth: "90%",
		maxHeight: "90%",
		paddingTop: "10px",
		paddingBottom: "10px",
		objectFit: "cover",
	},

	center: {
		textAlign: "center",
		margin: "auto",
		fontWeight: "bold",
	},

	header: {
		fontWeight: "bold",
		fontSize: "1.3em",
		marginTop: "15px",
		marginBottom: "15px",
	},

	componentType: {
		fontWeight: "bold",
		margin: "auto",
	},

	tableHead: {
		fontWeight: "bold",
		letterSpacing: "0.7px",
		fontSize: "1.1em",
	},

	button: {
		backgroundColor: "#ea2c62",
		color: "white",
		fontWeight: "bold",
	},

	buttonConfirm: {
		backgroundColor: "#9ad3bc",
		color: "white",
		fontWeight: "bold",
	},
}));

export default function Configurator() {
	const classes = useStyle();
	const history = useHistory();
	const [displayedConfig] = useState(config());
	const [errorMessage, setErrorMessage] = useState("");
	const [isConfigValid, setIsConfigValid] = useState(false);
	const [checkConfig] = useMutation(CHECK_CONFIG);

	useEffect(() => {
		configRatingTemp({
			rating: 0,
		});
	}, []);

	const handleCheck = async (e) => {
		e.preventDefault();
		try {
			await checkConfig({
				variables: {
					access_token: localStorage.getItem("access_token"),
					config: {
						CPUId: displayedConfig.CPUId,
						CPUCoolerId: displayedConfig.CPUCoolerId,
						MotherboardId: displayedConfig.MotherboardId,
						GPUId: displayedConfig.GPUId,
						RAMId: displayedConfig.RAMId,
						StorageId: displayedConfig.StorageId,
						PowerSupplyId: displayedConfig.PowerSupplyId,
						CasingId: displayedConfig.CasingId,
					},
				},
			});
			setIsConfigValid(true);
		} catch (err) {
			if (err.message === "Invalid Component ID") {
				setErrorMessage("Missing part, Complete Configurator");
			} else {
				setErrorMessage(err.message);
			}
			setTimeout(() => {
				setErrorMessage("");
			}, 5000);
			setIsConfigValid(false);
		}
	};

	const handleNext = async (e) => {
		e.preventDefault();
		if (isConfigValid) {
			history.push("/finished");
		}
	};

	return (
		<Container component="main">
			<CssBaseline />
			<Typography className={classes.header}>Build your PC</Typography>
			{/* SEMENTARA DOANG */}

			<Grid
				xs={12}
				style={{
					backgroundColor: "#f4f4f2",
					padding: "30px",
					marginBottom: "20px",
				}}
			>
				<Button
					className={classes.button}
					size="large"
					onClick={(e) => {
						handleCheck(e);
					}}
				>
					Check Configuration
				</Button>
				{isConfigValid ? (
					<p style={{ color: "green" }}>CONFIGURATION COMPATIBLE</p>
				) : (
					<p style={{ color: "red" }}>{errorMessage}</p>
				)}
				{isConfigValid ? (
					<Button
						className={classes.buttonConfirm}
						onClick={(e) => {
							handleNext(e);
						}}
					>
						Confim Configuration
					</Button>
				) : (
					<p></p>
				)}
			</Grid>
			<Grid container spacing={1} className={classes.container}>
				<Grid item xs={2} className={classes.componentType}>
					<Typography className={classes.tableHead}>Choose Components</Typography>
				</Grid>
				<Grid item xs={10} container style={{ paddingBottom: "-30px" }}>
					{/* <Grid item xs={0}></Grid> */}
					<Grid item xs={4} className={classes.center}>
						<Typography className={classes.tableHead}>Products</Typography>
					</Grid>
					<Grid item xs={2} className={classes.center}>
						<Typography className={classes.tableHead}>Add</Typography>
					</Grid>
					<Grid item xs={2} className={classes.center}>
						<Typography className={classes.tableHead}>Est.Price</Typography>
					</Grid>
					<Grid item xs={2}>
						<img
							imageStyle={{ width: "inherit", height: "inherit" }}
							className={classes.logo}
							src={tokopedia}
						/>
					</Grid>
					{/* <Grid item xs={1}>
						<Image
							imageStyle={{ width: "inherit", height: "inherit", margin: "auto" }}
							className={classes.logo}
							src={shopee}
						/>
					</Grid> */}
					<Grid item xs={2}>
						<img
							imageStyle={{ width: "inherit", height: "inherit" }}
							className={classes.logo}
							src={bukalapak}
						/>
					</Grid>
				</Grid>
			</Grid>
			{Object.entries(displayedConfig).map((key, value) => {
				if (key[0].includes("Id")) {
					let component = key[0].substring(0).slice(0, key[0].length - 2);
					return (
						<Grid container>
							<Grid item xs={2} className={classes.componentType}>
								<Typography className={classes.tableHead}>{component}</Typography>
							</Grid>
							<Grid item xs={10}>
								{key[1] ? (
									<PartItemHome ID={key[1]} component={component} />
								) : (
									<ButtonChooser component={component} />
								)}
							</Grid>
						</Grid>
					);
				}
			})}
		</Container>
	);
}
