import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Button, Grid, makeStyles } from "@material-ui/core";

import Image from "material-ui-image";
import GameSmall from "../../components/finishedConfig/GameSmall";
import ComponentList from "../../components/finishedConfig/ComponentList";
import SpecTable from "../../components/finishedConfig/SpecTable";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { SAVE_FAVORITE } from "../../graphql/mutations";
import { GET_ALL_FAVORITE_CONFIG, GET_GAMES_BASED_ON_CONFIG } from "../../graphql/query";
import { config, configRatingTemp } from "../../graphql/reactiveVars";
import { useMutation, useQuery } from "@apollo/client";

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

export default function FinishedBuild() {
	const classes = useStyles();
	const history = useHistory();

	const [addOneFavorite] = useMutation(SAVE_FAVORITE);
	const { loading, error, data } = useQuery(GET_GAMES_BASED_ON_CONFIG, {
		variables: {
			access_token: localStorage.getItem("access_token"),
			configRating: config().rating || configRatingTemp().rating || 1,
		},
	});

	const saveConfig = (e) => {
		e.preventDefault();
		Swal.fire({
			title: "Save Your Configuration",
			input: "text",
			inputLabel: "Name your configuration",
			showCancelButton: true,
		}).then((result) => {
			if (result.isConfirmed) {
				addOneFavorite({
					variables: {
						access_token: localStorage.getItem("access_token"),
						config: {
							name: result.value,
							CPUId: config().CPUId,
							CPUCoolerId: config().CPUCoolerId,
							MotherboardId: config().MotherboardId,
							GPUId: config().GPUId,
							RAMId: config().RAMId,
							StorageId: config().StorageId,
							PowerSupplyId: config().PowerSupplyId,
							CasingId: config().CasingId,
						},
					},
					refetchQueries: [
						{
							query: GET_ALL_FAVORITE_CONFIG,
							variables: { access_token: localStorage.getItem("access_token") },
						},
					],
				});
				history.push("/favorite");
			}
		});
	};

	if (loading) return <p>Loading..</p>;
	if (error) return <p>{error}</p>;

	console.log(data);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={3} style={{ margin: "auto", textAlign: "center" }}>
						<Image src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
						<Button
							onClick={(e) => saveConfig(e)}
							variant="contained"
							color="grey"
							disableElevation
						>
							Add to Favorite
						</Button>
					</Grid>
					<Grid item xs={9} container>
						<Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "50px" }}>
							Supported Games you can play with this build
						</Typography>
						<Grid item xs={12} container spacing={2}>
							{data.getGamesConfig.map((el) => {
								return <GameSmall game={el} />;
							})}
						</Grid>
					</Grid>
					<Grid xs={12} container spacing={2}>
						<Grid item xs={3}>
							<SpecTable />
						</Grid>
						<Grid item xs={9} container>
							<ComponentList />
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
}
