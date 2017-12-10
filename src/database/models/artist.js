export default (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    "artist",
    {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
        unique: true
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    { timestamps: false }
  )

  Artist.associate = models => {
    Artist.belongsToMany(models.Album, {
      through: "album_artist",
      foreignKey: {
        name: "artistId",
        field: "artist_id"
      }
    })

    Artist.belongsToMany(models.Track, {
      through: "artist_track",
      foreignKey: {
        name: "artistId",
        field: "artist_id"
      }
    })
  }

  return Artist
}
