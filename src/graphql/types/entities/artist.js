import { AlbumField, AlbumType } from "./album"
import { TrackField, TrackType } from "./track"
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
      ...AlbumField,
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
      ...TrackField,
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

export const ArtistField = {
  description: "",
  type: new GraphQLList(new GraphQLNonNull(ArtistType))
}
