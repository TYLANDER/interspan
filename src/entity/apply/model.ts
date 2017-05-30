import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class applyModel {


    static insertApplicationForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO application_form SET ?`, data, cb);
    }

    static insertJobLocationForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO location_form SET ?`, data, cb);
    }

     static insertEducationForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO education_form SET ?`, data, cb);
    }

    static insertCommunicationForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO communication_form SET ?`, data, cb);
    }

    static insertMediaForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO media_form SET ?`, data, cb);
    }
    
    static insertPersonalForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO personal_form SET ?`, data, cb);
    }

    static insertTransportationForm(data, cb: CallBackFunction) {
        connection
            .query(`INSERT INTO transportation_form SET ?`, data, cb);
    }

}