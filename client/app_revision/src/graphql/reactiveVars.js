import { makeVar } from "@apollo/client";

export const config = makeVar({
	name: "BUILD 1",
	CPUId: 1,
	CPUCoolerId: 1,
	MotherboardId: 1,
	GPUId: 1,
	RAMId: 1,
	StorageId: 1,
	PowerSupplyId: 1,
	CasingId: 1,
});
