import { gql } from "@apollo/client";

export const FETCH_ALL = gql`
	query fetchAll($access_token: String!) {
		fetchAll(access_token: $access_token) {
			dataCPU {
				id
				name
				socket
				chipset
				TDP
				manufacturer
				power_draw
				core_count
				isIGPU
				max_rating
				price
				picture_url
			}
			dataRAM {
				id
				name
				memory_type
				chipset
				manufacturer
				power_draw
				memory_speed
				price
				picture_url
			}
			dataPowerSupply {
				id
				name
				efficiency
				max_power
				manufacturer
				price
				picture_url
			}
			dataMotherboard {
				id
				name
				socket
				chipset
				form_factor
				manufacturer
				power_draw
				price
				picture_url
			}
			dataCPUCooler {
				id
				name
				socket
				TDP
				manufacturer
				power_draw
				price
				picture_url
			}
			dataCasing {
				id
				name
				form_factor
				manufacturer
				price
				picture_url
			}
			dataStorage {
				id
				name
				capacity
				storage_type
				power_draw
				manufacturer
				price
				picture_url
			}
			dataGPU {
				id
				name
				power_draw
				manufacturer
				GPU_chipset
				price
				rating
				picture_url
			}
		}
	}
`;

export const FETCH_CPU_BY_ID = gql`
	query fetchCpuById($access_token: String!, $id: Int!) {
		findOneCPUById(id: $id, access_token: $access_token) {
			id
			name
			socket
			chipset
			TDP
			manufacturer
			power_draw
			core_count
			isIGPU
			max_rating
			price
			picture_url
		}
	}
`;

export const FETCH_CASING_BY_ID = gql`
	query fetchCasingById($access_token: String!, $id: Int!) {
		findOneCasingById(id: $id, access_token: $access_token) {
			id
			name
			form_factor
			manufacturer
			price
			picture_url
		}
	}
`;

export const FETCH_CPUCooler_BY_ID = gql`
	query fetchCPUCoolerById($access_token: String!, $id: Int!) {
		findOneCPUCoolerById(id: $id, access_token: $access_token) {
			id
			name
			socket
			TDP
			manufacturer
			power_draw
			price
			picture_url
		}
	}
`;

export const FETCH_GPU_BY_ID = gql`
	query fetchGPUById($access_token: String!, $id: Int!) {
		findOneGPUById(id: $id, access_token: $access_token) {
			id
			name
			power_draw
			manufacturer
			GPU_chipset
			price
			rating
			picture_url
		}
	}
`;

export const FETCH_RAM_BY_ID = gql`
	query fetchRAMById($access_token: String!, $id: Int!) {
		findOneRAMById(id: $id, access_token: $access_token) {
			id
			name
			memory_type
			chipset
			manufacturer
			power_draw
			memory_speed
			price
			picture_url
		}
	}
`;

export const FETCH_MOTHERBOARD_BY_ID = gql`
	query fetchMotherboardById($access_token: String!, $id: Int!) {
		findOneMotherboardById(id: $id, access_token: $access_token) {
			id
			name
			socket
			chipset
			form_factor
			manufacturer
			power_draw
			price
			picture_url
		}
	}
`;

export const FETCH_POWER_SUPPLY_BY_ID = gql`
	query fetchPowerSupplyById($access_token: String!, $id: Int!) {
		findOnePowerSupplyById(id: $id, access_token: $access_token) {
			id
			name
			efficiency
			max_power
			manufacturer
			price
			picture_url
		}
	}
`;

export const FETCH_STORAGE_BY_ID = gql`
	query fetchStorageById($access_token: String!, $id: Int!) {
		findOneStorageById(id: $id, access_token: $access_token) {
			id
			name
			capacity
			storage_type
			power_draw
			manufacturer
			price
			picture_url
		}
	}
`;

export const GET_ALL_FAVORITE_CONFIG = gql`
query getAllFavorite($access_token: String!) {
	getAllFavoritesConfig(access_token: $access_token) {
	  id
	  name
	  CPUId
	  CPUCoolerId
	  MotherboardId
	  GPUId
	  RAMId
	  StorageId
	  PowerSupplyId
	  CasingId
	  rating
	  CPU {
		id
		name
		socket
		chipset
		TDP
		manufacturer
		power_draw
		core_count
		isIGPU
		max_rating
		price
		picture_url
	  }
	  RAM {
		id
		name
		memory_type
		chipset
		manufacturer
		power_draw
		memory_speed
		price
		picture_url
	  }
	  PowerSupply {
		id
		name
		efficiency
		max_power
		manufacturer
		price
		picture_url
	  }
	  Motherboard {
		id
		name
		socket
		chipset
		form_factor
		manufacturer
		power_draw
		price
		picture_url
	  }
	  CPUCooler {
		id
		name
		socket
		TDP
		manufacturer
		power_draw
		price
		picture_url
	  }
	  Casing {
		id
		name
		form_factor
		manufacturer
		price
		picture_url
	  }
	  Storage {
		id
		name
		capacity
		storage_type
		power_draw
		manufacturer
		price
		picture_url
	  }
	  GPU {
		id
		name
		power_draw
		manufacturer
		GPU_chipset
		price
		rating
		picture_url
	  }
	}
  }

`

