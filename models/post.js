"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, {
        foreignKey: "postId",
        as: "comments",
        onDelete: "CASCADE",
      });

      Post.belongsTo(models.User, {
        foreignKey: "userId",
        as: "author",
        onDelete: "CASCADE",
      });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "post",
      modelName: "Post",
    }
  );
  return Post;
};
