export default (sequelize, DataTypes) => {
  const Track = sequelize.define(
    "track",
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

  Track.associate = models => {
    Track.belongsToMany(models.Album, {
      through: "album_track",
      foreignKey: {
        name: "trackId",
        field: "track_id"
      }
    })

    Track.belongsToMany(models.Artist, {
      through: "artist_track",
      foreignKey: {
        name: "trackId",
        field: "track_id"
      }
    })
  }

  return Track
}
