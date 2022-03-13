import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import { User } from "./entities/User";

export default {
  migrations: {
    path: "dist/migrations",
    pathTs: "src/migrations"
  },
  entities: [Post, User],
  dbName: "lireddit",
  type: "postgresql",
  debug: !__prod__,
  allowGlobalContext: true
} as Parameters<typeof MikroORM.init>[0];