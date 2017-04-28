import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
