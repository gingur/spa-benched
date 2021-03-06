import Preact, { createElement, render } from 'preact';
import getApp from '../_shared/react/get-App';
import { produce, setAutoFreeze } from 'immer';

setAutoFreeze(false); // for performance

const App = getApp(Preact);

const stateManager = (latestState, reducer, action) => produce(latestState, draft => {
  reducer(draft, action);
});

render(createElement(App, { usePriority: true, limit: 2, stateManager }), document.getElementById('app'));
