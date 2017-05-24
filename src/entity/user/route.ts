import express = require("express");
let router: express.Router = express.Router();

import Controllers from "./controller";

router.post('/signup', Controllers.signupUser);
router.post('/login', Controllers.loginUser);

export {
    router
}