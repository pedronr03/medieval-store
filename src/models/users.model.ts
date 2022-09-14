import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, IUser } from '../types/User';

class UsersModel {
  constructor(private readonly connection: Pool) {}

  async create(userData: IUser): Promise<User> {
    const { classe, level, password, username } = userData;
    const query = `INSERT INTO Trybesmith.Users (classe, level, password, username)
    VALUES (?, ?, ?, ?);`;
    const params = [classe, level, password, username];
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, params);
    const newUser = { id, classe, level, password, username };
    return newUser;
  }
}

export default UsersModel;