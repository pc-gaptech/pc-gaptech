import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography, IconButton } from "@material-ui/core";

import Image from "material-ui-image";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { config, restriction } from "../../graphql/reactiveVars";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	header: {
		fontWeight: "bold",
	},
	container: {
		paddingTop: "5px",
		paddingBottom: "5px",
		borderBottom: "0.5px solid #e8e8e8",
	},
	center: {
		textAlign: "center",
		margin: "auto",
	},

	button: {
		marginTop: "2px",
		color: "grey",
		fontSize: "0.7em",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
	buttonsave: {
		color: "white",
		backgroundColor: "grey",
		fontSize: "0.7em",
		paddingLeft: "20px",
		paddingRight: "20px",
	},

	name: {
		fontWeight: "bold",
	},
}));

export default function PartItem(props) {
	const { item, component } = props;
	const classes = useStyle();
	const history = useHistory();

	const handleAddtoConfig = (e) => {
		e.preventDefault(e);
		let newConfig = JSON.parse(JSON.stringify(config()));
		newConfig[`${component}Id`] = +item.id;
		config(newConfig);

		let newRestriction = JSON.parse(JSON.stringify(restriction()));
		switch (component) {
			case "CPU":
				newRestriction.socket = item.socket;
				newRestriction.total_power += item.power_draw;
				restriction(newRestriction);
				break;
			case "CPUCooler":
				newRestriction.socket = item.socket;
				restriction(newRestriction);
				break;
			case "Casing":
				newRestriction.form_factor = item.form_factor;
				restriction(newRestriction);
				break;
			case "Motherboard":
				newRestriction.chipset = item.chipset;
				newRestriction.form_factor = item.form_factor;
				newRestriction.total_power += item.power_draw;
				restriction(newRestriction);
				break;
			default:
				break;
		}

		history.push("/configurator");
	};

	return (
		<Grid container spacing={1} className={classes.container}>
			<Grid item xs={1}>
				<Image src={item.picture_url} />
			</Grid>
			<Grid item xs={4} className={classes.center}>
				<Typography className={classes.name}>{item.name}</Typography>
				<Button
					size={"small"}
					className={classes.button}
					startIcon={<VisibilityIcon />}
					onClick={() => {
						history.push(`/configurator/parts/${component}/${item.id}`);
					}}
				>
					See details
				</Button>
			</Grid>
			<Grid item xs={2} className={classes.center}>
				<Button
					variant="contained"
					color="primary"
					size="medium"
					className={classes.buttonsave}
					startIcon={<AddCircleIcon />}
					onClick={(e) => {
						handleAddtoConfig(e);
					}}
				>
					Add
				</Button>
			</Grid>
			<Grid item xs={2} className={classes.center} style={{ fontWeight: "bold" }}>
				{`Rp. ${item.price.toLocaleString("id")}`}
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#40CB53" }}
					title="Research price in Tokopedia"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
				</IconButton>
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<a href={`https://www.tokopedia.com/search?st=product&q=${item.name}`}>
					<IconButton
						style={{ color: "#FF2F00" }}
						title="Research price in Shopee"
						aria-label="add to shopping cart"
					>
						<AddShoppingCartIcon />
					</IconButton>
				</a>
			</Grid>
			<Grid item xs={1} className={classes.center}>
				<IconButton
					style={{ color: "#E00034" }}
					title="Research price in Bukalapak"
					aria-label="add to shopping cart"
				>
					<AddShoppingCartIcon />
				</IconButton>
			</Grid>
		</Grid>
	);
}
