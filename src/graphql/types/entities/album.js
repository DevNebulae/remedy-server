import ArtistType from "./artist"
import TrackType from "./track"
import gql from "graphql-tag"

const AlbumType = gql`
  type Album {
    artists: [Artist!]
    id: String
    title: String!
    tracks: [Track!]
  }
`

export default () => [ArtistType, TrackType, AlbumType]
