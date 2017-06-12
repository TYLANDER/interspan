import express = require("express");
let router: express.Router = express.Router();

import Controllers from "./controller";

router.post('/', Controllers.insertJobForm);

export {
    router
}