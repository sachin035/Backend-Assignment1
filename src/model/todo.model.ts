import { Itask } from "../interface/task";
import BaseModel from "./baseModel";

import { Knex } from "knex";

export default class taskeModel extends BaseModel {
  static async createTask(profileData: Itask) {
    return this.queryBuilder().insert(profileData).table("todo");
  }

  static async getAllTask() {
    console.log("hello2");
    const result = await this.queryBuilder()
      .select({
        profile_id: "todo.profile_id",
        title: "todo.title",
        description: "todo.description",
        completed: "todo.completed",
      })
      .from("todo");
    console.log("hello3");
    console.log(result);
    return result;
    // .leftJoin("professions", "profiles.profile_id", "professions.profile_id");
  }
}
