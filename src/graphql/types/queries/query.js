import gql from "graphql-tag"
import JukeboxQuery, { JUKEBOX_TYPE } from "./jukebox"
// import RemedyQuery, { REMEDY_TYPE } from "./remedy"

export const QUERY_TYPE = "Query"

const Query = gql`
  type ${QUERY_TYPE} {
    jukebox: ${JUKEBOX_TYPE}
  }
`

export default () => [JukeboxQuery, Query]
