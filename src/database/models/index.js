const createModels = sequelize => ({
  AlbumArtist: sequelize.import("album_artist", require("./album-artist")),
  AlbumTrack: sequelize.import("album_track", require("./album-track")),
  ArtistTrack: sequelize.import("artist_track", require("./artist-track")),
  Album: sequelize.import("album", require("./album")),
  Artist: sequelize.import("artist", require("./artist")),
  Track: sequelize.import("track", require("./track"))
})

export default createModels
