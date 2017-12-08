import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObject,
  GraphQLString
} from "graphql"

export const AlbumType = new GraphQLObject({
  name: "",
  fields: () => {
    const { ArtistType } = require("./artist")
    const { TrackType } = require("./track")

    return {
      artists: {
        description: "",
        type: new GraphQLList(new GraphQLNonNull(ArtistType))
      },
      name: {
        description: "",
        type: new GraphQLNonNull(GraphQLString)
      },
      tracks: {
        description: "",
        type: new GraphQLList(new GraphQLNonNull(TrackType))
      }
    }
  }
})
