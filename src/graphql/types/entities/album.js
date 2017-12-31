import { ArtistType } from "./artist"
import { TrackType } from "./track"
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
      description: "",
      type: new GraphQLList(new GraphQLNonNull(ArtistType)),
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
      description: "",
      type: new GraphQLList(new GraphQLNonNull(TrackType)),
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
