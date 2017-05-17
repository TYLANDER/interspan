import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

import AuthActions from './../action/auth';

export default class AuthEpic {

    static loginEpic = (action$: ActionsObservable<any>) =>
        action$.ofType(AuthActions.LOGIN)
            .switchMap(({payload}) => {
                return Observable.of({
                                type: AuthActions.LOGIN_SUCCESS,
                                payload: 'User Name'
                            });
                })

    /*
    private setLocalStorage(userObj: any): void {
        localStorage.setItem('react-localStorage-user', JSON.stringify(userObj));
    }

    private clearLocalStorage(): void {
        localStorage.removeItem('react-localStorage-user');
    }

    private getLocalStorage() {
        return JSON.parse(localStorage.getItem('react-localStorage-user'));
    }*/
}