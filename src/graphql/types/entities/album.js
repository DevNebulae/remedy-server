import ArtistType from "./artist"
import TrackType from "./track"
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql"

const AlbumType = new GraphQLObjectType({
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
      type: GraphQLString
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

export default AlbumType
