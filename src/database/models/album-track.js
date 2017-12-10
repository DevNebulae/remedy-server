export default (sequelize, DataTypes) => {
  const AlbumTrack = sequelize.define(
    "album_track",
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
