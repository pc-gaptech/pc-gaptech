import React, { useEffect } from "react";
import {
	Avatar,
	Grid,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Typography,
	makeStyles,
} from "@material-ui/core";
import {
	FETCH_CPU_BY_ID,
	FETCH_CPUCooler_BY_ID,
	FETCH_GPU_BY_ID,
	FETCH_MOTHERBOARD_BY_ID,
	FETCH_POWER_SUPPLY_BY_ID,
	FETCH_RAM_BY_ID,
	FETCH_STORAGE_BY_ID,
	FETCH_CASING_BY_ID,
} from "../../graphql/query";
import { useQuery } from "@apollo/client";
import { config } from "../../graphql/reactiveVars";

const useStyle = makeStyles((theme) => ({
	header: {
		fontWeight: "bold",
		fontSize: "1.3em",
		marginBottom: "15px",
	},
	tableTitle: {
		padding: "17px",
		fontWeight: "bold"
	}
}));

export default function SpecTable() {
	const classes = useStyle();

	const configID = JSON.parse(JSON.stringify(config()));
	const { loading: loadingCPU, error: errorCPU, data: dataCPU } = useQuery(FETCH_CPU_BY_ID, {
		variables: { id: configID.CPUId, access_token: localStorage.getItem("access_token") },
	});
	const { loading: loadingGPU, error: errorGPU, data: dataGPU } = useQuery(FETCH_GPU_BY_ID, {
		variables: { id: configID.GPUId, access_token: localStorage.getItem("access_token") },
	});
	const { loading: loadingCPUCooler, error: errorCPUCooler, data: dataCPUCooler } = useQuery(
		FETCH_CPUCooler_BY_ID,
		{
			variables: { id: configID.CPUCoolerId, access_token: localStorage.getItem("access_token") },
		},
	);
	const { loading: loadingMotherboard, error: errorMotherboard, data: dataMotherboard } = useQuery(
		FETCH_MOTHERBOARD_BY_ID,
		{
			variables: { id: configID.MotherboardId, access_token: localStorage.getItem("access_token") },
		},
	);
	const { loading: loadingRAM, error: errorRAM, data: dataRAM } = useQuery(FETCH_RAM_BY_ID, {
		variables: { id: configID.RAMId, access_token: localStorage.getItem("access_token") },
	});
	const { loading: loadingStorage, error: errorStorage, data: dataStorage } = useQuery(
		FETCH_STORAGE_BY_ID,
		{
			variables: { id: configID.StorageId, access_token: localStorage.getItem("access_token") },
		},
	);
	const { loading: loadingCasing, error: errorCasing, data: dataCasing } = useQuery(
		FETCH_CASING_BY_ID,
		{
			variables: { id: configID.CasingId, access_token: localStorage.getItem("access_token") },
		},
	);
	const { loading: loadingPowerSupply, error: errorPowerSupply, data: dataPowerSupply } = useQuery(
		FETCH_POWER_SUPPLY_BY_ID,
		{
			variables: { id: configID.PowerSupplyId, access_token: localStorage.getItem("access_token") },
		},
	);

	if (loadingCPU) return <p>Loading...</p>;
	if (loadingGPU) return <p>Loading...</p>;
	if (loadingRAM) return <p>Loading...</p>;
	if (loadingMotherboard) return <p>Loading...</p>;
	if (loadingStorage) return <p>Loading...</p>;
	if (loadingPowerSupply) return <p>Loading...</p>;
	if (loadingCasing) return <p>Loading...</p>;
	if (loadingCPUCooler) return <p>Loading...</p>;

	if (errorCPU) return <p>Error in fetch</p>;
	if (errorGPU) return <p>Error in fetch</p>;
	if (errorRAM) return <p>Error in fetch</p>;
	if (errorMotherboard) return <p>Error in fetch</p>;
	if (errorStorage) return <p>Error in fetch</p>;
	if (errorPowerSupply) return <p>Error in fetch</p>;
	if (errorCasing) return <p>Error in fetch</p>;
	if (errorCPUCooler) return <p>Error in fetch</p>;

	return (
		<Grid item>
			<Grid
				container
				style={{ backgroundColor: "#43658b", color: "white", fontWeight: "bold", padding: "3px" }}
			>
				<Grid item xs={9}>
					<Typography className={classes.tableTitle}>Specifications</Typography>
				</Grid>
			</Grid>
			<Table style={{ backgroundColor: "#f4f4f2" }}>
				<TableBody>
					<TableRow>
						<TableCell>
							<Avatar alt="spec pc" src={dataCPU.findOneCPUById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>CPU</Typography>
							<Typography>{dataCPU.findOneCPUById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataMotherboard.findOneMotherboardById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>Motherboard</Typography>
							<Typography>{dataMotherboard.findOneMotherboardById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataGPU.findOneGPUById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>GPU</Typography>
							<Typography>{dataGPU.findOneGPUById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataRAM.findOneRAMById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>Memory</Typography>
							<Typography>{dataRAM.findOneRAMById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataCPUCooler.findOneCPUCoolerById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>CPU Cooler</Typography>
							<Typography>{dataCPUCooler.findOneCPUCoolerById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataCasing.findOneCasingById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>Casing</Typography>
							<Typography>{dataCasing.findOneCasingById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataStorage.findOneStorageById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>Storage</Typography>
							<Typography>{dataStorage.findOneStorageById.name}</Typography>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>
							<Avatar alt="Remy Sharp" src={dataPowerSupply.findOnePowerSupplyById.picture_url} />
						</TableCell>
						<TableCell>
							<Typography style={{ fontWeight: "bold" }}>Power Supply</Typography>
							<Typography>{dataPowerSupply.findOnePowerSupplyById.name}</Typography>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Grid>
	);
}
