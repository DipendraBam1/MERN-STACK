const { Sequelize, DataTypes, Deferrable } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/postgres",
  {
    logging: false,
  },
);

const DBconnection = async () => {
  try {
    await sequelize.sync();
    // await sequelize.sync({force:true});
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
DBconnection();
module.exports = sequelize;