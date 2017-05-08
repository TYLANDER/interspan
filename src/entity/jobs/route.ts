import express = require("express");
let router: express.Router = express.Router();

import Controllers from "./controller";


router.get('/jobs', Controllers.getJobs);
router.post('/jobs',Controllers.insertJobs);


export {
    router
}