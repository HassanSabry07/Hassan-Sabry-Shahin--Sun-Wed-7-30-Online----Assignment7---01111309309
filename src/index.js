import express from "express";
import { sequelize } from "./DB/connection.js";
import "./DB/models/index.js";


import userRouter from "./modules/user/user.controller.js";
import postRouter from "./modules/post/post.controller.js";
import commentRouter from "./modules/comment/comment.controller.js";


const app = express();
app.use(express.json());


app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
sequelize.sync();
app.listen(3000, () => console.log("Server running on port 3000"));