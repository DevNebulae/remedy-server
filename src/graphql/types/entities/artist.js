import AlbumType from "./album"
import TrackType from "./track"
import gql from "graphql-tag"

const ArtistType = gql`
  type Artist {
    albums: [Album!]
    id: String
    name: String!
    tracks: [Track!]
  }
`

export default () => [AlbumType, TrackType, ArtistType]
