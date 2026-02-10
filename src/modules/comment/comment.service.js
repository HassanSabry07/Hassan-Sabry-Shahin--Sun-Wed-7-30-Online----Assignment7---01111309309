import { Comment } from "../../DB/models/comment.model.js";
import { User } from "../../DB/models/user.model.js";
import { Post } from "../../DB/models/post.model.js";
import { Op } from "sequelize";


export const bulkCreate = async (comments) => {
return await Comment.bulkCreate(comments);
};


export const updateComment = async (id, userId, content) => {
const comment = await Comment.findByPk(id);
if (!comment || comment.userId !== userId) return { message: "Not authorized" };
comment.content = content;
await comment.save();
return comment;
};
export const findOrCreateComment = async (data) => {
const [comment] = await Comment.findOrCreate({ where: data, defaults: data });
return comment;
};


export const searchComments = async (word) => {
return await Comment.findAndCountAll({
where: { content: { [Op.like]: `%${word}%` } }
});
};


export const newestComments = async (postId) => {
return await Comment.findAll({
where: { postId },
order: [["createdAt", "DESC"]],
limit: 3
});};


export const commentDetails = async (id) => {
return await Comment.findByPk(id, { include: [User, Post] });
};