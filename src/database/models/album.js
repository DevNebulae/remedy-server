export default (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "album",
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    { timestamps: false }
  )

  Album.associate = models => {
    Album.belongsToMany(models.Artist, {
      through: "album_artist",
      foreignKey: {
        name: "albumId",
        field: "album_id"
      }
    })

    Album.belongsToMany(models.Track, {
      through: "album_track",
      foreignKey: {
        name: "albumId",
        field: "album_id"
      }
    })
  }

  return Album
}
