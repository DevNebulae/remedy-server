import AlbumType from "./album"
import TrackType from "./track"
import gql from "graphql-tag"

export const ARTIST_TYPE = "Artist"

const ArtistType = gql`
  type ${ARTIST_TYPE} {
    albums: [Album!]
    name: String!
    tracks: [Track!]
  }
`

export default () => [AlbumType, TrackType, ArtistType]
