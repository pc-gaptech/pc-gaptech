import React, { useState } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

import PartItemHome from "../../components/configurator/PartItemHome";
import Image from "material-ui-image";
import tokopedia from "../../assets/tokopedia.png";
import shopee from "../../assets/shopee.png";
import bukalapak from "../../assets/bukalapak.png";
import ButtonChooser from "../../components/configurator/ButtonChooser";
import { config } from "../../graphql/reactiveVars";
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
		maxWidth: "70%",
		height: "auto",
		margin: "auto",
		paddingTop: "33px",
		paddingBottom: "33px",
	},

	center: {
		textAlign: "center",
		margin: "auto",
		fontWeight: "bold",
	},

	header: {
		fontWeight: "bold",
		fontSize: "1.3em",
		marginBottom: "15px",
	},

	componentType: {
		fontWeight: "bold",
		margin: "auto",
	},
}));

export default function Configurator() {
	const classes = useStyle();
	const history = useHistory();
	const [displayedConfig] = useState(config());
	const [isConfigValid, setIsConfigValid] = useState(false);
	const [checkConfig] = useMutation(CHECK_CONFIG);

	const handleCheck = async (e) => {
		e.preventDefault();
		try {
			await checkConfig({
				variables: {
					access_token: localStorage.getItem("access_token"),
					config: {
						...displayedConfig,
					},
				},
			});
			setIsConfigValid(true);
		} catch (err) {
			setIsConfigValid(false);
		}
	};

	const handleNext = async (e) => {
		e.preventDefault();
		if (isConfigValid) {
			history.push("/configurator/finish");
		}
	};

	return (
		<Container>
			<Typography className={classes.header}>Build your PC</Typography>
			{/* SEMENTARA DOANG */}
			<button
				onClick={(e) => {
					handleCheck(e);
				}}
			>
				CHECK CONFIG
			</button>
			{isConfigValid ? <p>CONFIG COMPATIBLE</p> : <p>CONFIG TIDAK COMPATIBLE</p>}
			{isConfigValid ? (
				<button
					onClick={(e) => {
						handleNext(e);
					}}
				>
					Confim Configuration
				</button>
			) : (
				<p></p>
			)}
			<Grid container spacing={1} className={classes.container}>
				<Grid item xs={2} className={classes.componentType}>
					Choose CPU
				</Grid>
				<Grid item xs={10} container>
					<Grid item xs={0}></Grid>
					<Grid item xs={5} className={classes.center}>
						Products
					</Grid>
					<Grid item xs={2} className={classes.center}>
						Add
					</Grid>
					<Grid item xs={2} className={classes.center}>
						Est.Price
					</Grid>
					<Grid item xs={1}>
						<Image
							imageStyle={{ width: "inherit", height: "inherit" }}
							className={classes.logo}
							src={tokopedia}
						/>
					</Grid>
					<Grid item xs={1}>
						<Image
							imageStyle={{ width: "inherit", height: "inherit", margin: "auto" }}
							className={classes.logo}
							src={shopee}
						/>
					</Grid>
					<Grid item xs={1}>
						<Image
							imageStyle={{ width: "inherit", height: "inherit" }}
							className={classes.logo}
							src={bukalapak}
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					CPU
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.CPUId ? (
						<PartItemHome ID={displayedConfig.CPUId} component={"CPU"} />
					) : (
						<ButtonChooser component={"CPU"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Motherboard
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.MotherboardId ? (
						<PartItemHome ID={displayedConfig.MotherboardId} component={"Motherboard"} />
					) : (
						<ButtonChooser component={"Motherboard"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Memory
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.RAMId ? (
						<PartItemHome ID={displayedConfig.MotherboardId} component={"RAM"} />
					) : (
						<ButtonChooser component={"RAM"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Power Supplies
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.PowerSupplyId ? (
						<PartItemHome ID={displayedConfig.PowerSupplyId} component={"PowerSupply"} />
					) : (
						<ButtonChooser component={"PowerSupply"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Video Card
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.GPUId ? (
						<PartItemHome ID={displayedConfig.GPUId} component={"GPU"} />
					) : (
						<ButtonChooser component={"GPU"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Case
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.CasingId ? (
						<PartItemHome ID={displayedConfig.CasingId} component={"Casing"} />
					) : (
						<ButtonChooser component={"Casing"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					CPU Coolers
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.CPUCoolerId ? (
						<PartItemHome ID={displayedConfig.CPUCoolerId} component={"CPUCooler"} />
					) : (
						<ButtonChooser component={"CPUCooler"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Storage
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.StorageId ? (
						<PartItemHome ID={displayedConfig.StorageId} component={"Storage"} />
					) : (
						<ButtonChooser component={"Storage"} />
					)}
				</Grid>
			</Grid>
		</Container>
	);
}
