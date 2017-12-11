import { ALBUM_ARTIST_TABLE } from "./album-artist"
import { ARTIST_TRACK_TABLE } from "./artist-track"
import { generateForeignKeyField, generateForeignKeyName } from "../util"

export const ARTIST_TABLE = "artist"
const foreignKeyName = generateForeignKeyName(ARTIST_TABLE)
const foreignKeyField = generateForeignKeyField(ARTIST_TABLE)

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
      through: ALBUM_ARTIST_TABLE,
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })

    Artist.belongsToMany(models.Track, {
      through: ARTIST_TRACK_TABLE,
      foreignKey: {
        name: foreignKeyName,
        field: foreignKeyField
      }
    })
  }

  return Artist
}
