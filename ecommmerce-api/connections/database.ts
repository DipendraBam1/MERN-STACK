// import {Sequelize} from "sequelize";
// require("dotenv").config();
// const DATABASE_URL = process.env.DATABASE_URL;

// if (!DATABASE_URL) {
//   throw new Error("DATABASE_URL environment variable is required");
// }
// const sequelize = new Sequelize(DATABASE_URL, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
//   logging: false,
// });

// const DBconnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connected successfully.");

//     await sequelize.sync();
//     console.log("Tables synced successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// DBconnection();

// export default sequelize;

import { Sequelize } from "sequelize";
import pg from "pg";

const connectionString = process.env.DATABASE_URL || `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`;

const sequelize = new Sequelize(connectionString, {
  logging: false,
  dialectModule: pg,
  dialectOptions: connectionString.includes("neon.tech") ? {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  } : {}
});

// module.exports = sequelize
export default sequelize;