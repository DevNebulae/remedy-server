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
      },
      Album: {
        artists: (parent, args, { models }) =>
          models.Album.findAll({
            include: [
              {
                model: models.Artist,
                where: { id: parent.id }
              }
            ]
          }),
        tracks: (parent, args, { models }) =>
          models.Album.findAll({
            include: [
              {
                model: models.Track,
                where: { id: parent.id }
              }
            ]
          })
      },
      Artist: {
        tracks: (parent, args, { models }) =>
          models.Track.findAll({
            include: [
              {
                model: models.Artist,
                where: { id: parent.id }
              }
            ]
          }),
        albums: (parent, args, { models }) =>
          models.Album.findAll({
            include: [
              {
                model: models.Artist,
                where: { id: parent.id }
              }
            ]
          })
      },
      Track: {
        albums: (parent, args, { models }) =>
          models.Album.findAll({
            include: [
              {
                model: models.Track,
                where: { id: parent.id }
              }
            ]
          }),
        artists: (parent, args, { models }) =>
          models.Artist.findAll({
            include: [
              {
                model: models.Track,
                where: { id: parent.id }
              }
            ]
          })
      }
    }
  })

export default createSchema
