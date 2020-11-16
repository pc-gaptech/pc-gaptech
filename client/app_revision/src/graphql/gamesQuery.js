import { gql } from "@apollo/client";

export const FECTH_GAMES = gql`
  query FECTH_GAMES($access_token: String) {
    getGames(access_token: $access_token) {
      id
      name
      description
      picture_url
      rating
    }
  }
`;
