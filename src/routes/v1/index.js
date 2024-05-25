const express = require("express");

const { validateUserSignup } = require("../../middlewares/index");
const UserController = require("../../controllers/index");

const router = express.Router();

router.post("/signup", validateUserSignup, UserController.create);
router.post("/signIn", validateUserSignup, UserController.signIn);

router.get("/isAuthenticated", UserController.isAuthenticated);


module.exports = router;
