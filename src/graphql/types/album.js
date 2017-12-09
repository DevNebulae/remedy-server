import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

const AlbumType = new GraphQLObjectType({
  name: "Album",
  fields: () => {
    const ArtistType = require("./artist").default
    const TrackType = require("./track").default

    return {
      artists: {
        description: "",
        type: new GraphQLList(ArtistType)
      },
      name: {
        description: "",
        type: new GraphQLNonNull(GraphQLString)
      },
      tracks: {
        description: "",
        type: new GraphQLList(TrackType)
      }
    }
  }
})

export default AlbumType
