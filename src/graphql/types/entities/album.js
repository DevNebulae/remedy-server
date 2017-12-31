import { ArtistField, ArtistType } from "./artist"
import { TrackField, TrackType } from "./track"
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

export const AlbumType = new GraphQLObjectType({
  name: "Album",
  fields: () => ({
    artists: {
      ...ArtistField,
      resolve: (parent, args, { models }) =>
        models.Artist.findAll({
          include: [
            {
              model: models.Album,
              where: { id: parent.id }
            }
          ]
        })
    },
    id: {
      description: "",
      type: GraphQLID
    },
    title: {
      description: "",
      type: new GraphQLNonNull(GraphQLString)
    },
    tracks: {
      ...TrackField,
      resolve: (parent, args, { models }) =>
        models.Track.findAll({
          include: [
            {
              model: models.Album,
              where: { id: parent.id }
            }
          ]
        })
    }
  })
})

export const AlbumField = {
  description: "",
  type: new GraphQLList(new GraphQLNonNull(AlbumType))
}
