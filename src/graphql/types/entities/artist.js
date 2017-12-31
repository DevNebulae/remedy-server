import { AlbumType } from "./album"
import { TrackType } from "./track"
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

export const ArtistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => ({
    albums: {
      description: "",
      type: new GraphQLList(new GraphQLNonNull(AlbumType)),
      resolve: (parent, args, { models }) =>
        models.Album.findAll({
          include: [
            {
              model: models.Artist,
              where: { id: parent.id }
            }
          ]
        })
    },
    id: {
      description: "",
      type: GraphQLID
    },
    name: {
      description: "",
      type: new GraphQLNonNull(GraphQLString)
    },
    tracks: {
      description: "",
      type: new GraphQLList(new GraphQLNonNull(TrackType)),
      resolve: (parent, args, { models }) =>
        models.Track.findAll({
          include: [
            {
              model: models.Artist,
              where: { id: parent.id }
            }
          ]
        })
    }
  })
})
