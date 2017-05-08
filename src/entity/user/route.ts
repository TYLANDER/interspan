import express = require("express");
let router: express.Router = express.Router();

import Controllers from "./controller";

    router.get('/test', Controllers.getUsers);
    router.get('/details', Controllers.getUserDetais);

export {
    router
}