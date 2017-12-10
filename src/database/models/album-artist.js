export const ALBUM_ARTIST_TABLE = "album_artist"

export default (sequelize, DataTypes) => {
  const AlbumArtist = sequelize.define(
    ALBUM_ARTIST_TABLE,
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )

  return AlbumArtist
}
