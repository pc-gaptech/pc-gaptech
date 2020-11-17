import React, { useState, useEffect } from "react";
import { Container, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Select from "react-select";
import { config } from "../../graphql/reactiveVars";
import { FECTH_GAMES } from "../../graphql/gamesQuery";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { useHistory } from "react-router-dom";

function DefaultConfig() {
	const [options, setOptions] = useState([]);
	const [pickedGames, setPickedGames] = useState("");
	const history = useHistory();

	const { loading, error, data } = useQuery(FECTH_GAMES, {
		variables: {
			access_token: localStorage.getItem("access_token"),
		},
	});

	const classes = useStyle();

	function goToDefault(e) {
		e.preventDefault();
		let result = pickedGames.map((el) => {
			return el.value;
		});
		setPickedGames(result.join(","));
		console.log(result, "result");
		axios({
			url: `http://localhost:3000/recommendpc?gamesId=${result.join(",")}`,
			headers: {
				"content-type": "application/json",
				access_token: localStorage.getItem("access_token"),
			},
			method: "GET",
		})
			.then(({ data }) => {
				const newConfig = {
					name: data.name,
					CPUId: data.CPUId,
					CPUCoolerId: data.CPUCoolerId,
					MotherboardId: data.MotherboardId,
					GPUId: data.GPUId,
					RAMId: data.RAMId,
					StorageId: data.StorageId,
					PowerSupplyId: data.PowerSupplyId,
					CasingId: data.CasingId,
					rating: data.rating,
				};
				config(newConfig);
				history.push("/finished");
			})
			.catch((err) => {
				console.log(err);
			});
	}

	function pickGames(e) {
		setPickedGames(e);
	}

	useEffect(() => {
		if (data) {
			let games = data.getGames.map((el) => {
				return { value: el.id, label: el.name };
			});
			setOptions(games);
		}
	}, [data]);

	if (loading) return <p>Loading..</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<Container>
				<h1>Select Games</h1>
				<Select onChange={pickGames} options={options} isMulti />
				<Button
					style={{backgroundColor: "red", color: "white", fontWeight: "bold"}}
					variant="outlined"
					className={classes.button}
					onClick={(e) => {
						goToDefault(e);
					}}
				>
					Get Recomended Configuration
				</Button>
			</Container>
		</div>
	);
}

const useStyle = makeStyles((theme) => ({
	media: {
		width: "inherice",
		height: 200,
	},
	button: {
		marginTop: 10,
		width: 400,
		height: 45,
	},
}));

export default DefaultConfig;
