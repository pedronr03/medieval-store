import { Pool, RowDataPacket } from 'mysql2/promise';
import { User, UserCredentials } from '../types/User';

class LoginModel {
  constructor(private readonly connection: Pool) {}

  async getUserByCredentials(userCredentials: UserCredentials): Promise<User> {
    const { password, username } = userCredentials;
    const query = `SELECT * FROM Trybesmith.Users
    WHERE username = ? AND password = ?;`;
    const params = [username, password];
    const [[user]] = await this.connection.execute<RowDataPacket[]>(query, params);
    return user as User;
  }
}

export default LoginModel;