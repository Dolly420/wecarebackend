const express = require("express");
const { create, getAll } = require("../controller/AuthController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", protect, create);
router.get("/", protect, getAll);
module.exports = router;