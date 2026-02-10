import express from "express";
import * as postService from "./post.service.js";


const router = express.Router();


router.post("/", async (req, res) => {
res.json(await postService.createPost(req.body));
});


router.delete("/:postId", async (req, res) => {
res.json(await postService.deletePost(req.params.postId, req.body.userId));
});
router.get("/details", async (req, res) => {
res.json(await postService.getPostsDetails());
});


router.get("/comment-count", async (req, res) => {
res.json(await postService.commentCount());
});


export default router;