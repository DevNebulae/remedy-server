import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

const ArtistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => {
    const AlbumType = require("./album").default
    const TrackType = require("./track").default

    return {
      albums: {
        description: "",
        type: new GraphQLList(AlbumType)
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

export default ArtistType
