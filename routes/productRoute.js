const express = require("express");
const {
  createProduct,
  allProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  productPayment,
} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.post("/payment", productPayment);
router.get("/", allProducts);
router.get("/:id", getProductById);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

module.exports = router;
