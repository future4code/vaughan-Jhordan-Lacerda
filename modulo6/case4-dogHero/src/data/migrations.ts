import dotenv from "dotenv";
import { BaseDataBase } from "./BaseDataBase";

dotenv.config();

export class CreateTables extends BaseDataBase {
  createTables = () =>
    this.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS PetWalk(
          id VARCHAR(255) PRIMARY KEY,
          status ENUM("FAZER", "FAZENDO", "FEITO") DEFAULT "FAZER",
          date_schedule DATE NOT NULL,
          price FLOAT NOT NULL,
          latitude VARCHAR(255) NOT NULL,
          longitude VARCHAR(255) NOT NULL,
          duration ENUM("30", "60") NOT NULL,
          start_date timestamp NOT NULL,
          end_date timestamp NOT NULL
      );

      CREATE TABLE IF NOT EXISTS Pets(
        id VARCHAR(255) PRIMARY KEY,
        pet_name VARCHAR(255) NOT NULL,
        pet_walk_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (pet_walk_id) REFERENCES PetWalk(id)
    )
    `
      )
      .then(() => console.log("MySql tables were successfully created"))
      .catch((error) => console.log(error.sqlMessage || error.message));

  closeConnection = () => this.connection.destroy();
}

const createTable = new CreateTables();

createTable.createTables().finally(createTable.closeConnection);
