import gql from "graphql-tag"
import { QUERY_TYPE, Query } from "./types/queries"

const Schema = gql`
  schema {
    query: ${QUERY_TYPE}
  }
`

export default () => [Query, Schema]
