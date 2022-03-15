'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Meme.belongsTo(models.User, { foreignKey: 'user_id' })
      Meme.hasMany(models.Like, { foreignKey: 'meme_id' })
    }
  }
  Meme.init({
    name: DataTypes.STRING,
    meme_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};
