const express = require("express");
const { signupUser, loginUser, getUser, updateUser, deleteUser, getUsers } = require("../controllers/user");
const authMiddleware = require("../middlewares/auth.middleware");
const isAdmin = require("../middlewares/admin.middleware");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/all",authMiddleware, isAdmin,getUsers)
router.get("/:userId",authMiddleware,getUser)
router.patch("/:userId",authMiddleware,updateUser)
router.delete("/:userId",authMiddleware,deleteUser)

module.exports = router;
