import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

// Application State IAppState
import IAppState from './IAppState';

// reducers
import AuthReducer from './reducer/auth';
import jobReducer from './reducer/jobs';

// epics
import AuthEpic from './epic/auth';
import JobEpic from './epic/jobs';

// Application Epics / Effects
export const rootEpic = combineEpics(
    AuthEpic.loginEpic,
    JobEpic.getAllJobsEpic,
    JobEpic.postJobEpic,
    AuthEpic.signupEpic
);

// Application Reducers
export const rootReducer = combineReducers<IAppState>({
    AuthReducer,
    jobReducer
});

// for initialize in application
const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);