"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId",
        as: "posts",
        onDelete: "CASCADE",
      });

      User.hasMany(models.Comment, {
        foreignKey: "userId",
        as: "comments",
        onDelete: "CASCADE",
      });
    }
  }
  User.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      email: DataTypes.STRING,
      // createdAt: DataTypes.DATE,
      // updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      tableName: "user",
      modelName: "User",
    }
  );
  return User;
};
