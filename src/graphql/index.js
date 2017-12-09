import { GraphQLSchema } from "graphql"
import { Remedy } from "./queries/remedy-query"

export default new GraphQLSchema({
  query: Remedy
})
