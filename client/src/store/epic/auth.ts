import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import { HttpService } from './../../service/http';
import AuthActions from './../action/auth';
import Path from './../../config/path';

export default class AuthEpic {

    static loginEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN)
            .switchMap(({ payload }) => {
                return HttpService.post(Path.LOGIN, payload)
                    .switchMap(({ response }) => {
                        console.log(response);
                        if(!response.data || response.data.length==0){
                            return Observable.of({
                                type: AuthActions.LOGIN_FAILER,
                                payload: "email and password not matched ! Try Again "
                            });    
                        }
                        return Observable.of({
                            type: AuthActions.LOGIN_SUCCESS,
                            payload: response.data
                        });
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
                                payload: response.err
                            });    
                        }
                        return Observable.of({
                            type: AuthActions.SIGNUP_SUCCESS,
                            payload: response
                        });
                    });
            })
}