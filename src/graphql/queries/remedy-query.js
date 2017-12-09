import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"
import { ArtistType } from "../types"

export const Remedy = new GraphQLObjectType({
  name: "RemedyQuery",
  description: "",
  fields: () => {
    return {
      artists: {
        type: new GraphQLList(ArtistType),
        resolve: () => []
      },
      test: {
        type: GraphQLString,
        resolve: (root, args, context) => "Hello world!"
      }
    }
  }
})
