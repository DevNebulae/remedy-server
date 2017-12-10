import AlbumType from "./album"
import ArtistType from "./artist"
import gql from "graphql-tag"

export const TRACK_TYPE = "Track"

const TrackType = gql`
  type ${TRACK_TYPE} {
    albums: [Album!]
    artists: [Artist!]
    title: String!
  }
`

export default () => [AlbumType, ArtistType, TrackType]
