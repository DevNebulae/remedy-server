import { ALBUM_ARTIST_TABLE } from "./album-artist"
import { ALBUM_TRACK_TABLE } from "./album-track"

const foreignKeyName = "albumId"
const foreignKeyField = "fk_album_id"
export const ALBUM_TABLE = "album"

export default (sequelize, DataTypes) => {
  const Album = sequelize.define(
    ALBUM_TABLE,
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
      through: ALBUM_ARTIST_TABLE,
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })

    Album.belongsToMany(models.Track, {
      through: ALBUM_TRACK_TABLE,
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })
  }

  return Album
}
