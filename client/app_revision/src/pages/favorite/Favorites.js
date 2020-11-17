import React from "react";
import { Container, CssBaseline, Grid, makeStyles, Typography } from "@material-ui/core";
import CardBuild from "../../components/favorite/CardBuild";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAVORITE_CONFIG } from "../../graphql/query";
import { config } from "../../graphql/reactiveVars";

const useStyle = makeStyles((theme) => ({
	header: {
		fontWeight: "bold",
		fontSize: "1.3em",
		marginBottom: "15px",
		marginTop: "25px"
	},

	top: {
		textAlign: "center",
		backgroundColor: "#f4f4f2",
		padding: "100px"
	},

	quote: {
		fontSize: "2em",
		fontStyle: "italic",
		fontWeight: "bold"
	}
}));
export default function Favorites() {
	const classes = useStyle();
	config({
		name: "BUILD 1",
		CPUId: 0,
		CPUCoolerId: 0,
		MotherboardId: 0,
		GPUId: 0,
		RAMId: 0,
		StorageId: 0,
		PowerSupplyId: 0,
		CasingId: 0,
		rating: 0,
	});
	const { loading, error, data } = useQuery(GET_ALL_FAVORITE_CONFIG, {
		variables: { access_token: localStorage.getItem("access_token") },
	});

	if (loading) return <p>Loading..</p>;
	if (error) return <p>{error}</p>;
	return (
		<Container style={{ marginTop: "20px" }}>
			<CssBaseline/>
			<Grid className={classes.top}>
				<Typography className={classes.quote}>Save your money, build your PC, and conquer the battles.</Typography>
			</Grid>
			<Typography className={classes.header}>Your Favorite Build</Typography>
			{/* {JSON.stringify(data)} */}
			<Grid container spacing={2}>
				{data.getAllFavoritesConfig.map((item) => {
					return <CardBuild item={item} key={item.id} />;
				})}
			</Grid>
		</Container>
	);
}
