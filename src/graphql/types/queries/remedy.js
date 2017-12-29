import { AlbumType, ArtistType, TrackType } from "../entities"
import { GraphQLObjectType, GraphQLList, GraphQLNonNull } from "graphql"

const RemedyQuery = new GraphQLObjectType({
  name: "RemedyQuery",
  fields: () => ({
    albums: {
      description: "",
      type: new GraphQLList(new GraphQLNonNull(AlbumType)),
      resolve: (parent, args, { models }) => models.Album.findAll()
    },
    artists: {
      description: "",
      type: new GraphQLList(new GraphQLNonNull(ArtistType)),
      resolve: (parent, args, { models }) => models.Artist.findAll()
    },
    tracks: {
      description: "",
      type: new GraphQLList(new GraphQLNonNull(TrackType)),
      resolve: (parent, args, { models }) => models.Track.findAll()
    }
  })
})

export default RemedyQuery
