import { ALBUM_TRACK_TABLE } from "./album-track"
import { ARTIST_TRACK_TABLE } from "./artist-track"
import { generateForeignKeyField, generateForeignKeyName } from "../util"

export const TRACK_TABLE = "track"
const foreignKeyName = generateForeignKeyName(TRACK_TABLE)
const foreignKeyField = generateForeignKeyField(TRACK_TABLE)

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
      through: ALBUM_TRACK_TABLE,
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })

    Track.belongsToMany(models.Artist, {
      through: ARTIST_TRACK_TABLE,
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })
  }

  return Track
}
