import { AlbumType, ArtistType, TrackType } from "./types/entities"
import { RemedyQuery } from "./types/queries/index"
import { GraphQLSchema } from "graphql"

const createSchema = () =>
  new GraphQLSchema({
    query: RemedyQuery,
    types: [AlbumType, ArtistType, TrackType]
  })

export default createSchema
