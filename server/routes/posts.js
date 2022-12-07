import express from "express";
import { createPost, getPosts, updatePost } from "../controllers/posts.js";

const router = express.Router();
//http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
//updating existing post
router.patch("/:id", updatePost);

export default router;
