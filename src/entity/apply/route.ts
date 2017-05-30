import express = require("express");
let router: express.Router = express.Router();

import Controllers from "./controller";

router.post('/application_form', Controllers.insertApplicationForm);
router.post('/location_form',Controllers.insertJobLocationForm);
router.post('/education_form',Controllers.insertEducationForm);
router.post('/communication_form',Controllers.insertCommunicationForm);
router.post('/media_form',Controllers.insertMediaForm);
router.post('/personal_form',Controllers.insertPersonalForm);
router.post('/transportation_form',Controllers.insertTransportationForm);


export {
    router
}