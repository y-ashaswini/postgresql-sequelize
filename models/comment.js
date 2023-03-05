"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: "userId",
        as: "author",
      });
      Comment.belongsTo(models.Post, {
        foreignKey: "postId",
        as: "post",
      });
    }
  }
  Comment.init(
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      comment: DataTypes.STRING
    },
    {
      sequelize,
      tableName: "comment",
      modelName: "Comment",
    }
  );
  return Comment;
};
