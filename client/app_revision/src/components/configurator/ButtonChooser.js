import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
	buttonAdd: {
		color: "white",
		backgroundColor: "grey",
		fontSize: "0.7em",
		paddingLeft: "50px",
		paddingRight: "50px",
	},
}));

export default function ButtonChooser({ component }) {
	const history = useHistory();
	const handleChooseParts = (e) => {
		e.preventDefault();
		history.push(`/configurator/parts/${component}`);
	};
	const classes = useStyle();
	return (
		<Button
			style={{ marginTop: "23px", marginBottom: "23px", backgroundColor: "#495464" }}
			variant="contained"
			color="white"
			size="medium"
			className={classes.buttonAdd}
			startIcon={<AddCircleIcon />}
			onClick={(e) => {
				handleChooseParts(e);
			}}
		>
			Add Component
		</Button>
	);
}
