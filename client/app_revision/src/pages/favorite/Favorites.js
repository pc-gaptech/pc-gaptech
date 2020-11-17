import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CardBuild from "../../components/favorite/CardBuild";
import { useQuery } from "@apollo/client";
import { GET_ALL_FAVORITE_CONFIG } from "../../graphql/query";
import { config } from "../../graphql/reactiveVars";

const useStyle = makeStyles((theme) => ({
	header: {
		fontWeight: "bold",
		fontSize: "1.3em",
		marginBottom: "15px",
	},
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
