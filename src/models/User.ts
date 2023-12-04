// src/models/User.ts
import { Model, QueryContext } from "objection";
import bcrypt from "bcrypt";

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  role!: string; // Add your role property
  created_at?: string;
  updated_at?: string;

  static override tableName = "users";

  static override jsonSchema = {
    type: "object",
    required: ["username", "password"],

    properties: {
      id: { type: "integer" },
      username: { type: "string", minLength: 1, maxLength: 255 },
      password: { type: "string", minLength: 1, maxLength: 255 },
      role: { type: "string", default: "user", maxLength: 20 }, // Add your role property
    },
  };

  override async $beforeInsert(queryContext: QueryContext) {
    await super.$beforeInsert(queryContext);
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  override async $beforeUpdate(opt: any, queryContext: QueryContext) {
    await super.$beforeUpdate(opt, queryContext);
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}

export default User;
