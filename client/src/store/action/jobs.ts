export default class JobActions {

    static GET_ALL_JOBS: string = 'GET_ALL_JOBS';
    static GET_ALL_JOBS_FAILURE: string = 'GET_ALL_JOBS_FAILURE';
    static GET_ALL_JOBS_SUCCESS: string = 'GET_ALL_JOBS_SUCCESS';
    
    static getAllJobs() {
        console.log("ACTION DISPATCHED")
        return {
            type: JobActions.GET_ALL_JOBS,
        };
    }

    static getAllJobsFailure() {
        return {
            type: JobActions.GET_ALL_JOBS_FAILURE
        };
    }

    static getAllJobsSuccess(payload:any) {
        return {
            type: JobActions.GET_ALL_JOBS_SUCCESS,
            payload
        };
    }

} 