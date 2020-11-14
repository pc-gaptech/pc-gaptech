import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyle = makeStyles((theme) => ({
    buttonAdd: {
        color: "white",
        backgroundColor: "grey",
        fontSize: "0.7em",
        paddingLeft: "50px",
        paddingRight: "50px"
    },
}))

export default function ButtonChooser() {
    const classes = useStyle()
    return(
        <Button
        style={{marginTop: "23px", marginBottom: "23px", backgroundColor: "blue"}}
        variant="contained"
        color="blue"
        size="medium"
        className={classes.buttonAdd}
        startIcon={<AddCircleIcon />}
        >
            Add Component
        </Button>
    )
}