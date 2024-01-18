import { ISignup } from "../interface/requestUser";
import BaseModel from "./baseModel";

export default class UserModel extends BaseModel {
  static async getAllUsers() {
    return this.queryBuilder()
      .select({
        id: "id",
        username: "username",
        email: "email",
      })
      .from("auth_user");
  }

  static async getUserById(id: number) {
    return this.queryBuilder()
      .select({
        id: "id",
        username: "username",
        email: "email",
      })
      .from("users")
      .where({ id })
      .first();
  }
  static async getUserByUsername(username: string) {
    const user = await this.queryBuilder()
      .select({
        id: "id",
        username: "username",
        password: "password",
        email: "email",
      })
      .from("auth_user")
      .where({ username })
      .first();
    return user;
  }

  static async getUserByEmail(email: string) {
    console.log("last", email);
    const user = await this.queryBuilder()
      .select({
        id: "id",
        username: "username",
        email: "email",
        password: "password",
      })
      .from("auth_user")
      .where({ email })
      .first();
    console.log("userMansij", user);

    return user;
  }

  static async createUser(user: ISignup) {
    return this.queryBuilder().insert(user).table("auth_user");
  }

  static async updateUser(id: number, user: ISignup) {
    return this.queryBuilder().update(user).table("auth_user").where({ id });
  }
  static async deleteUser(id: number) {
    return this.queryBuilder().table("auth_user").where({ id }).del();
  }
}
