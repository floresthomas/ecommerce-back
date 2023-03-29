const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
} = require("../controller/blogController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put("/update/:id", authMiddleware, isAdmin, updateBlog);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislike", authMiddleware, disliketheBlog);
router.get("/", getBlogs);
router.get("/:id", getBlog);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
