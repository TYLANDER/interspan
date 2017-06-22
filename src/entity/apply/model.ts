import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

/**
 * Model for apply job
 */

export default class applyModel {

    static async insertJobForm(data, callback: CallBackFunction) {
        let application_res: any = applyModel.saveApplication(data);
        let location_res: any = applyModel.saveLocation(data);
        let personal_response: any = applyModel.savePersonalInformation(data);
        let media_response: any = applyModel.saveMedia(data);
        let equal_response: any = applyModel.saveEqualOpportunity(data);
        let industrial_response: any = applyModel.saveIndustrialSkills(data);
        let transportation_response: any = applyModel.saveTransportation(data);
        let education_response: any = applyModel.saveEducation(data);
        let employment_response: any = applyModel.saveEmployementHistory(data);
        let reference_response: any = applyModel.saveReference(data);
        try {
            application_res = await application_res;
            location_res = await location_res;
            personal_response = await personal_response;
            media_response = await media_response;
            equal_response = await equal_response;
            industrial_response = await industrial_response;
            transportation_response = await transportation_response;
            education_response = await education_response;
            let school_response = await applyModel.educationSchool(education_response.insertId, data);
            employment_response = await employment_response;
            let employee = await applyModel.multipleEmployee(employment_response.insertId, data);
            reference_response = await reference_response;
            let multiple_reference_response = await applyModel.multipleReference(reference_response.insertId, data);
            callback(null, "Applied job successfully");
        }
        catch (err) {
            callback(err, null);
        }
    }

    // Async method for saving application form into database
    static async saveApplication(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO application_form SET ?`, data.application_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving personal form into database
    static async savePersonalInformation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO personal_form SET ?`, data.personal_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving equal opportunity form into database
    static async saveEqualOpportunity(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO equal_opportunity SET ?`, data.equal_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving skills form into database
    static async saveIndustrialSkills(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO industrial_skills SET ?`, data.skills_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving media form into database
    static async saveMedia(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO media_form SET ?`, data.media_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving location form into database
    static async saveLocation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO location_form SET ?`, data.job_location, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving transporation form into database
    static async saveTransportation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO transportation_form SET ?`, data.transportation_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving education form into database
    static async saveEducation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = { highestEducation: data.education_form.highestEducation }
            connection.query(`INSERT INTO education_form SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    // Async method for saving multiple education and skills into database
    static async educationSchool(educationId: any, data: any) {
        await Promise.all(data.education_form.schoolLocationList.map(async (schools, idx, num, ) => {
            await applyModel.insertEducation(schools, educationId);
        }))
        await Promise.all(data.education_form.specialTrainingList.map(async (skills, idx, num, ) => {
            await applyModel.insertSkills(skills, educationId);
        }))
    };

    static async insertEducation(data: any, id: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = {};
            obj = Object.assign({ education_form_ref: id }, data);
            connection.query(`INSERT INTO education_form_school SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async insertSkills(data: any, id: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = {};
            obj = Object.assign({ education_form_ref: id }, data);
            connection.query(`INSERT INTO education_form_skills SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    //Async method for saving employment history form into database
    static async saveEmployementHistory(data: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = { no_contact_num: data.employment_form.no_contact_reason, no_contact_reason: data.employment_form.no_contact_reason }
            connection.query(`INSERT INTO employment_history SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

   //Async method for saving multiple employee into database
    static async multipleEmployee(educationId: any, data: any) {
        await Promise.all(data.employment_form.EmploymentHistory.map(async (employee, idx, num, ) => {
            await applyModel.insertEmployee(employee, educationId);
        }))
    }
    static async insertEmployee(data: any, id: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = {};
            obj = Object.assign({ employment_history_ref: id }, data);
            connection.query(`INSERT INTO employment_history_details SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

   //Async method for saving references into database
    static async saveReference(data: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = { user_id: data.reference_form.user_id, job_id: data.reference_form.job_id }
            connection.query(`INSERT INTO reference_form SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }
    static async multipleReference(educationId: any, data: any) {
        await Promise.all(data.reference_form.friendRef.map(async (friend, idx, num, ) => {
            await applyModel.insertFriend(friend, educationId);
        }))
        await Promise.all(data.reference_form.friendRef.map(async (reference, idx, num, ) => {
            await applyModel.insertreferences(reference, educationId);
        }))
    }
    static async insertFriend(data: any, id: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = {};
            obj = Object.assign({ reference_form_ref: id }, data);
            connection.query(`INSERT INTO reference_form_friends SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }
    static async insertreferences(data: any, id: any) {
        return new Promise((resolve: any, reject: any) => {
            let obj = {};
            obj = Object.assign({ reference_form_ref: id }, data);
            connection.query(`INSERT INTO reference_form_outside SET ?`, obj, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }
}

