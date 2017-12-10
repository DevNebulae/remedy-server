export default (sequelize, DataTypes) => {
  const ArtistTrack = sequelize.define(
    "artist_track",
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
