import React, { useState, useEffect } from "react";
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
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

	const [pictures, setPicture] = useState([]);

	const [addOneFavorite] = useMutation(SAVE_FAVORITE);
	const { loading, error, data } = useQuery(GET_GAMES_BASED_ON_CONFIG, {
		variables: {
			access_token: localStorage.getItem("access_token"),
			configRating: config().rating || configRatingTemp().rating || 10,
		},
	});

	useEffect(
		() => () => {
			config({
				name: "BUILD 1",
				CPUId: 3,
				MotherboardId: 5,
				GPUId: 3,
				RAMId: 3,
				StorageId: 3,
				PowerSupplyId: 3,
				CasingId: 3,
				CPUCoolerId: 3,
				rating: 0,
			});
		},
		[],
	);

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

	const addPicture = (newPicture) => {
		setPicture(newPicture);
	};

	if (loading) return <p>Loading..</p>;
	if (error) return <p>{error}</p>;

	console.log(data);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container style={{ marginTop: "25px" }}>
				<Grid container spacing={2}>
					<Grid item xs={3} style={{ margin: "auto", textAlign: "center" }}>
						<Carousel>
							{pictures.map((el) => {
								return <Image src={el} />;
							})}
						</Carousel>
						<Button
							iconStart={<FavoriteIcon />}
							onClick={(e) => saveConfig(e)}
							variant="contained"
							style={{ backgroundColor: "#f5a25d", color: "white", fontWeight: "bold" }}
							disableElevation
						>
							Add to Favorite
						</Button>
					</Grid>
					<Grid item xs={9} container>
						<Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "20px" }}>
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
							<SpecTable addPicture={addPicture}/>
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
