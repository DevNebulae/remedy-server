import { AlbumField, AlbumType } from "./album"
import { ArtistField, ArtistType } from "./artist"
import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

export const TrackType = new GraphQLObjectType({
  name: "Track",
  fields: () => ({
    albums: {
      ...AlbumField,
      resolve: (parent, args, { models }) =>
        models.Album.findAll({
          include: [
            {
              model: models.Track,
              where: { id: parent.id }
            }
          ]
        })
    },
    artists: {
      ...ArtistField,
      resolve: (parent, args, { models }) =>
        models.Artist.findAll({
          include: [
            {
              model: models.Track,
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
    }
  })
})

export const TrackField = {
  description: "",
  type: new GraphQLList(new GraphQLNonNull(TrackType))
}
