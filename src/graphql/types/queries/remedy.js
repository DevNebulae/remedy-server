import ArtistType from "../entities/artist"
import gql from "graphql-tag"

export const REMEDY_TYPE = "RemedyQuery"

const RemedyQuery = gql`
  type ${REMEDY_TYPE} {
    artists: [Artist!]
  }
`

export default () => [ArtistType, RemedyQuery]
