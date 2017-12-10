import ArtistType from "./artist"
import TrackType from "./track"
import gql from "graphql-tag"

export const ALBUM_TYPE = "Album"

const AlbumType = gql`
  type ${ALBUM_TYPE} {
    artists: [Artist!]
    title: String!
    tracks: [Track!]
  }
`

export default () => [ArtistType, TrackType, AlbumType]
