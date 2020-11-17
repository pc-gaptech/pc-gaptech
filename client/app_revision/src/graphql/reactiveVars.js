import { makeVar } from "@apollo/client";

export const config = makeVar({
	name: "BUILD 1",
	CPUId: 0,
	MotherboardId: 0,
	GPUId: 0,
	RAMId: 0,
	StorageId: 0,
	PowerSupplyId: 0,
	CasingId: 0,
	CPUCoolerId: 0,
	rating: 0,
});

export const configRatingTemp = makeVar({
	rating: 0,
});

export const restriction = makeVar({
	socket: "",
	chipset: "",
	total_power: 0,
	form_factor: "",
});
