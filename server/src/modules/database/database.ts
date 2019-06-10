import { createConnection } from 'typeorm';
import { User } from '../users';
import { Post } from '../posts';

const createDatabaseConnection = async () => {
  await createConnection({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'apollo',
    password: '010101',
    database: 'apollo',
    synchronize: true,
    entities: [
      User,
      Post,
    ],
  });
};

export default createDatabaseConnection;
