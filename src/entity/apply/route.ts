import express = require("express");
import Controllers from "./controller";

let router: express.Router = express.Router();
// Route for job apply
router.post('/', Controllers.insertJobForm);

export {
    router
}