import express = require("express");
let router: express.Router = express.Router();
/**
 * Routes for user entity
 */
import Controllers from "./controller";
// Login route
router.post('/signup', Controllers.signupUser);
// Login route
router.post('/login', Controllers.loginUser);

export {
    router
}