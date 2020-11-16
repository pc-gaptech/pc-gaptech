import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	IconButton,
	makeStyles,
	Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { useMutation } from "@apollo/client";
import { DELETE_ONE_FAVORITE } from "../../graphql/mutations";
import { GET_ALL_FAVORITE_CONFIG } from "../../graphql/query";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

export default function CardBuild(props) {
	const classes = useStyles();
	const { item } = props;

	const [deleteOneFavorite] = useMutation(DELETE_ONE_FAVORITE);

	const handleDelete = (e) => {
		e.preventDefault();
		deleteOneFavorite({
			variables: {
				access_token: localStorage.getItem("access_token"),
				id: +item.id,
			},
			refetchQueries: [
				{
					query: GET_ALL_FAVORITE_CONFIG,
					variables: { access_token: localStorage.getItem("access_token") },
				},
			],
		});
	};

	return (
		<Grid item xs={3}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={item.GPU.picture_url} title="PC Build" />
					<CardContent>
						<Typography style={{ fontWeight: "bold" }} gutterBottom variant="h6" component="h2">
							{item.name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							<Typography variant="body2" color="textSecondary" component="p">
								<b>CPU:</b> {`${item.CPU.name}/ ${item.CPU.core_count} core`}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								<b>GPU:</b> {item.GPU.name}
							</Typography>
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions style={{ borderTop: "0.4px solid #e8e8e8" }}>
					<IconButton aria-label="favorite">
						<DesktopWindowsIcon />
					</IconButton>
					<IconButton
						onClick={(e) => {
							handleDelete(e);
						}}
						aria-label="favorite"
					>
						<DeleteIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
}
