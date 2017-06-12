import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { HttpService } from './../../service/http';
import JobActions from './../action/jobs';
import Path from './../../config/path';

export default class JobEpic {

    static getAllJobsEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(JobActions.GET_ALL_JOBS)
            .switchMap(({ payload }) => {
                return HttpService.get(Path.GET_JOB)
                    .switchMap(({ response }) => {
                        return Observable.of({
                            type: JobActions.GET_ALL_JOBS_SUCCESS,
                            payload: response
                        });
                    });
            })
    
    static applyJobEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(JobActions.APPLY_JOB)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.APPLY_JOB,payload)
                    .switchMap(({ response }) => {
                        console.log("ACTION COMPLETE",response);
                        if (response.err) {
                            return Observable.of({
                                type: JobActions.APPLY_JOB_FAILURE,
                                payload: response
                            });
                        }
                        else {
                            return Observable.of({
                                type: JobActions.APPLY_JOB_SUCCESS,
                                payload: response
                            });
                        }
                    });
            })

    static postJobEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(JobActions.ADD_JOB)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.POST_JOB, payload)
                    .switchMap(({ response }) => {
                        console.log("Action COmpleted", response)
                        if (response.err) {
                            return Observable.of({
                                type: JobActions.ADD_JOB_FAILURE,
                                payload: response
                            });
                        }
                        else {
                            return Observable.of({
                                type: JobActions.ADD_JOB_SUCCESS,
                                payload: response
                            });
                        }


                    });
            })
}