const router = require("express").Router();

const register = require("../../controller/auth/register");


router.post("/register", register);


module.exports = router;