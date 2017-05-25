import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { HttpService } from './../../service/http';
import AuthActions from './../action/auth';
import Path from './../../config/path';

export default class AuthEpic {

    static loginEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN)
            .switchMap(({ payload }) => {
                return Observable.of({
                    type: AuthActions.LOGIN_SUCCESS,
                    payload: 'User Name'
                });
            })

    static signupEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.SIGNUP)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.SIGNUP, payload)
                    .switchMap(({ response }) => {
                        console.log(response);
                        if(response.err){
                            return Observable.of({
                                type: AuthActions.SIGNUP_FAILER,
                                payload: response
                            });    
                        }
                        return Observable.of({
                            type: AuthActions.SIGNUP_SUCCESS,
                            payload: response
                        });
                    });
            })
}