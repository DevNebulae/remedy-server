import { AlbumType } from "./album"
import { ArtistType } from "./artist"
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
      description: "",
      type: new GraphQLList(new GraphQLNonNull(AlbumType)),
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
      description: "",
      type: new GraphQLList(new GraphQLNonNull(ArtistType)),
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
