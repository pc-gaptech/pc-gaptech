import { Avatar, Grid, Table, TableBody, TableRow, TableCell, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    header: {
        fontWeight: "bold",
        fontSize: "1.3em",
        marginBottom: "15px"
    },

}))

export default function SpecTable() {
    const classes = useStyle()
    return (
        <Grid item>
            <Grid container style={{ backgroundColor: "black", color: "white", fontWeight: "bold", padding: "3px" }}>
                <Grid item xs={3}>
                    <Avatar alt="spec pc" src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
                </Grid>
                <Grid item xs={9}>
                    <Typography>
                        PC Sultan Spec
            </Typography>
                    <Typography>By Hawk</Typography>
                </Grid>
            </Grid>
            <Table style={{ backgroundColor: "#f4f4f2" }}>
                <TableBody>
                    <TableRow>
                        <Typography style={{ fontWeight: "bold" }}>Specifications</Typography>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Avatar alt="spec pc" src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
                        </TableCell>
                        <TableCell>
                            <Typography style={{ fontWeight: "bold" }}>CPU</Typography>
                            <Typography>Note that the development build</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Avatar alt="Remy Sharp" src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
                        </TableCell>
                        <TableCell>
                            <Typography style={{ fontWeight: "bold" }}>CPU</Typography>
                            <Typography>Note that the development build</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Avatar alt="Remy Sharp" src="https://cdna.pcpartpicker.com/static/forever/images/product/c7baf2c9c9cc15ae23adb24c2f4316fc.256p.jpg" />
                        </TableCell>
                        <TableCell>
                            <Typography style={{ fontWeight: "bold" }}>CPU</Typography>
                            <Typography>Note that the development build</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Grid>

    )

}