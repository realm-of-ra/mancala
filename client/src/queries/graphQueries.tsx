
import {gql} from "graphql-request";

export const GAME_METADATA_MODELS_QUERY = gql`
            query MancalaModelsFetch() {
                mancalaGameModels {
                    edges {
                        node {
                            game_id
                            player_one
                            player_two
                            current_player
                            winner
                            status
                            is_private
                        }
                    }
                }
                transactions {
                    edges {
                        node {
                            executedAt
                        }
                    }
                }
            }
        `

