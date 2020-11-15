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

import { REGISTER } from "../../graphql/mutations";

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

export default function Register() {
	const history = useHistory();
	const classes = useStyles();

	const [input, setInput] = useState({
		username: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	const [registerUser] = useMutation(REGISTER);

	const changeInput = (e) => {
		const { name, value } = e.target;
		setInput({
			...input,
			[name]: value,
		});
	};

	const register = async (e) => {
		console.log(input);
		e.preventDefault();
		try {
			await registerUser({
				variables: {
					user: {
						username: input.username,
						firstname: input.firstname,
						lastname: input.lastname,
						email: input.email,
						password: input.password,
					},
				},
      });
      history.push("/")
		} catch (err) {
			console.log(err);
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
					Registration
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						autoFocus
						onChange={(e) => changeInput(e)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="firstname"
						label="First Name"
						name="firstname"
						autoComplete="firstname"
						autoFocus
						onChange={(e) => changeInput(e)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="lastname"
						label="Last Name"
						name="lastname"
						autoComplete="lastname"
						autoFocus
						onChange={(e) => changeInput(e)}
					/>
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
							register(e);
						}}
					>
						Sign Up
					</Button>
				</form>
			</div>
		</Container>
	);
}
