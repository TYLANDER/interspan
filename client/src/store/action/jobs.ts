export default class JobActions {

    //** Get all jobs constants **//
    static GET_ALL_JOBS: string = 'GET_ALL_JOBS';
    static GET_ALL_JOBS_FAILURE: string = 'GET_ALL_JOBS_FAILURE';
    static GET_ALL_JOBS_SUCCESS: string = 'GET_ALL_JOBS_SUCCESS';

    //** Add job constants **//
    static ADD_JOB: string = 'ADD_JOB';
    static ADD_JOB_SUCCESS: string = 'ADD_JOB_SUCCESS';
    static ADD_JOB_FAILURE: string = 'ADD_JOB_FAILURE';

    //** Apply job constants **//
    static APPLY_JOB: string = 'APPLY_JOB';
    static APPLY_JOB_FAILURE: string = 'APPLY_JOB_FAILURE';
    static APPLY_JOB_SUCCESS: string = 'APPLY_JOB_SUCCESS';

    //** Language constant **//
    static CHANGE_LANGUAGE: string = "CHANGE_LANGUAGE"

    //Action creator for get all jobs
    static getAllJobs() {
        console.log('ACTION DISPATCHED');
        return {
            type: JobActions.GET_ALL_JOBS,
        };
    }

    //Action creator for add jobs
    static addJobs(payload: any) {
        console.log('ACTION Of Add Jobs');
        return {
            type: JobActions.ADD_JOB,
            payload: payload
        };
    }

    //Action creator for apply job
    static applyJob(payload: any) {
        console.log('ACTION Of Add Jobs');
        return {
            type: JobActions.APPLY_JOB,
            payload: payload
        };
    }

    //Action creator for get all job fail
    static getAllJobsFailure() {
        return {
            type: JobActions.GET_ALL_JOBS_FAILURE
        };
    }

    //Action creator for change language
    static changeLanguage(payload: any) {
        return {
            type: JobActions.CHANGE_LANGUAGE,
            payload: payload
        }
    }

    //Action creator for get all job success
    static getAllJobsSuccess(payload: any) {
        return {
            type: JobActions.GET_ALL_JOBS_SUCCESS,
            payload
        };
    }

}