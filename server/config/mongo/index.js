import { MongoClient} from 'mongodb';
import winston from 'winston';

const mongodbUrl = process.env.SS_MONGODB_URL || 'mongodb://localhost:27017/something-smart';
let connection;

export function setupDb() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongodbUrl, (err, db) => {
      if (err) {
        return reject(err);
      }
      connection = db;
      resolve();
    })
  })
}

export default function () {
  return connection
};
