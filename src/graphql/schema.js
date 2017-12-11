import gql from "graphql-tag"
import { RemedyQuery } from "./types/queries"

const Schema = gql`
  schema {
    query: RemedyQuery
  }
`

export default () => [RemedyQuery, Schema]
