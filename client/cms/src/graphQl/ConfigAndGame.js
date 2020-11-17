import { gql } from "@apollo/client";

export const ADD_GAMES = gql`
  mutation ADD_GAMES($game: newGame, $access_token: String) {
    addGame(game: $game, access_token: $access_token) {
      id
      name
      description
      picture_url
      rating
    }
  }
`;

// export const FECTH_GAMES = gql`
// query FECTH_GAMES($access_token: String){

// }
// `;

export const ADD_CONFIG = gql`
  mutation ADD_CONFIG($config: newRecommendPC, $access_token: String) {
    addRecommendedPC(config: $config, access_token: $access_token) {
      id
      name
    }
  }
`;
