import AlbumType from "./album"
import ArtistType from "./artist"
import gql from "graphql-tag"

const TrackType = gql`
  type Track {
    albums: [Album!]
    artists: [Artist!]
    id: String
    title: String!
  }
`

export default () => [AlbumType, ArtistType, TrackType]
