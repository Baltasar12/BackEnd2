import fs from "fs";

export default {
    mongodb: {
        cnxStr:
          "mongodb+srv://balta_sar:Jf4yc8iAkujCNv5s@cluster0.zly7w.mongodb.net/?retryWrites=true&w=majority",
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          serverSelectionTimeoutMS: 5000,
        },
    },
  firebase: {
    serviceAccount: JSON.parse(
      fs.readFileSync(
        "./src/db/ecommerce-13d40-firebase-adminsdk-dk04o-00e8e3b300.json",
        "utf8"
      )
    ),
  },
  fileSystem: {
    path: "./src/db/",
  },
};

export const PERS = "fileSystem";


