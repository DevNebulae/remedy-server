import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

const TrackType = new GraphQLObjectType({
  name: "Track",
  fields: () => {
    const AlbumType = require("./album").default
    const ArtistType = require("./artist").default

    return {
      albums: {
        description: "",
        type: new GraphQLList(new GraphQLNonNull(AlbumType))
      },
      artists: {
        description: "",
        type: new GraphQLList(new GraphQLNonNull(ArtistType))
      },
      title: {
        description: "",
        type: new GraphQLNonNull(GraphQLString)
      }
    }
  }
})

export default TrackType
