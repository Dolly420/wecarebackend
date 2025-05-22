const express = require("express");
const { upload, getAll } = require("../controller/AuthController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", protect, upload);
router.get("/", protect, getAll);
module.exports = router;