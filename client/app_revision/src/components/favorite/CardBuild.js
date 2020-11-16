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
    Typography
} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardBuild(props) {
    const classes = useStyles()
    const {item} = props
    return (
        <Grid item xs={3}>
            
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://cdna.pcpartpicker.com/static/forever/images/userbuild/332290.409bd4e86ecf2f0f9738c17bd34faeed.512.jpg"
                        title="PC Build"
                    />
                    <CardContent>
                        <Typography style={{fontWeight: "bold"}} gutterBottom variant="h6" component="h2">
                            Ryzen and Amd Build
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Typography variant="body2" color="textSecondary" component="p"><b>CPU:</b> Intel 9</Typography>
                            <Typography variant="body2" color="textSecondary" component="p"><b>CPU:</b> Intel 9</Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ borderTop: "0.4px solid #e8e8e8" }}>
                    <IconButton aria-label="favorite">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="favorite">
                        <VisibilityIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}