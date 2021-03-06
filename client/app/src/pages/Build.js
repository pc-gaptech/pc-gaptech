import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

import PartItemHome from "../components/PartItemHome";
import Image from "material-ui-image";
import tokopedia from "../assets/tokopedia.png";
import shopee from "../assets/shopee.png";
import bukalapak from "../assets/bukalapak.png";
import ButtonChooser from "../components/ButtonChooser";
import { config } from "../graphql/reactiveVars";

import axios from "axios";

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

export default function Build() {
	const classes = useStyle();
	const [displayedConfig, setDisplayedConfig] = useState(config());

	return (
		<Container>
			<Typography className={classes.header}>Build your PC</Typography>
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
						<PartItemHome ID={displayedConfig.CPUId} component={"cpu"} />
					) : (
						<ButtonChooser component={"cpus"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Motherboard
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.MotherboardId ? (
						<PartItemHome ID={displayedConfig.MotherboardId} component={"motherboard"} />
					) : (
						<ButtonChooser component={"motherboards"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Memory
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.RAMId ? (
						<PartItemHome ID={displayedConfig.MotherboardId} component={"ram"} />
					) : (
						<ButtonChooser component={"rams"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Power Supplies
				</Grid>
				<Grid item xs={10}>
					{displayedConfig.PowerSupplyId ? (
						<PartItemHome ID={displayedConfig.PowerSupplyId} component={"powerSupply"} />
					) : (
						<ButtonChooser component={"powersupplies"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Video Card
				</Grid>
				<Grid item xs={10}>
				{displayedConfig.GPUId ? (
						<PartItemHome ID={displayedConfig.GPUId} component={"gpu"} />
					) : (
						<ButtonChooser component={"gpus"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Case
				</Grid>
				<Grid item xs={10}>
				{displayedConfig.CasingId ? (
						<PartItemHome ID={displayedConfig.CasingId} component={"casing"} />
					) : (
						<ButtonChooser component={"casings"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					CPU Coolers
				</Grid>
				<Grid item xs={10}>
				{displayedConfig.CPUCoolerId ? (
						<PartItemHome ID={displayedConfig.CPUCoolerId} component={"cpucooler"} />
					) : (
						<ButtonChooser component={"cpucoolers"} />
					)}
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={2} className={classes.componentType}>
					Storage
				</Grid>
				<Grid item xs={10}>
				{displayedConfig.StorageId ? (
						<PartItemHome ID={displayedConfig.StorageId} component={"storage"} />
					) : (
						<ButtonChooser component={"storages"} />
					)}
				</Grid>
			</Grid>
		</Container>
	);
}
