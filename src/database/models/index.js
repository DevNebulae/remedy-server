import AlbumArtist, { ALBUM_ARTIST_TABLE } from "./album-artist"
import AlbumTrack, { ALBUM_TRACK_TABLE } from "./album-track"
import ArtistTrack, { ARTIST_TRACK_TABLE } from "./artist-track"
import Album, { ALBUM_TABLE } from "./album"
import Artist, { ARTIST_TABLE } from "./artist"
import Track, { TRACK_TABLE } from "./track"

const createModels = sequelize => ({
  AlbumArtist: sequelize.import(ALBUM_ARTIST_TABLE, AlbumArtist),
  AlbumTrack: sequelize.import(ALBUM_TRACK_TABLE, AlbumTrack),
  ArtistTrack: sequelize.import(ARTIST_TRACK_TABLE, ArtistTrack),
  Album: sequelize.import(ALBUM_TABLE, Album),
  Artist: sequelize.import(ARTIST_TABLE, Artist),
  Track: sequelize.import(TRACK_TABLE, Track)
})

export default createModels
