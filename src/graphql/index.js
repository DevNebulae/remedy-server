import { makeExecutableSchema } from "graphql-tools"
import Schema from "./schema"
import { AlbumType, ArtistType, TrackType } from "./types/entities"

const createSchema = () =>
  makeExecutableSchema({
    typeDefs: [AlbumType, ArtistType, TrackType, Schema],
    resolvers: {
      RemedyQuery: {
        albums: (root, args, { models }) => models.Album.findAll(),
        artists: (root, args, { models }) => models.Artist.findAll(),
        tracks: (root, args, { models }) => models.Track.findAll()
      }
    }
  })

export default createSchema
