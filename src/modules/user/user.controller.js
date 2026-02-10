import * as userService from "./user.service.js";
import express from "express";


const router = express.Router();


router.post("/signup", async (req, res) => {
res.json(await userService.signup(req.body));
});


router.put("/:id", async (req, res) => {
res.json(await userService.createOrUpdate(req.params.id, req.body));
});


router.get("/by-email", async (req, res) => {
res.json(await userService.getByEmail(req.query.email));
});
router.get("/:id", async (req, res) => {
res.json(await userService.getById(req.params.id));
});


export default router;