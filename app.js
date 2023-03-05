const express = require("express");
const { sequelize, User, Post, Comment } = require("./models");
// notice where you're getting sequelize from

const app = express();
app.use(express.json()); // using the json middlewear

app.post("/users", async (req, res) => {
  const { fname, lname, email } = req.body;
  try {
    const user = await User.create({ fname, lname, email });
    return res.json(user);
  } catch (error) {
    console.error(err);
    return res.status(500).json(error);
  }
});

app.get("/users", async (req, res) => {
  const { fname } = req.body;
  try {
    const user = await User.findAll({
      where: {
        fname: fname,
      },
    });
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

app.get("/usersall", async (req, res) => {
  try {
    const user = await User.findAll();
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Sevrer up and running!");
  await sequelize.sync();
  console.log("Database synced!");
});
