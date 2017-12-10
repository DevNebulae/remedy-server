import gql from "graphql-tag"

export const JUKEBOX_TYPE = "JukeboxQuery"

const JukeboxQuery = gql`
  type ${JUKEBOX_TYPE} {
    greeting: String
  }
`

export default () => [JukeboxQuery]
