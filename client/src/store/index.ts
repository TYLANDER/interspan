import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

// Application State IAppState
import IAppState from './IAppState';

// reducers
import AuthReducer from "./reducer/auth";

// epics
import AuthEpic from "./epic/auth";


// Application Epics / Effects
export const rootEpic = combineEpics(
    AuthEpic.loginEpic
);

// Application Reducers
export const rootReducer = combineReducers<IAppState>({
    AuthReducer
});


// for initialize in application 
const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

export let store = createStoreWithMiddleware(rootReducer);