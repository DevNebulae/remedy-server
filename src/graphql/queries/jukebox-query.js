import { GraphQLObjectType, GraphQLString } from "graphql"

export const Jukebox = new GraphQLObjectType({
  name: "JukeboxQuery",
  description: "",
  fields: () => ({
    greeting: {
      type: GraphQLString,
      resolve: (root, args, context) => "Hello world!"
    }
  })
})
