import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { HttpService } from "./../../service/http";
import JobActions from './../action/jobs';

export default class JobEpic {
    
    static getAllJobsEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(JobActions.GET_ALL_JOBS)
            .switchMap(({payload}) => {                
                return HttpService.get('http://interspanresources-164914.appspot.com/api/jobs/jobs')
                    .switchMap(({response}) => {
                        return Observable.of({
                            type: JobActions.GET_ALL_JOBS_SUCCESS,
                            payload: response
                        });
                    });
            })
}