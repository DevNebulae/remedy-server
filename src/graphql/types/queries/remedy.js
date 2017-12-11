import ArtistType from "../entities/artist"
import gql from "graphql-tag"

const RemedyQuery = gql`
  type RemedyQuery {
    albums: [Album!]
    artists: [Artist!]
    tracks: [Track!]
  }
`

export default () => [ArtistType, RemedyQuery]
