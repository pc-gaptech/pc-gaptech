import React, { useEffect, useState } from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { config } from "../../graphql/reactiveVars";

import PartItemSimple from "./PartItemSimple";
import Image from "material-ui-image";
import tokopedia from "../../assets/tokopedia.png";
import shopee from "../../assets/shopee.png";

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
		paddingTop: "30px",
		paddingBottom: "30px",
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

	list: {
		paddingTop: "20px",
		paddingBottom: "20px",
		borderBottom: "0.1px solid grey",
	},
}));

export default function Build() {
	const classes = useStyle();
	const [displayedConfig] = useState(config());
	const [totalPrice, setTotalPrice] = useState(0);
	const [individualPrice, setIndividualPrice] = useState({
		CPU: 0,
		CPUCooler: 0,
		GPU: 0,
		RAM: 0,
		Storage: 0,
		PowerSupply: 0,
		Casing: 0,
		Motherboard: 0,
	});

	const handleTotal = (price, componentName) => {
		console.log("called", componentName)
		let newSetIndividualPrice = JSON.parse(JSON.stringify(individualPrice));
		newSetIndividualPrice[componentName] = price;
		setIndividualPrice(newSetIndividualPrice);
	};

	useEffect(() => {
		let total = 0;
		for (const componentName in individualPrice) {
			total += individualPrice[componentName];
		}
		setTotalPrice(total);
		console.log(total, "hahaha")
	}, [individualPrice]);

	return (
		<Container>
			<Typography className={classes.header}>Build your PC</Typography>
			<Grid container spacing={1} className={classes.container}>
				<Grid item xs={4} className={classes.center}>
					Products
				</Grid>
				<Grid item xs={4} className={classes.center}>
					Est.Price
				</Grid>
				<Grid item xs={2}>
					<Image
						imageStyle={{ width: "inherit", height: "inherit" }}
						className={classes.logo}
						src={tokopedia}
					/>
				</Grid>
				<Grid item xs={2}>
					<Image
						imageStyle={{ width: "inherit", height: "inherit", margin: "auto" }}
						className={classes.logo}
						src={shopee}
					/>
				</Grid>
			</Grid>
			<PartItemSimple ID={displayedConfig.CPUId} component={"CPU"} total={handleTotal} />
			<PartItemSimple ID={displayedConfig.GPUId} component={"GPU"} total={handleTotal} />
			<PartItemSimple
				ID={displayedConfig.MotherboardId}
				component={"Motherboard"}
				total={handleTotal}
			/>
			<PartItemSimple
				ID={displayedConfig.CPUCoolerId}
				component={"CPUCooler"}
				total={handleTotal}
			/>
			<PartItemSimple ID={displayedConfig.RAMId} component={"RAM"} total={handleTotal} />
			<PartItemSimple ID={displayedConfig.StorageId} component={"Storage"} total={handleTotal} />
			<PartItemSimple ID={displayedConfig.CasingId} component={"Casing"} total={handleTotal} />
			<PartItemSimple
				ID={displayedConfig.PowerSupplyId}
				component={"PowerSupply"}
				total={handleTotal}
			/>

			<Typography style={{ style: "20px", marginBottom: "-10px", marginTop: "30px" }}>
				Total
			</Typography>
			<Typography
				style={{
					fontWeight: "bold",
					fontSize: "3em",
					paddingBottom: "30px",
					borderBottom: "0.5px solid grey",
				}}
			>
				{`Rp. ${totalPrice.toLocaleString("id")}`}
			</Typography>
		</Container>
	);
}
