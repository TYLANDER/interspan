import * as express from "express";
import connection from '../../db/connection';
import { responseJsonHandler, CallBackFunction } from '../../utils/helper';

export default class applyModel {


    static async insertJobForm(data, callback: CallBackFunction) {

        let a: any = applyModel.saveApplication(data);
        let b: any = applyModel.saveLocation(data);
        let c: any = applyModel.savePersonalInformation(data);
        let d: any = applyModel.saveMedia(data);
        let e: any = applyModel.saveEqualOpportunity(data);
        let y: any = applyModel.saveIndustrialSkills(data);
        let z: any = applyModel.saveTransportation(data);
        let g: any = applyModel.saveEducation(data);
        let h: any = applyModel.saveEmployementHistory(data);
        let j: any = applyModel.saveReference(data);
        try {
            a = await a;
            b = await b;
            c = await c;
            d = await d;
            e = await e;
            y = await y;
            z = await z;
            g = await g;
            let f = await applyModel.educationSchool(g.insertId, data);
            h = await h;
            let i = await applyModel.multipleEmployee(h.insertId, data);
            j = await j;
            let k = await applyModel.multipleReference(j.insertId, data);
            callback(null, "Applied job successfully");
        }
        catch (err) {
            callback(err, null);
        }
    }

    static async saveApplication(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO application_form SET ?`, data.application_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async savePersonalInformation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO personal_form SET ?`, data.personal_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async saveEqualOpportunity(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO equal_opportunity SET ?`, data.equal_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async saveIndustrialSkills(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO industrial_skills SET ?`, data.skills_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async saveMedia(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO media_form SET ?`, data.media_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

    static async saveLocation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO location_form SET ?`, data.job_location, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }
    static async saveTransportation(data: any) {
        return new Promise((resolve: any, reject: any) => {
            connection.query(`INSERT INTO transportation_form SET ?`, data.transportation_form, function (err, result) {
                if (err)
                    reject(err);
                else resolve(result);
            });
        })
    }

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

