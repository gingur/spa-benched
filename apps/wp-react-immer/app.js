import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import getApp from '../_shared/react/get-App';
import { produce, setAutoFreeze } from 'immer';

setAutoFreeze(false); // for performance

const App = getApp(React);

const stateManager = (latestState, reducer, action) => produce(latestState, draft => {
  reducer(draft, action);
});

// legacy React
//ReactDOM.render(createElement(App, { stateManager }), document.getElementById('app'));
// concurrent React
ReactDOM.createRoot(document.getElementById('app')).render(createElement(App, { stateManager }));
