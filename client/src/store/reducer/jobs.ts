import JobActions from '../action/jobs';

const INITIAL_STATE = {
    isLoading: false,
    allJobs: []
};

interface IAction {
    type: string,
    payload?: any
}

export function jobReducer(state = INITIAL_STATE, action: IAction) {
    switch (action.type) {
        case JobActions.GET_ALL_JOBS:
            return Object.assign({}, state, {isLoading: true});
        case JobActions.GET_ALL_JOBS_SUCCESS:
            return Object.assign({}, state, { allJobs: action.payload, isLoading: false });
        default:
            return state;
    }
}
export default jobReducer;