import React from "react";
import { Box, Typography, Button, IconButton, makeStyles, AppBar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Image from "material-ui-image";
import { useHistory } from "react-router-dom";

import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import gaptech from ".././assets/gaptech.png"
const useStyle = makeStyles((theme) => ({
	menu: {
		color: "white",
		fontSize: "1em",
		fontWeight: "bold",
		letterSpacing: "1px",
		paddingLeft: "50px",
	},
	title: {
		color: "white",
	},
}));
export default function App() {
	const classes = useStyle();
	const history = useHistory();

	return (
		<Box display="flex" bgcolor="black" p={2} alignItems="center">
			<Box>
			<img
			onClick={(e) => {
				e.preventDefault()
				history.push("/")
			}}
			style={{width: "30%", height: "auto"}}
				src={gaptech}
			/>
			</Box>
			<Box style={{ marginLeft: "20px", display: "flex" }}>
			<Button
						startIcon={<HomeIcon />}
						className={classes.menu}
						onClick={(e) => {
							e.preventDefault();
							history.push("/");
						}}
					>
						Home
				</Button>
				<Button
						startIcon={<SettingsInputComponentIcon />}
						className={classes.menu}
						onClick={(e) => {
							e.preventDefault();
							history.push("/configurator");
						}}
					>
						Configurator
				</Button>
				<Button
						startIcon={<FavoriteIcon />}
						className={classes.menu}
						onClick={(e) => {
							e.preventDefault();
							history.push("/favorite");
						}}
					>
						Favorites
				</Button>
				<Button
						startIcon={<VpnKeyIcon />}
						className={classes.menu}
						onClick={(e) => {
							e.preventDefault();
							history.push("/login");
						}}
					>
						Login
				</Button>
				<Button
						startIcon={<PersonAddIcon />}
						className={classes.menu}
						onClick={(e) => {
							e.preventDefault();
							history.push("/register");
						}}
					>
						Register
				</Button>
				<Button
						startIcon={<PowerSettingsNewIcon />}
						className={classes.menu}
						onClick={(e) => {
							e.preventDefault();
							localStorage.clear()
							history.push("/");
						}}
					>
						Logout
				</Button>
			</Box>
			<Box flexGrow={1} textAlign="right">
				<IconButton>
					<MenuIcon />
				</IconButton>
			</Box>
		</Box>
	);
}
