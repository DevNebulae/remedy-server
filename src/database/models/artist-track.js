export const ARTIST_TRACK_TABLE = "artist_track"

export default (sequelize, DataTypes) => {
  const ArtistTrack = sequelize.define(
    ARTIST_TRACK_TABLE,
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

  return ArtistTrack
}
