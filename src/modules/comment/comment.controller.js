import express from "express";
import * as commentService from "./comment.service.js";


const router = express.Router();


router.post("/", async (req, res) => {
res.json(await commentService.bulkCreate(req.body));
});


router.patch("/:commentId", async (req, res) => {
res.json(await commentService.updateComment(
req.params.commentId,
req.body.userId,
req.body.content
));
});
router.post("/find-or-create", async (req, res) => {
res.json(await commentService.findOrCreateComment(req.body));
});


router.get("/search", async (req, res) => {
res.json(await commentService.searchComments(req.query.word));
});


router.get("/newest/:postId", async (req, res) => {
res.json(await commentService.newestComments(req.params.postId));
});


router.get("/details/:id", async (req, res) => {
res.json(await commentService.commentDetails(req.params.id));
});
export default router;