import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { LOGIN } from "../../graphql/mutations";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Login() {
	const history = useHistory();
	const classes = useStyles();

	const [input, setInput] = useState({
		email: "",
		password: "",
	});
	const [isWrongPassword, setIsWrongPassword] = useState(false);
	const [loginUser] = useMutation(LOGIN);

	const changeInput = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const login = async (e) => {
		e.preventDefault();
		try {
			const { data } = await loginUser({
				variables: {
					user: {
						email: input.email,
						password: input.password,
					},
				},
			});
			localStorage.setItem("access_token", data.login.access_token);
			history.push("/");
		} catch (err) {
			setIsWrongPassword(true);
			setTimeout(() => {
				setIsWrongPassword(false);
			}, 2000);
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				{isWrongPassword ? <p>Wrong Password or Email</p> : <p></p>}
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(e) => changeInput(e)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(e) => changeInput(e)}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={(e) => {
							login(e);
						}}
					>
						Sign In
					</Button>
				</form>
			</div>
		</Container>
	);
}
