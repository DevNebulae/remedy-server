const foreignKeyName = "artistId"
const foreignKeyField = "fk_artist_id"
export const ARTIST_TABLE = "artist"

export default (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    ARTIST_TABLE,
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
        name: foreignKeyName,
        field: foreignKeyField
      }
    })

    Artist.belongsToMany(models.Track, {
      through: "artist_track",
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })
  }

  return Artist
}
