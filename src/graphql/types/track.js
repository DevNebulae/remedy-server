import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObject,
  GraphQLString
} from "graphql"

export const TrackType = new GraphQLObject({
  name: "",
  fields: () => {
    const { AlbumType } = require("./album")
    const { ArtistType } = require("./artist")

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
