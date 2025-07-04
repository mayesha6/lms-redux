import mongoose from "mongoose";
import app from "./app";
import config from "./config";
import { Server } from "http";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_uri);
    server = app.listen(config.port, () => {
      console.log(`Server is running at http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect:", error);
  }
}

main();
