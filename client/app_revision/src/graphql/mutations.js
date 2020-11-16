import { gql } from "@apollo/client";

export const REGISTER = gql`
	mutation register($user: newUser) {
		register(user: $user) {
			id
			username
			firstname
			lastname
			email
		}
	}
`;

export const LOGIN = gql`
	mutation register($user: loginUser) {
		login(user: $user) {
			access_token
			is_admin
		}
	}
`;

export const CHECK_CONFIG = gql`
	mutation checkConfig($config: ConfigToCheck, $access_token: String) {
		checkPcConfig(config: $config, access_token: $access_token) {
			name
			CPUId
			CPUCoolerId
			MotherboardId
			GPUId
			RAMId
			StorageId
			PowerSupplyId
			CasingId
		}
	}
`;

export const DELETE_ONE_FAVORITE = gql`
	mutation deleteOneFavorite($id: Int, $access_token: String) {
		deleteFavoriteConfig(id: $id, access_token: $access_token) {
			message
		}
	}
`;
