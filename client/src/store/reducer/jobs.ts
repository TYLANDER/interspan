import JobActions from '../action/jobs';

const INITIAL_STATE = {
    isLoading: false,
    allJobs: [],
    language:"english",
    success:false,
    data:[],
    isError:false,
    err:[]
};

interface IAction {
    type: string;
    payload?: any;
}

export function jobReducer(state = INITIAL_STATE, action: IAction) {
    switch (action.type) {
        case JobActions.GET_ALL_JOBS:
            return Object.assign({}, state, {isLoading: true});
        case JobActions.GET_ALL_JOBS_SUCCESS:
            return Object.assign({}, state, { allJobs: action.payload, isLoading: false });
        case JobActions.CHANGE_LANGUAGE:
            return Object.assign({},{language: action.payload})
        case JobActions.ADD_JOB:
            return Object.assign({}, state, {isLoading: true});
        case JobActions.ADD_JOB_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isLoading: false ,success:true,isError:false});
        case JobActions.ADD_JOB_FAILURE:
            return Object.assign({}, state, {err: action.payload, isLoading: false ,success:false,isError:true});
        case JobActions.APPLY_JOB:
            return Object.assign({}, state, {isLoading: true});
        case JobActions.APPLY_JOB_SUCCESS:
            return Object.assign({}, state, { data: action.payload, isLoading: false ,success:true,isError:false});
        case JobActions.APPLY_JOB_FAILURE:
            return Object.assign({}, state, {err: action.payload, isLoading: false ,success:false,isError:true});
        default:
            return state;
    }
}
export default jobReducer;