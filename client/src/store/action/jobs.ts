export default class JobActions {

    static GET_ALL_JOBS: string = 'GET_ALL_JOBS';
    static GET_ALL_JOBS_FAILURE: string = 'GET_ALL_JOBS_FAILURE';
    static GET_ALL_JOBS_SUCCESS: string = 'GET_ALL_JOBS_SUCCESS';

    static ADD_JOB: string = 'ADD_JOB';
    static ADD_JOB_SUCCESS: string = 'ADD_JOB_SUCCESS';
     static ADD_JOB_FAILURE: string = 'ADD_JOB_FAILURE';

    static CHANGE_LANGUAGE: string = "CHANGE_LANGUAGE"

    static getAllJobs() {
        console.log('ACTION DISPATCHED');
        return {
            type: JobActions.GET_ALL_JOBS,
        };
    }

    static addJobs(payload:any) {
        console.log('ACTION Of Add Jobs');
        return {
            type: JobActions.ADD_JOB,
            payload:payload
        };
    }

    static getAllJobsFailure() {
        return {
            type: JobActions.GET_ALL_JOBS_FAILURE
        };
    }

    static changeLanguage(payload:any){
        return {
            type: JobActions.CHANGE_LANGUAGE,
            payload: payload
        }
    }

    static getAllJobsSuccess(payload: any) {
        return {
            type: JobActions.GET_ALL_JOBS_SUCCESS,
            payload
        };
    }

}