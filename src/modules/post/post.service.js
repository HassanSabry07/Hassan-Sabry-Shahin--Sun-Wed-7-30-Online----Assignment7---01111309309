import { Post } from "../../DB/models/post.model.js";
import { User } from "../../DB/models/user.model.js";
import { Comment } from "../../DB/models/comment.model.js";
import { sequelize } from "../../DB/connection.js";


export const createPost = async (data) => {
const post = new Post(data);
await post.save();
return post;
};


export const deletePost = async (postId, userId) => {
const post = await Post.findByPk(postId);
if (!post || post.userId !== userId) return { message: "Not authorized" };
await post.destroy();
return { message: "Post deleted" };
};
export const getPostsDetails = async () => {
return await Post.findAll({
attributes: ["id", "title"],
include: [
{ model: User, attributes: ["id", "name"] },
{ model: Comment, attributes: ["id", "content"] }
]
});
};
export const commentCount = async () => {
return await Post.findAll({
attributes: [
"id",
"title",
[sequelize.fn("COUNT", sequelize.col("Comments.id")), "commentCount"]
],
include: { model: Comment, attributes: [] },
group: ["Post.id"]
});
};