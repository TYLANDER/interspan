import AuthActions from './../action/auth';

const INITIAL_STATE = {
    activeUser: <any> {},
    isError: { status: false, msg: '' },
    isProcessing: false,
    isAuthenticated: false,
    isRegistered: false
};

interface IACTION {
    type: string;
    payload?: any;
    isAuthenticated: true;
};

function AuthReducer(state = INITIAL_STATE, action: IACTION) {
    switch (action.type) {

        case AuthActions.SIGNUP:
            return {...state, isProcessing: true };
        case AuthActions.SIGNUP_SUCCESS:
            return {...state, isProcessing: false, isRegistered: true};
        case AuthActions.SIGNUP_FAILER:
            console.log('SIGNUP_FAILER .....', {...state, isProcessing: false, isError: action.payload });
            return {...state, isProcessing: false, isError: action.payload };

        case AuthActions.LOGIN:
            return {...state, isProcessing: true };
        case AuthActions.LOGIN_SUCCESS:
            // console.log('LOGIN_SUCCESS ', Object.assign({}, state, { isProcessing: false, isAuthenticated: true, activeUser: action.payload }))
            return {...state, isProcessing: false, isAuthenticated: true, activeUser: action.payload };
        case AuthActions.LOGIN_FAILER:
            return {...state, isProcessing: false, isAuthenticated: false, activeUser: {}, isError: { status: true, msg: action.payload } };

        case AuthActions.LOGOUT:
            return {...state, isProcessing: true };

        case AuthActions.LOGOUT_SUCCESS:
            return {...state, isProcessing: false, isAuthenticated: false, activeUser: {}, isError: { status: false, msg: null } };

        default:
            return state;

    }
}

export default AuthReducer;