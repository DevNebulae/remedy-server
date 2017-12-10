const foreignKeyName = "trackId"
const foreignKeyField = "fk_track_id"
export const TRACK_TABLE = "track"

export default (sequelize, DataTypes) => {
  const Track = sequelize.define(
    TRACK_TABLE,
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
        name: foreignKeyName,
        field: foreignKeyField
      }
    })

    Track.belongsToMany(models.Artist, {
      through: "artist_track",
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })
  }

  return Track
}
