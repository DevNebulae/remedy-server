export const ALBUM_TRACK_TABLE = "album_track"

export default (sequelize, DataTypes) => {
  const AlbumTrack = sequelize.define(
    ALBUM_TRACK_TABLE,
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

  return AlbumTrack
}
