import { makeExecutableSchema } from "graphql-tools"
import Schema from "./schema"
import { AlbumType, ArtistType, TrackType } from "./types/entities"
import { JUKEBOX_TYPE } from "./types/queries/"

const createSchema = () =>
  makeExecutableSchema({
    typeDefs: [AlbumType, ArtistType, TrackType, Schema],
    resolvers: {
      Query: {
        jukebox: () => ({
          JukeboxQuery: () => ({
            greeting: (root, args, context) => {
              console.log("JukeboxQuery")
              return "Hello world!"
            }
          })
        })
      }
    }
  })

export default createSchema
