import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObject,
  GraphQLString
} from "graphql"

export const ArtistType = new GraphQLObject({
  name: "",
  fields: () => {
    return {
      albums: {
        description: "",
        type: new GraphQLList(new GraphQLNonNull(AlbumType))
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
