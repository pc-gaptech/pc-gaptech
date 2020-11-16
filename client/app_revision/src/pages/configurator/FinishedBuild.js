import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Grid, makeStyles } from "@material-ui/core";

import Image from "material-ui-image";
import GameSmall from "../../components/finishedConfig/GameSmall";
import ComponentList from "../../components/finishedConfig/ComponentList";
import SpecTable from "../../components/finishedConfig/SpecTable";

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

	return (
		<React.Fragment>
			<CssBaseline />
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={3} style={{ margin: "auto", textAlign: "center" }}>
						<Image src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
					</Grid>
					<Grid item xs={9} container>
						<Typography variant="h6" style={{ fontWeight: "bold", marginBottom: "50px" }}>
							Supported Games you can play with this build
						</Typography>
						<Grid item xs={12} container spacing={2}>
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
							<GameSmall />
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
