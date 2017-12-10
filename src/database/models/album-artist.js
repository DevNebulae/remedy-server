export default (sequelize, DataTypes) => {
  const AlbumArtist = sequelize.define(
    "album_artist",
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
