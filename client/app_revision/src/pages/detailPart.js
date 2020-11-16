import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
	Grid,
	makeStyles,
	TableContainer,
	Table,
	TableCell,
	TableBody,
	TableRow,
	Button,
} from "@material-ui/core";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SaveIcon from "@material-ui/icons/Save";

import Image from "material-ui-image";

import tokopedia from "../assets/tokopedia.png";
import shopee from "../assets/shopee.png";
import bukalapak from "../assets/bukalapak.png";

import { useParams } from "react-router-dom";
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
} from "../graphql/query";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	price: {
		fontWeight: "bold",
		fontSize: "2em",
		backgroundColor: "#f8efd4",
		textAlign: "center",
		margin: "auto",
		padding: "10px",
		marginBottom: "20px",
		width: "100%",
		verticalAlign: "middle",
	},
	logo: {
		maxWidth: "70%",
		height: "auto",
		margin: "auto",
	},
	button: {
		margin: "auto",
		textAlign: "center",
	},
}));

export default function DetailCpu() {
	const classes = useStyles();
	const { id, component } = useParams();

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
		variables: { id: +id, access_token: localStorage.getItem("access_token") },
	});

	if (loading) return <p>Loading..</p>;
	if (error) return <p>{error}</p>;

	const partData = [];
	for (const part in data[`findOne${component}ById`]) {
		if (part !== "__typename" && part !== "id" && part !== "picture_url") {
			partData.push({
				property: part,
				value: data[`findOne${component}ById`][part],
			});
		}
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Container>
				{/* <p>{JSON.stringify(data[`findOne${component}ById`])}</p> */}
				<Grid container spacing={2} style={{ marginBottom: "50px" }}>
					<Grid item xs={3} style={{ margin: "auto", textAlign: "center" }}>
						<Image src={data[`findOne${component}ById`].picture_url} />
						<Button
							variant="contained"
							color="primary"
							size="large"
							className={classes.button}
							startIcon={<SaveIcon />}
						>
							Add to Your Build
						</Button>
					</Grid>
					<Grid item xs={9}>
						<Typography variant="h5" style={{ fontWeight: "bold", marginBottom: "50px" }}>
							{data[`findOne${component}ById`].name}
						</Typography>
						<Grid item xs={12} container spacing={2}>
							<Grid item xs={8}>
								<TableContainer>
									<Table className={classes.table} size="small" aria-label="a dense table">
										<TableBody>
											<TableRow>
												<TableCell align="left" style={{ fontWeight: "bold", fontSize: "1.2em" }}>
													Descriptions
												</TableCell>
												<TableCell align="left"></TableCell>
											</TableRow>
											{partData.map((el) => {
												return (
													<TableRow>
														<TableCell align="left">{el.property}</TableCell>
														<TableCell align="left">{el.value}</TableCell>
													</TableRow>
												);
											})}
										</TableBody>
									</Table>
								</TableContainer>
							</Grid>
							<Grid item xs={4} container>
								<Grid item xs={12} container>
									<Typography className={classes.price}>
										Rp.{data[`findOne${component}ById`].price}
									</Typography>
								</Grid>
								<Grid item xs={12} container>
									<Grid item xs={6} style={{ padding: "0" }}>
										<Typography style={{ fontWeight: "bold" }}>Tokopedia</Typography>
										<Image
											imageStyle={{ width: "inherit", height: "inherit" }}
											className={classes.logo}
											src={tokopedia}
											style={{ paddingTop: "0px" }}
										/>
									</Grid>
									<Grid item xs={6}>
										<Button
											variant="contained"
											style={{ backgroundColor: "green", color: "white" }}
											size="small"
											className={classes.button}
											startIcon={<AddShoppingCartIcon />}
										>
											See Price
										</Button>
									</Grid>
								</Grid>
								<Grid item xs={12} container style={{ padding: "0px", margin: "0px" }}>
									<Grid item xs={6} style={{ padding: "0px", margin: "0px" }}>
										<Image
											imageStyle={{ width: "inherit", height: "inherit" }}
											className={classes.logo}
											src={shopee}
											style={{ paddingTop: "0px" }}
										/>
									</Grid>
									<Grid item xs={6} style={{ padding: "0px" }}>
										<Button
											variant="contained"
											style={{ backgroundColor: "orange", color: "white", paddingBottom: "0px" }}
											size="small"
											className={classes.button}
											startIcon={<AddShoppingCartIcon />}
										>
											See Price
										</Button>
									</Grid>
								</Grid>
								<Grid item xs={12} container>
									<Grid item xs={6}>
										<Image
											imageStyle={{ width: "inherit", height: "inherit" }}
											className={classes.logo}
											src={bukalapak}
											style={{ paddingTop: "0px" }}
										/>
									</Grid>
									<Grid item xs={6}>
										<Button
											variant="contained"
											style={{ backgroundColor: "red", color: "white" }}
											size="small"
											className={classes.button}
											startIcon={<AddShoppingCartIcon />}
										>
											See Price
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
