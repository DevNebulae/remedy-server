import gql from "graphql-tag"

const JukeboxQuery = gql`
  type JukeboxQuery {
    greeting: String
  }
`

export default () => [JukeboxQuery]
