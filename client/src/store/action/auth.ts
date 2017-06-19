export default class AuthActions {

    //** sign up constants **//
    static SIGNUP: string = 'SIGNUP';
    static SIGNUP_FAILER: string = 'SIGNUP_FAILER';
    static SIGNUP_SUCCESS: string = 'SIGNUP_SUCCESS';

    //** login constants **//
    static LOGIN: string = 'LOGIN';
    static LOGIN_SUCCESS: string = 'LOGIN_SUCCESS';
    static LOGIN_FAILER: string = 'LOGIN_FAILER';

    //** logout constants **//
    static LOGOUT: string = 'LOGOUT';
    static LOGOUT_SUCCESS: string = 'LOGOUT_SUCCESS';

    static ISLOGGEDIN: string = 'ISLOGGEDIN';

    //Action creator to check user auth
    static isLoggedin() {
        return {
            type: AuthActions.ISLOGGEDIN
        };
    }

    //Action creator for check login states
    static signup(payload: Object) {
        console.log(payload);
        return {
            type: AuthActions.SIGNUP,
            payload
        };
    }

    //Action creator for login 
    static login(payload: Object) {
        return {
            type: AuthActions.LOGIN,
            payload
        };
    }

    //Action creator for logout 
    static logout() {
        return {
            type: AuthActions.LOGOUT_SUCCESS
        };
    }

}